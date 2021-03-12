const { Command } = require('discord-akairo');

class Ping extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'pong'],
            channel: 'guild',
            category: 'Utilities',
            description: {
                content: 'This provides the ping of the bot.'
            }
        });
    }

    async exec(message) {

        const msg = await message.channel.send('Pinging...');

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const choices = ['Is My Ping Fine?', 'Woah! Look at This', 'Hope It is Fine!'];
        const reponse = choices[Math.floor(Math.random() * choices.length)];

        msg.edit(`:ping_pong: ${reponse} - **Total Latency**: \`${latency}ms\`, **Bot Roundabout**: \`${Math.round(this.client.ws.ping)}ms\``)

    }
}

module.exports = Ping;