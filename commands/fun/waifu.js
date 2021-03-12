const { MessageEmbed } = require('discord.js')
const { Command } = require('discord-akairo')
const fetch = require('node-fetch');


class Waifu extends Command {
    constructor() {
        super('waifu', {
            aliases: ['waifu', 'w'],
            channel: 'guild',
            category: 'Misc',
            description: {
                content: 'Gives a Random Waifu!',
                usage: 'waifu',
            },
            ratelimit: 2,
            typing: true
        });
    }

  async exec(message) {
    const { url } = await fetch("https://nekos.life/api/v2/img/waifu")
      .then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Here's Your Waifu! OwO")
      .setColor('#ffc0cb')
      .setImage(url)
      .setFooter(`Requested by: ${message.author.tag} | Powered By: ${this.client.user.username}`);

    return message.channel.send(embed);
  }
}

module.exports = Waifu;