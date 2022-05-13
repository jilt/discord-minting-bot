const nearAPI = require("near-api-js");
const Discord = require("discord.js");
const { connect, keyStores, Contract, WalletConnection } = nearAPI;
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] })

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {

  let filter = m => m.author.id === msg.author.id
  
  if (msg.content === "!addlock") {
        msg.author.send("Type `login near` to check NEAR wallet")
  }
  
  if (msg.content === "login near") {
	  
	  const config = {
		networkId: "testnet",
//		keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		nodeUrl: "https://rpc.testnet.near.org",
		walletUrl: "https://wallet.testnet.near.org",
		helperUrl: "https://helper.testnet.near.org",
		explorerUrl: "https://explorer.testnet.near.org",
	};


	// connect to NEAR
	const near = await connect(config);
	// create wallet connection
	const wallet = new WalletConnection(near);
 
    msg.author.send("Type `login near` to check NEAR wallet")
  }
})



// connect to NEAR
 const near = await connect(config);



client.login(process.env.TOKEN)