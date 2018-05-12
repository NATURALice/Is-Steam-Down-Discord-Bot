# Is Steam Down Discord Bot

This bot does a simple check to see if the Steam servers are down, and responds to the user. It utilizes the SteamGauge API to do the Steam server check, the [discord.js](https://github.com/discordjs/discord.js/) library for interacting with Discord, as well as [request](https://github.com/request/request) for the API call.

![Discord Bot Example Image](https://i.imgur.com/GTq7DsX.png)

# Installing the bot

To use the bot on your server, you will need to have a Discord API key, which you get by creating an app for Discord. No credentials are needed for the SteamGauge API.

Create an app for discord here: https://discordapp.com/developers/docs/intro

Open your Discord App on the page above, and under "BOT", create a bot user.

In the "Token" field, select reveal. Copy + paste the token in place of "YOUR_CLIEND_ID_HERE" below:

https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID_HERE&scope=bot&permissions=0

Open the above link and it will request that the bot you created can join one of the servers you own. Select the correct server.The bot should now join your server, but will appear offline.

From the Discord APP page, grab the client ID and paste it into the "TOKEN" field within the "botconfig.json" file for this project. 

To run the bot locally, simply navigate to the directory the project files are in and run "node index.js"

### Notes

The only intent the bot can recognize is: "is steam down"
