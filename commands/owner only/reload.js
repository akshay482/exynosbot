const { Command, Argument } = require('discord-akairo')

module.exports = class Reload extends Command {
    constructor() {
        super('reload', {
            aliases: ['reload'],
            ownerOnly: true,
            typing: true,
            clientPermissions: ['SEND_MESSAGES', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS'],
            description: {
                content: 'Reload a command/listener/inhibitor',
                usage: '< Command | Listener >'
            },
            category: "Bot Owner Only",
            args: [
                {
                    id: 'things',
                    type: Argument.union('command', 'listener'),
                    prompt: {
                        start: 'What Should I Reload?',
                        time: 4.5e4
                    }
                }
            ]
        })
    }
    async exec(message, { things }) {
    
    if (message.author.id !== "416952474587496449") return message.reply("**Only Bot Owner Can Only Run This Command!**");
    
        try{
            await things.reload()
            message.react("<:tickYes:796258492096708609>")
        }
        catch(err){
            const embed = new MessageEmbed()
            .addField(`Error Reloading ${stuff.id}`, `\`\`\`js\n${err}\`\`\``)
            await message.channel.send(embed)
        }
    }
}