const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');


class EightBall extends Command {
    constructor() {
        super('8ball', {
            aliases: ['8ball'],
            channel: 'guild',
            category: 'Misc',
            description: {
                content: 'Provides you a random question based on your questions.',
                usage: '<question>',
                examples: ['Is DeadShot a Good Developer | Ans: Certainly']
            },
            args: [
                {
                    id: 'question',
                    type: 'string',
                    prompt: {
                        start: ":no_entry_sign: Ask me a Question first!"
                    },
                }
            ],
            typing: true
        });
    }

    exec (message){

        var ball = ["Yes", "No", "Certainly", "Of Course", "No Doubt About that", "I Guess So", "Problably No", "Not Sure", "Definetly", "If You Wish So", "Why Not?", "Are u Sure? I'm not with that!", "Yes, If you wish so"];

        let answer = ball[Math.floor(Math.random() * ball.length)]

        let em = new MessageEmbed()
            .setTitle(`Question Asked by ${ message.author.tag }`)
            .setColor("#ffc0cb")
            .setDescription(`According To Me: **${answer}**`)
            .setFooter(`Powered By: ${this.client.user.username}`)
            .setTimestamp();
            
        message.channel.send(em);
    }

}

module.exports = EightBall;