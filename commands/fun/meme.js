const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const got = require('got');


class Meme extends Command {
    constructor() {
        super('meme', {
            aliases: ['meme'],
            channel: 'guild',
            category: 'Misc',
            description: {
                content: 'Gives a random meme to laugh.'
            },
            typing: true
        });
    }

    exec (message){

        let embed = new MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let memeImage = content[0].data.children[0].data.url;
            embed.setTitle('**I Got A Meme For Ya!**');
            embed.setImage(memeImage);
            embed.setColor("#ffc0cb")
            embed.setFooter(`Powered By: ${this.client.user.username}`)
            message.channel.send(embed)


        }).catch(console.error);    }

}

module.exports = Meme;