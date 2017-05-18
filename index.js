const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');
var schedule = require('node-schedule');


var pre = '.';
bot.on('message', (message) => {
    // qol things 
    if (!message.content.startsWith(pre)) return;
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];                                                                                                        command = command.slice(pre.length);

    let args = message.content.split(" ").slice(1);

    if (command === "say") {
	message.channel.send(args.join(" "));
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
    bot.user.setGame('with your Mum\'s pussy');

    var schedule = require('node-schedule');

    var j = schedule.scheduleJob('0 * * * *', function(){
	var sd = new Date();
	var hour = sd.getHours();
	var bong_o_clock = "";
	for (i = 0; i < hour; i++) {
	    bong_o_clock += "BONG! ";
	}
	console.log('it bonged fam');
	bot.channels.get('314522923593498634').send(bong_o_clock);
    });

});

//bot.channels.get('314522923593498634').send('BONG!');

bot.login(settings.test_bot); 
