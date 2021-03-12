require('dotenv').config();
const { log } = require('console');
const { AkairoClient, CommandHandler, ListenerHandler, ClientUtil } = require('discord-akairo');
const { Discord, MessageEmbed } = require('discord.js');
const fs = require("fs");
const DBL = require("dblapi.js");

const { ownerID, defaultPrefix, badWords } = require('./config.js');
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
        this.dbl = new DBL(dbl_token, {
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

client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }
    const embed = new MessageEmbed()
    .setTitle('<a:welcome:818365016424185856> Welcome To The Server! <a:welcome:818365016424185856>')
    .setDescription(`<a:Right_arrow:806860260237246465> Hello There, <@${member.user.id}> | We Are Extremely Happy to See You In Our Server. Make Sure to Read Rules and Enjoy Your Stay Here!`)
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter('Powered By: Exynos')
    .setTimestamp();
  client.channels.cache.get(chx).send(embed);
});

client.on("message", async message => {
    if(message.content === `e?welcome-test`) {
        const user = message.author;
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry_sign: Invalid Permission");
        
        const embed = new MessageEmbed()
    .setTitle('<a:welcome:818365016424185856> Welcome To The Server! <a:welcome:818365016424185856>')
    .setDescription(`<a:Right_arrow:806860260237246465> Hello There, ${user} | We Are Extremely Happy to See You In Our Server. Make Sure to Read Rules and Enjoy Your Stay Here!`)
    .setThumbnail(user.displayAvatarURL())
    .setFooter('Powered By: Exynos')
    .setTimestamp();
        message.channel.send(embed)
    }
    
    if(message.content === `e?set`) {
        const embed = new MessageEmbed()
    .setTitle('Getting Started')
    .setDescription('<:staff:780263034018594898> Before You Get Started With the Bot, Be Sure to Check the Following:')
    .addField('<:bot:780263750351585281> Bot Permissions:', [
        '`Manage Messages` , `Manage Roles` , `Manage Nickname` , `Voice Activity` , `Manage Channels` , `Kick/Ban Members`'
    ])
    .addField('<:tickYes:796258492096708609> Extra Checks:', [
        '`Bot Role Positioning` , `Permission Handling` , `Remove Permission (Where You Dont Want the Bot to Function)`'
    ])
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter('Use e?help for Commands List')
    message.channel.send(embed);
    }
    
    if(message.content === badWords) {
        const user = message.author;
        if (message.member.hasPermission("MANAGE_SERVER")) return;
        
        message.delete();
        message.channel.send(`Uh, Oh! ${user}, you aren't allowed to send that word here!`)
    }
    if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { 
        if (message.member.hasPermission("MANAGE_SERVER")) return;
    message.delete()
      .then(message.channel.send(`${message.member}, Invite Links are not allowed!`))
  }
})

client.login(discord_token);
