//Discord bot with simple functions and commands.

//import discord.js module
var Discord = require("discord.js");

//create new client instance
var client = new Discord.Client();

//import yaml module
var yaml = require('js-yaml');

//import fs module
var fs = require('fs');

//import request module
//var request = request('request');

//import path module
//var path = require('path');

//token of bot
try{
    var tokens = yaml.safeLoad(fs.readFileSync('tokens.yaml', 'utf8'));
    console.log(token);
}catch(e){
    console.log(e);
}

var token = tokens["discord"];
var token2 = tokens["imgur"];

//makes sure ready is emitted
client.on('ready', () => {
    console.log('I am ready.');
});

//create event listener for messages
client.on('message', message => {
    //if message is ">hello"
    if(message.content === '>hello'){
        //replies with "Hello (user)" to the user who sent the command.
        message.channel.send('Hello ' + message.author.username);
    }
    else if(message.content === '>time') {
        //replies with user's current time.
        message.channel.send('Your time is ' + Date());
    }
    else if(message.content === '>help'){
        //replies with list of commands.
        message.channel.send({embed: {
            title: 'Birb Bot',
            description: 'These are the commands for the Birb Bot.',
            fields: [{
                name: '>hello',
                value: 'Greets user.'
            },
            {
                name: '>time',
                value: "Shows today's date and time along with the user's timezone."
            },
            {
                name: '>stream',
                value: 'Lets everyone know user is streaming. Only use after stream has started!'
            }
            ]

        }})

    }
    /*else if(message.content === '>stream'){
        //replies with link to user's twitch stream as well as the game they are playing.
        message.channel.send({embed: {
            title: 'Streaming!',
            fields: [{
                name: message.author.username + ' is streaming' + message.author.presence.game.name + ' ! Come Watch!',
                value: 'message.author.presence.game.url'
            }
            ]
        }})
        
    }*/

});

//create event listener for new members
client.on('guildMemberAdd', member => {
    //Sends greeting to the default channel mentioning the member.
    member.guild.defaultChannel.send(`Welcome to the server, ${member}! Use >help for a list of server commands.`);
})

//create event listener for when members leave server
client.on('guildMemberRemove', member => {
    //Sends leave message to the default channel 
   // member.guild.defaultChannel.send(`${member} has left the server.`);
})

/*client.on('message', message => {
    //if message is ">bird"
    if(message.content === '>bird'){
        //replies with image of bird from imgur gallery with bird tag
            var request = require("request");
            var options = { method: 'GET',
             url: 'https://api.imgur.com/3/gallery/t/bird/1',
             headers: 
               { 'postman-token': 'token2',
                 'cache-control': 'no-cache',
                 authorization: 'Client-ID c29561e97a6e940' } };
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
                message.channel.send(body.link);
            });
    }
})*/

//log in bot
client.login(token);

