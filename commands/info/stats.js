const { Command } = require('discord-akairo');
const { Message, MessageEmbed, version: djs } = require('discord.js');
const { version } = require('../../package.json');
const { utc } = require('moment');
const ms = require('ms');

class StatsCommand extends Command {
    constructor() {
        super('stats', {
            aliases: ['stats', 'stat'],
            category: 'Information',
            channelRestriction: 'guild'
        });
    }

    exec(message) {
        const embed = new MessageEmbed()
            .setThumbnail(this.client.user.displayAvatarURL())
            .setColor('#ffc0cb')
            .setTitle('Exynos Statistics')
            .addField('__Statistics__', [
                `**❯ Users:** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                `**❯ Channels:** ${this.client.channels.cache.size.toLocaleString()}`,
                `**❯ Servers:** ${this.client.guilds.cache.size.toLocaleString()} `,
                '\u200b'
            ], true)
            .addField(`__Processor__`, [
                '**❯ Version:** v2.1.1',
                `**❯ Node.js:** ${process.version}`,
                `**❯ Discord.js:** v${djs}`,
                `**❯ Discord-Akairo:** v8.1.0`,
                `**❯ Modules:** Total ${this.handler.modules.size} Modules`,
                '\u200b'
			])
			.addField('__System__', [
                '**❯ Platform:** Virtual Private Server ',
                '**❯ CPU:** Intel(R) Xeon E5-2630 v4',
                '**❯ Memory:** 256MB | **ROM**: 2500MB'
			])
            .setFooter(`Powered By: ${this.client.user.username}`)
            .setTimestamp();
    
        message.channel.send(embed);
    }
}

module.exports = StatsCommand;