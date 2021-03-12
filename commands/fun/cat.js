const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const subreddits = [
    'cat',
    'cats',
    'catpics',
    'kittens'
];

class Cat extends Command {
    constructor() {
        super('cat', {
            aliases: ['cat', 'cats', 'cato'],
            channel: 'guild',
            category: 'Misc',
            description: {
                content: 'Gives a random pic of a cat.'
            },
            typing: true
        });
    }

    async exec(message) {

        const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
            .then(response => response.json())
            .then(body => body.data);
        const selected = data[Math.floor(Math.random() * data.length)];
        return message.channel.send(
            new MessageEmbed()
                .setTitle(`Here's A Cutie 🐱`)
                .setColor("#ffc0cb")
                .setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`)
                .setFooter(`Powered By: ${this.client.user.username}`)
        );

    }

}

module.exports = Cat;