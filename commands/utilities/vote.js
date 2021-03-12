const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class Vote extends Command {
    constructor() {
        super('vote', {
            aliases: ['vote', 'topggvote', 'botvote'],
            channel: 'guild',
            category: 'Utilities',
            description: {
                content: 'See and Vote the bot via TopGG.'
            }
        });
    }

    exec(message) {
        const embed = new MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('Support The Bot')
        .setDescription('You Can Vote Our Bot [**Here**](https://top.gg/bot/764726231891312670/vote) and Show Some Support Towards The Bot!')
        .setFooter(`Powered By: ${this.client.user.username}`)
        .setTimestamp()
        return message.channel.send(embed)
    }
}

module.exports = Vote;