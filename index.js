const Discord = require('discord.js');
const {
    prefix,
    token
} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('BOT Online!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift();

    if (command === "ping"|| command ==="Ping") {
        message.channel.send('Pong.');
    } else if (command === "beep") {
        message.channel.send('Boop.');
    } else if (command === `server||Server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (command === `user-info`|| command ==="User-Info"){
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (command === "avatar"|| command ==="Avatar") {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;

        });

       
    } else if (command === "Link"|| command ==="link"){
      message.channel.send('``` Organizador de JavaScript```https://beautifier.io/ ```Documentação de PY```https://docs.python.org/pt-br/3 ```Documentação de Discord.JS ``` https://v12.discordjs.guide/creating-your-bot/commands-with-user-input.html#caveats-2\n```Documentação de JavaScript```https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide\n```Documentação de Node.JS\n```https://nodejs.org/pt-br/docs/\n```Documentação de PHP\n```https://www.php.net/docs.php\n```Documentação de Ruby\n```https://www.ruby-lang.org/pt/documentation/\n```Documentação de CSS```https://devdocs.io/css/\n``` Documetação de html```https://developer.mozilla.org/pt-BR/docs/Web/HTML')
    } else if (command ==="Comandos"|| command ==="comandos"){
      message.channel.send(`Os comandos disponivel São 
      *Link
      *avatar
      *user-info
      *server`)
    }

});

client.login(token);
