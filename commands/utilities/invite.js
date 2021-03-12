const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class Invite extends Command {
    constructor() {
        super('invite', {
            aliases: ['invite', 'add'],
            channel: 'guild',
            category: 'Utilities',
            description: {
                content: 'Provides you the invite link of the bot to add it in other servers.'
            }
        });
    }

    exec(message) {
        const embed = new MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('Invite The Bot')
        .setDescription('[**LINK TO INVITE**](https://discord.com/oauth2/authorize?client_id=764726231891312670&scope=bot&permissions=470215798)')
        .setFooter(`Powered By: ${this.client.user.username}`)
        .setTimestamp()
        return message.channel.send(embed)
    }
}

module.exports = Invite;