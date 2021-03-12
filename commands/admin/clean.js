const { Command } = require('discord-akairo');

class Purge extends Command {
    constructor() {
        super('clean', {
            aliases: ['clean', 'purge'],
            channel: 'guild',
            category: 'Admin-Mod',
            description: {
                content: 'Deletes number of messages as per the arguments entered by the command executor. \n **Number of messaeges should be less than or equal to 100.**',
                usage: '<number>',
                examples: ['15']
            },
            args: [
                {
                    id: 'msg',
                    type: 'number',
                    prompt: {
                        start: ":no_entry_sign: Mention The Number String To be Cleaned [``>1 | <100``]"
                    },
                }
            ],
            typing: false

        });
    }

    async exec(message, { msg }) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":no_entry_sign: Invalid Permissions")
        
        try {
            await message.channel.bulkDelete(msg + 1, true)
            await message.channel.send(`:thumbsup: Succesfully Deleted **${msg}** Messages!`);

        } catch (err) {
            message.channel.send(`:no_entry_sign: **${err}**`);
        }

    }

}

module.exports = Purge;