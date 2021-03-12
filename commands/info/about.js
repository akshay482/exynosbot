const { Command } = require('discord-akairo');
const { Message, MessageEmbed, version: djs } = require('discord.js');
const { version } = require('../../package.json');
const { utc } = require('moment');
const ms = require('ms');

class About extends Command {
    constructor() {
        super('about', {
            aliases: [ 'botinfo', 'bot'],
            channel: 'guild',
            category: 'Information',
            description: {
                content: 'Displays information about the bot.'
            },
            typing: false
        });
    }

    async exec(message) {
        
        const embed = new MessageEmbed()
            .setThumbnail(this.client.user.displayAvatarURL())
            .setColor('#ffc0cb')
            .setTitle('Exynos Information')
            .addField('__About:__', [
            "<a:Right_arrow:806860260237246465> Exynos (v2.1.1) is a Multipurpose Discord Bot featuring a ton of useful commands and easy-to-use User Interface. She is mainly built using the powerful 'Akairo' bot framework, NodeJS buildpack and JavaScript Language. She is online 24/7 and uses a VPS for keeping herself online, making the experience more classy."
            ])
            .addField('__Discord Information:__', [
		        `**<a:Right_arrow:806860260237246465> Client Name:** ${this.client.user.tag}`,
                `**<a:Right_arrow:806860260237246465> Cilent ID:** ${this.client.user.id}`,
                `**<a:Right_arrow:806860260237246465> Creation Date:** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                `**<a:Right_arrow:806860260237246465> Developers:** DeadShot, MohitDevOP`,
                `**<a:Right_arrow:806860260237246465> Buildpack:** DiscordJS,  Akairo`,
                `**<a:Right_arrow:806860260237246465> Hosting Provider:** Ubuntu, VPS`
            ])
            .setFooter(`Powered By: ${this.client.user.username}`)
            .setTimestamp();
    
        message.channel.send(embed);
    }
}

module.exports = About;