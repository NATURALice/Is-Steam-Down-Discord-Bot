const botconfig = require("./botconfig.json"); // JSON file contains the clientID and SteamGaugeAPI endpoint
const Discord = require("discord.js"); 
const request = require('request'); 
const options = {json: true}; 
const client = new Discord.Client({disableEveryone: true}); 
const steamGuageAPI = botconfig.steamGaugeEndpoint;

// Logs the bot in using the token from botconfig.json
client.login(botconfig.token); 

// Ready event that turns the bot on. Bot will start reacting to intents after this completes.
client.on("ready", async () => {
	console.log(`${client.user.username} is online!`);
});

// Event listener for messages.
client.on('message', message => {

	// Checks for "is steam down" intent, and responds
	let msg = message.content.toLowerCase();
	const intent = "is steam down?";
	if (msg === intent) {
		console.log("Received intent: 'is steam down'");
		const user = message.author;
		message.channel.send("Hey there " + user + ", one moment, checking...");
		console.log("Steam Bot: Hey there " + user + ", one moment, checking...");
		request(steamGuageAPI, options, function (error, response, body) {
			let isSteamDown = '';
			isSteamDown = body['ISteamClient']['online'];
			console.log("API Returned: " + isSteamDown);
			if (isSteamDown == 1){
				console.log("Steam Bot: Steam is online");
				message.channel.send("Steam is online.");
			} else {
				console.log("Steam Bot: Steam is down");
				message.channel.send("Steam is down.");
			};
		});
}});
