const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');
var schedule = require('node-schedule');
var valid = require('validator');


var pre = '.';
var game = 'With your Mum\'s pussy';

bot.on('message', (message) => {
    // qol things 
    if (!message.content.startsWith(pre)) return;
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];                                                                                                        command = command.slice(pre.length);

    let args = message.content.split(" ").slice(1);

    if (command === "say") {
	message.channel.send(args.join(" "));
    }

    if (command === "changeGame") {
	var newGame = args.join(" ");
	bot.user.setGame(newGame);
	message.channel.send("Game changed");
    }
    
    // commands
    if (command === 'ffs') {
        message.channel.send('samsies');
    }

    if (command === 'big') {
	message.channel.send('BONG!');
    }

});

bot.on("ready", function () {
    console.log("Ready");
    bot.user.setGame(game);

    var schedule = require('node-schedule');

    var j = schedule.scheduleJob('0 * * * *', function(){
	var sd = new Date();
	var hour = sd.getHours();
	var bong_o_clock = "";
	var max_bongage = "MAXIMUM BONGAGE ACHIEVED!";
	var max_bong = false;
	for (i = 0; i < hour; i++) {
	    bong_o_clock += "BONG! ";
		if (i === 23) {
		    max_bong = true;
		}
	}
	console.log('it bonged fam');
	bot.channels.get('314522923593498634').send(bong_o_clock);
	    if (max_bong === true){
		bot.channels.get('314522923593498634').send(bong_o_clock);
	    }
    });

});

//bot.channels.get('314522923593498634').send('BONG!');

bot.login(settings.test_bot); 
