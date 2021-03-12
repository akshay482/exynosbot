const { Command } = require("discord-akairo");

class Ban extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            category: 'Admin-Mod',
            description: {
                content: 'Bans the user from the guild!',
                usage: '<user> <reason>',
                examples: ['DeadShot#9511 Too Cool to Handle']
            },
            args: [
                {
                    id: "member",
                    type: "member",
                },
                {
                    id: "reason",
                    type: "string",
                    match: "rest",
                    
                },
            ],
            typing: false
        });
    }
    async exec(message, { member, reason }) {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":no_entry_sign: Invalid Permission");
        
        if (!member) return message.reply(':no_entry: Mention A User To Be Banned!');
        
        if (member.id == message.member.id) return message.reply(':no_entry: LOL, You cant Ban Yourself!');
        
        if (!member.bannable) return message.reply(':no_entry: I cant ban that user!');
        
        if (!reason) {
            const reason = "No Reason Given!"
            member
              .ban(reason)
              .then(() => {
                 message.channel.send(`:ok_hand: Successfully Banned **${member.user.tag}** for Reason - (***${reason}***)!`);
              })
              
              member.send(`You Have Been Banned from **${message.guild.name}** For Reason - **${reason}**`);   
        } else {
           member
              .ban(reason)
              .then(() => {
                 message.channel.send(`:ok_hand: Successfully Banned **${member.user.tag}** for Reason - (***${reason}***)!`);
                })
             
             member.send(`You Have Been Banned from **${message.guild.name}** For Reason - **${reason}**`);    
        }
        
    }
}
module.exports = Ban;