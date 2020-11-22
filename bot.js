const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.Nzc5OTU3OTkxNzkyNzA1NTM3.X7oGfA.tGx_lqfHm19RqgCgoZGa2ogYU3E);//Nzc5OTU3OTkxNzkyNzA1NTM3.X7oGfA.tGx_lqfHm19RqgCgoZGa2ogYU3E
