const { Command } = require("discord-akairo");

class Mute extends Command {
    constructor() {
        super('mute', {
            aliases: ['mute'],
            category: 'Admin-Mod',
            description: {
                content: 'mutes the user from the guild!',
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
    
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry: You Dont Have Permission to Mute!');
    
    if (!member) return message.reply(':no_entry: Mention A User to be Muted!');
    
    if (member.id == message.member.id) return message.reply(':no_entry: LOL, You cant Mute Yourself!');
    
    if (!reason) return message.reply(':no_entry: Please Give a Valid Reason!')
    
    if (!member.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry: I cant Mute that User!');
    
    let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    if (!mutedRole) return message.reply('I think there is no **"Muted"** Role. Please Create One with No Permissions to type!');
    
    member
      .roles.add(mutedRole)
      .then(() => {
        message.channel.send(`:ok_hand: Successfully Muted **${member.user.tag}** with Reason - (**${reason}**)`);
      });
        
    }
}
module.exports = Mute;