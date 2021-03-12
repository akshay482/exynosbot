const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class Enlarge extends Command {
    constructor() {
        super('enlarge', {
            aliases: ['enlarge', 'emoji'],
            args: [
                {
                    id: 'emoji',
                    prompt: {
                        start: ':no_entry_sign: Provide an Emoji to be enlarged',
                        retry: ':no_entry_sign: Provide an Emoji which is in the server'
                    },
                    match: 'content',
                    type: 'emoji',
                    default: null
                }
            ],
            description: {
                content: 'Enlarges the provided emoji.',
                usage: '<emoji>',
                examples: [':lookingfor:', 'lookingfor', '754421240923553858', '<a:lookingfor:754421240923553858>']
            },
            category: 'Misc',
            ratelimit: 2
        });
    }

    exec(message, { emoji }) {
        emoji.fetchAuthor().then(() => {
            const embed = new MessageEmbed({
                color: `#ffc0cb`,
                title: 'The Enlarged Emoji: ',
                footer: `${this.client.user.username} Made With ❤️`,
                image: {
                    url: emoji.url
                },
            });
            message.channel.send(embed);
        });
    }
}

module.exports = Enlarge;
