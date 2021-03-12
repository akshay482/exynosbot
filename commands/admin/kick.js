const { Command } = require("discord-akairo");

class Kick extends Command {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            category: 'Admin-Mod',
            description: {
                content: 'Kicks the user from the guild!',
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

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":no_entry_sign: Invalid Permission");
        
        if (!member) return message.reply(':no_entry: Mention A User To Be Kicked!');
        
        if (member.id == message.member.id) return message.reply(':no_entry: LOL, You cant Kick Yourself!');
        
        if (!member.kickable) return message.reply(':no_entry: I cant kick that user!');
        
        if (!reason) {
            const reason = "No Reason Given!"
            member
              .kick(reason)
              .then(() => {
                 message.channel.send(`:ok_hand: Successfully Kicked **${member.user.tag}** for Reason - (***${reason}***)!`);
              })
              
              member.send(`You Have Been Kick from **${message.guild.name}** For Reason - **${reason}**`);   
        } else {
           member
              .kick(reason)
              .then(() => {
                 message.channel.send(`:ok_hand: Successfully Kicked **${member.user.tag}** for Reason - (***${reason}***)!`);
                })
             
             member.send(`You Have Been Kicked from **${message.guild.name}** For Reason - **${reason}**`);    
        }
        
    }
}
module.exports = Kick;