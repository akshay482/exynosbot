const { Command } = require('discord-akairo');
const db = require('quick.db');

class Welcome extends Command {
    constructor() {
        super('setwelcome', {
            aliases: ['setwelcome', 'setwlc'],
            channel: 'guild',
            category: 'Admin-Mod',
            ownerOnly: false
        });
    }

    async exec(message) {
        let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send(":no_entry: Please Mention the Channel First!")
    }
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`:ok_hand: Welcome Channel is Now Setted as ${channel}!`)

    }
}
module.exports = Welcome;