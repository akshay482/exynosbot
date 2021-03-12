const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class Announce extends Command {
    constructor() {
        super('announce', {
            aliases: ['announce', 'ann'],
            channel: 'guild',
            category: 'Admin-Mod',
            description: {
                content: 'Sends an Announcement in the given channel!',
                usage: '<channel>',
                examples: ['announce #announcements Hey There!']
            },
            typing: false

        });
    }

    async exec(message) {
        
        const prefix = 'e?'
        const args = message.content.slice(prefix.length).split(/ +/);

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry_sign: Invalid Permission");
        
        let announcement = args.slice(1).join(" ");
        if (!announcement) return message.reply('No Announcement? Please Mention some text to be Announced!')
        
        const embed = new MessageEmbed()
            .setDescription(announcement)
            .setTimestamp();

        message.channel.send(embed);
        
    }

}

module.exports = Announce;