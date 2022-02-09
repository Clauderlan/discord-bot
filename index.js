const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] })

const prefix = '!'
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
client.on('ready', () => {
  console.log('Cryred tá ON.');
})
client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get('ping').execute(message, args);
  }

  else if (command === "clear"){
    client.commands.get('clear').execute(message, args);
  }
  else if (command === "ban"){
    client.commands.get('ban').execute(message, args);
  }
  else if (command === "kick"){
    client.commands.get('kick').execute(message, args);
  }

  else if (command === "coinflip"){
    client.commands.get('coinflip').execute(message, args);
  }

  else if(command === "sortear"){
    client.commands.get('sortear').execute(message, args);
  }

  else if (command === "bruce"){
    client.commands.get('bruce').execute(message, args);
  }

  else if (command === "jope"){
    client.commands.get('jope').execute(message, args);
  }
  
})

client.login(config.BOT_TOKEN);
