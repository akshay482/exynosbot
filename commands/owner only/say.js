const { Command } = require('discord-akairo');

class SayMessage extends Command {
    constructor() {
        super('say', {
            aliases: ['say', 'speak'],
            category: 'Bot Owner Only',
            ownerOnly: true,
        });
    }

    async exec(message) {
        if (message.author.id !== '416952474587496449') return message.reply('Only Bot Owner Can Use That Command!')
        
        var text = message.content.split(' ').slice(1).join(' ');
        if(!text) return message.channel.send('Put Something for Me to Say!');
        
        message.channel.send(text);
       message.delete();
       message.channel.stopTyping()
    }
}

module.exports = SayMessage;