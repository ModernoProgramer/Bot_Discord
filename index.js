const Discord = require('discord.js');
const {
    prefix,
    token
} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {

setTimeout(function() {
    client.user.setActivity('Death Note...', {
        type: 'WATCHING'
    })
}, 60000);
setTimeout(function() {
    client.user.setActivity('Naruto...', {
        type: 'WATCHING'
    })
}, 120000);
setTimeout(function() {
    client.user.setActivity('Pokémon...', {
        type: 'WATCHING'
    })
}, 180000);
setTimeout(function() {
    client.user.setActivity('Dragon Ball Z...', {
        type: 'WATCHING'
    })
}, 240000);
setTimeout(function() {
    client.user.setActivity('Spotify...', {
        type: 'LISTENING'
    })
}, 300000);
setTimeout(function() {
    client.user.setActivity('lolif hip hop....', {
        type: 'LISTENING'
    })
}, 360000);
setTimeout(function() {
    client.user.setActivity('Visual Estudio Code..', {
        type: 'PLAYING'
    })
}, 420000);
  

    console.log('Bot Online!');
});
            

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift();

    if (command === "ping"|| command ==="Ping") {
       
    } else if (command === "Link"|| command ==="link"){
      message.channel.send('``` Organizador de JavaScript```https://beautifier.io/ ```Documentação de PY```https://docs.python.org/pt-br/3 ```Documentação de Discord.JS ``` https://v12.discordjs.guide/creating-your-bot/commands-with-user-input.html#caveats-2\n```Documentação de JavaScript```https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide\n```Documentação de Node.JS\n```https://nodejs.org/pt-br/docs/\n```Documentação de PHP\n```https://www.php.net/docs.php\n```Documentação de Ruby\n```https://www.ruby-lang.org/pt/documentation/\n```Documentação de CSS```https://devdocs.io/css/\n``` Documetação de html```https://developer.mozilla.org/pt-BR/docs/Web/HTML\n```Site que estou criando o bot```https://replit.com/\n```Site de Hospedagem```https://uptimerobot.com/')
    } else if (command ==="Comandos"|| command ==="comandos"||command ==="Help"||command==="help"){
      message.channel.send(`Os comandos disponivel São:
*Link`)

    }

});

client.login(token);
