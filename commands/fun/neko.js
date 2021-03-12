const { MessageEmbed } = require('discord.js')
const { Command } = require('discord-akairo')
const fetch = require('node-fetch');


class Neko extends Command {
    constructor() {
        super('neko', {
            aliases: ['neko', 'foxgirl'],
            channel: 'guild',
            category: 'Misc',
            description: {
                content: 'Gives a Random Neko or FoxGirl!',
                usage: '<command>',
            },
            ratelimit: 2,
            typing: true
        });
    }

  async exec(message) {
    const { url } = await fetch("https://nekos.life/api/v2/img/fox_girl")
      .then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Here's a..... Fox Girl?")
      .setColor('#ffc0cb')
      .setImage(url)
      .setFooter(`Requested by: ${message.author.tag} | Powered By: ${this.client.user.username}`);

    return message.channel.send(embed);
  }
}

module.exports = Neko;