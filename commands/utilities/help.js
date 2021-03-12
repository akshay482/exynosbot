const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commands'],
            category: 'Utilities',
            description: {
                content: 'Displays information about a command',
                usage: '[command]',
                examples: ['userinfo']  
            }
        });
    }

    exec(message) {
       const embed = new MessageEmbed()
       .setTitle('Exynos Commands Interface')
       .setDescription('<a:gifland_discord:806861494394159174> Hi There, It\'s Exynos Reporting! Below are the listed commands executable in this client.')
       .setThumbnail(this.client.user.displayAvatarURL())
       .setFooter(`Prefix: e? | Powered By: ${this.client.user.username}`, this.client.user.displayAvatarURL())
       .addField(':no_entry: Authorised Only:' , [
           '`eval` , `reload` , `say`'
       ])
       .addField(':tools: Admin-Mod:' , [
           '`announce` , `ban` , `clean` , `createchannel` , `deletechannel` , `kick` , `mute` , `nickname` , `slowmode` , `unmute`'
       ])
       .addField(':wrench: Settings:', [
           '`setwlc` , `welcome-test`'
       ])
       .addField(':information_source: Information:' , [
           '`botinfo` , `avatar` , `serverinfo` , `stats` , `userinfo`'
       ])
       .addField('<:hypesquadevents:780263122862080022> Fun:' , [
           '`8ball` , `cat` , `dog` , `enlarge` , `meme` , `neko` , `rps` , `waifu`'
       ])
       .addField(':performing_arts: Reactions-Expressions:' , [
           '`cuddle` , `highfive` , `hug` , `pat` , `poke` , `slap` , `tickle` , `angry` , `blush` , `bored` , `confused` , `happy` , `sad`'
       ])
       .addField(':cd: Music:' , [
           '`play` , `pause` , `skip` , `stop` , `np` , `queue` , `resume` , `volume`'
       ])
       .addField(':gear: Utilities:' , [
           '`help` , `invite` , `ping` , `support` , `uptime` , `vote`'
       ])
       .addField('<a:Right_arrow:806860260237246465> __Quick Links__' , [
           '[GitHub](https://github.com/Exynos-Discord)・[Vote](https://top.gg/bot/764726231891312670/vote)・[Support](https://discord.gg/yZKzUxu)'
       ]);
     message.channel.send(embed);
    }
}

module.exports = HelpCommand;
