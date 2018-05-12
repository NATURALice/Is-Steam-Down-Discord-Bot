// Set up constants for project
const botconfig = require("./botconfig.json"); // File contains the clientID for my bot
const Discord = require("discord.js"); // Require the discord.js library for node (contains all methods/objects/functions etc)
const apiCalls = require("./apiCalls.js"); // Functions for doing work
const client = new Discord.Client({disableEveryone: true}); // Creates discord object from discord.js
const request = require('request'); // Require request package for API call using requests
const options = {json: true}; // Auto parse API call to json
const steamGuageAPI = botconfig.steamGaugeEndpoint; // Endpoint for api call

// Logs the bot in using the token from botconfig.json
client.login(botconfig.token); 

// Ready event that turns the bot on. Bot will start reacting to intents after this completes.
client.on("ready", async () => {
	console.log(`${client.user.username} is online!`);
});

// Event listener for messages.
client.on('message', message => {

	// Checks for "is steam down" intent, and responds
	if (message.content === 'is steam down?') {
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