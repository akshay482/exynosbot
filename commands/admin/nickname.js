const { Command } = require("discord-akairo");

class Nickname extends Command {
    constructor() {
        super('nickname', {
            aliases: ['nickname', 'nick'],
            category: 'Admin-Mod',
            description: {
                content: 'Sets the provide nickname of the user provided by the executor.',
                usage: '<user> <nickname>',
                examples: ['DeadShot#9511 <nickname>']
            },
            args: [
                {
                    id: "member",
                    type: "member",
                },
                {
                    id: "nick",
                    type: "string",
                    match: "rest",
                    
                },
            ],
            typing: false
        });
    }
    async exec(message, { member, nick }) {

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(":no_entry_sign: Invalid Permission");
        
        if (!member) return message.reply(':no_entry: Mention A User!');
        
        if (!nick) return message.reply(':no_entry: Mention A Nickname Also!');
        

         try {
             
             member.setNickname(nick || null).then(mem => {
            message.channel.send(mem.nickname ? `:ok_hand: **${member.user.tag}**'s Nickname Set to **${mem.nickname}**` : `:ok_hand: **${member.user.tag}**'s Nickname Set Back To Username **${mem.user.username}**`);
        })
        
         } catch (err)
            {
                message.channel.send(`:no_entry_sign: **${err}**`)
            }
    }
}
module.exports = Nickname;