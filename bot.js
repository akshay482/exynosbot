require('dotenv').config();
const { log } = require('console');
const { AkairoClient, CommandHandler, ListenerHandler, ClientUtil } = require('discord-akairo');
const { Discord, MessageEmbed } = require('discord.js');
const fs = require("fs");
const DBL = require("dblapi.js");

const { ownerID, defaultPrefix } = require('./config.js');
const { config }= require('dotenv');
const { join } = require('path');

const db = require('quick.db');

const commandsPath = join(__dirname, '..', 'commands/');
const listenersPath = join(__dirname, '..', 'listeners/');

class ExynosClient extends AkairoClient {
    constructor() {
        super(
            {
                ownerID
            },
            {
                disableEveryone: true
            }
        );
        this.dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NDcyNjIzMTg5MTMxMjY3MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA4MjAyMzc4fQ.7xKJhRQ56PYirZLvnq7u3Qk4SBaJTcKhbfvfRGBUMOo', {
            statsInterval: 900000
        }, this)

        this.commandHandler = new CommandHandler(this, {
            prefix: defaultPrefix,
            blockBots: true,
            blockClient: true,
            allowMention: true,
            handleEdits: true,
            defaultCooldown: 500,
            commandUtil: true,
            ignoreCooldown: ['416952474587496449', '772471054479785994'],
            directory: join(__dirname, "commands")
        });


        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, "listeners")
        });
        
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            dbl: this.dbl
        })
        
        this.db = db;
        this.util = new ClientUtil(this)
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
        this.commandHandler.loadAll();
    }
};

const client = new ExynosClient();
const { Collection } = require('discord.js')

client.queue = new Map()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Collection();

fs.readdir("./music/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./music/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});



client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }
  client.channels.cache.get(chx).send(`:tada: **Welcome to Our Server <@${member.user.id}>. Hope You Enjoy Your Stay Here!**`);
});

client.login('NzY0NzI2MjMxODkxMzEyNjcw.X4KczQ.eyNHVNI_3d2fWwty_akI6GI6Q1w');