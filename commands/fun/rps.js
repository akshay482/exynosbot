const { Command } = require("discord-akairo")

class Rps extends Command {
constructor() {
        super('rps', {
            aliases: ['rps', 'rockpaperscissor'],
            category: 'Misc',
            description: {
                content: 'Plays the rock-paper-scissor game.',
            },
            typing: true
        });
    }
    
exec (message) {
        let args = message.content.slice(2).trim().split(/ +/g);
if (!args[1]) {
            return message.channel.send('Please include your choice.')
        }

        let choices = ['rock', 'paper', 'scissors'];
        if (choices.includes((args[1]).toLowerCase())) {
            let number = Math.floor(Math.random() * 3);
            if (number == 1) {
                return message.channel.send(':handshake: It was a tie, We both had ' + (args[1]).toLowerCase())
            }
            if (number == 2) {
                if ((args[1]).toLowerCase() == "rock") {
                    return message.channel.send(':thumbsdown: I won, I had **Paper**.')
                }
                if ((args[1]).toLowerCase() == "paper") {
                    return message.channel.send(':thumbsdown: I won, I had **Scissors**.')
                }
                if ((args[1]).toLowerCase() == "scissors") {
                    return message.channel.send(':thumbsdown: I won, I had **Rock**.')
                }
            }
            if (number == 0) {
                if ((args[1]).toLowerCase() == "rock") {
                    return message.channel.send(':ok_hand: You won, I had **Scissors**.')
                }
                if ((args[1]).toLowerCase() == "paper") {
                    return message.channel.send(':ok_hand: You won, I had **Rock**.')
                }
                if ((args[1]).toLowerCase() == "scissors") {
                    return message.channel.send(':ok_hand: You won, I had **Paper**.')
                }
            }
        } else {
            return message.channel.send('Please include either: Rock, Paper, or Scissors.')
        }
 }
 }
 
 module.exports = Rps;
