const { Command } = require("discord-akairo");

class Unmute extends Command {
    constructor() {
        super('unmute', {
            aliases: ['unmute'],
            category: 'Admin-Mod',
            description: {
                content: 'unmutes the user from the guild!',
                usage: '<user>',
                examples: ['DeadShot#9511']
            },
            args: [
                {
                    id: "member",
                    type: "member",
                },
            ],
            typing: false
        });
    }
    async exec(message, { member }) {
    
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry: You Dont Have Permission to Unmute!');
    
    if (!member) return message.reply(':no_entry: Mention A User to be Unmuted!');
    
    if (!member.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry: I cant Unmute that User!');
    
    let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    
    member
      .roles.remove(mutedRole)
      .then(() => {
        message.channel.send(`:ok_hand: Successfully Unmuted **${member.user.tag}**`);
      });
        
    }
}
module.exports = Unmute;