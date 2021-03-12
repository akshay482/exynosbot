const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class Support extends Command {
    constructor() {
        super('support', {
            aliases: ['support', 'supportserver', 'helpguild'],
            channel: 'guild',
            category: 'Utilities',
            description: {
                content: 'Provides you the link to the support server.'
            }
        });
    }

    exec(message) {
        const embed = new MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('Want Some Extra Support?')
        .setDescription('JOIN THE [**SUPPORT SERVER**](https://discord.gg/yZKzUxu) AND SORT OUT YOUR PROBLEMS OR GIVE US SUGGESTIONS!')
        .setFooter(`Powered By: ${this.client.user.username}`)
        .setTimestamp()
        return message.channel.send(embed)
    }
}

module.exports = Support;