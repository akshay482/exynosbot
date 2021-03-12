const { Listener } = require("discord-akairo")

class Ready extends Listener {
    constructor() {
        super('ready', {
            event: 'ready',
            emitter: 'client'
        });
    }

    exec() {

        let i = 0;
        setInterval(() => this.client.user.setActivity(`e?help | v@3.1.1 (Stable)`, { type: 'LISTENING' }), 15000);

        console.log(`${this.client.user.tag} is online and functional!`);

    }
}

module.exports = Ready;