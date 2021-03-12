const { Command } = require('discord-akairo');

class Slowmode extends Command {
    constructor() {
        super('slowmode', {
            aliases: ['slowmode', 'slowmodeset', 'sm'],
            channel: 'guild',
            category: 'Admin-Mod',
            args: [
                {
                    id: "time",
                    type: "number",
                    prompt: {
                        start: ":no_entry_sign: Mention The Time Required"
                    }
                },
            ],
            description: {
                content: 'Sets the slowmode provided by the executor.',
                usage: '<time>',
                examples: ['5']
            },
            typing: false
        });
    }

    async exec(message, { time }) {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(":no_entry_sign: Invalid Permission");

        try {

        await message.channel.setRateLimitPerUser(time)
        return message.channel.send(`:thumbsup: Slowmode Set for ${time} Seconds!`);
        } catch (err) 
                {
                    message.channel.send(`:no_entry_sign: **${err}**`);
                }

    }
}

module.exports = Slowmode;