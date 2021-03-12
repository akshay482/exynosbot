const { Command } = require('discord-akairo');

class DeleteChannel extends Command {
    constructor() {
        super('deleteChannel', {
            aliases: ['deletechannel', 'delete-channel', 'dch'],
            channel: 'guild',
            category: 'Admin-Mod',
            description: {
                content: 'Deletes channel as per the arguments entered by the command executor.',
                usage: '<channel-id>',
                examples: ['deletechannel 123456789012(general-chat)']
            },
            args: [
                {
                    id: 'ch',
                    type: 'string',
                }
            ],
            typing: false

        });
    }

    async exec(message, { ch }) {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(":no_entry_sign: Invalid Permission");
        
        if (!ch) return message.reply(':no_entry_sign: Mention Channel ID');

        try {
            let channel = message.guild.channels.cache.get(`${ch}`)
             channel.delete()

            await message.channel.send(`:thumbsup: Channel Successfully deleted!`);

        } catch (err) {
            message.channel.send(`:no_entry_sign: **${err}**`);
        }

    }

}

module.exports = DeleteChannel;