const { Command } = require('discord-akairo');

class CreateChannel extends Command {
    constructor() {
        super('createChannel', {
            aliases: ['createchannel', 'create-channel', 'cch'],
            channel: 'guild',
            category: 'Admin-Mod',
            description: {
                content: 'Creates text/voice channel as per the arguments entered by the command executor.',
                usage: '<channel type> <channel name>',
                examples: ['text general-chat', 'voice General VC']
            },
            args: [
                {
                    id: 'chtype',
                    type: 'string',
                }
            ],
            typing: false

        });
    }

    async exec(message, { chtype }) {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(":no_entry_sign: Invalid Permissions");
        
        const prefix = 'e?'
        const args = message.content.slice(prefix.length).split(/ +/);
        
        let name = args.slice(1).join(" ");
        if (!name) return message.reply(':no_entry_sign: Mention The Channel Name');
        
        if (!chtype) return message.reply(':no_entry_sign: Mention The Channel Type [``Text/Voice``]');

        try {
            await message.guild.channels.create(`${name}`, { type: `${chtype}` });
            return message.channel.send(`:thumbsup: **${name}** Channel Successfully Created! `);

        } catch (err) {
            message.channel.send(`:no_entry_sign: **${err}**`);
        }

    }

}

module.exports = CreateChannel;
