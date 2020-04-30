// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started`); 
  client.user.setActivity(`You know i am a bot :):)`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
});

  client.on('message', message => {
  if (message.content === 'Hi') {
    message.react('🤣')
      .then(() => message.react('😃'))
            .then(() => message.react('😅'))
            .then(() => message.react('🤑'))
            .then(() => message.react('😱'))
            .then(() => message.react('🧛‍♂️'))
            .then(() => message.react('💋'))
            .then(() => message.react('✌️'))
            .then(() => message.react('👨‍👩‍👦‍👦'))
      .catch(() => console.error('One of the emojis failed to react.'));
  }
});

client.on('message', message => {
  if (message.content === 'hii') {
    message.react('🤣')
      .then(() => message.react('😃'))
            .then(() => message.react('😅'))
            .then(() => message.react('🤑'))
            .then(() => message.react('😱'))
            .then(() => message.react('🧛‍♂️'))
            .then(() => message.react('💋'))
            .then(() => message.react('✌️'))
            .then(() => message.react('👨‍👩‍👦‍👦'))
      .catch(() => console.error('One of the emojis failed to react.'));
  }
});

client.on('message', message => {
  if (message.content === 'hello') {
    message.react('🤣')
      .then(() => message.react('😃'))
            .then(() => message.react('😅'))
            .then(() => message.react('🤑'))
            .then(() => message.react('😱'))
            .then(() => message.react('🧛‍♂️'))
            .then(() => message.react('💋'))
            .then(() => message.react('✌️'))
            .then(() => message.react('👨‍👩‍👦‍👦'))
            .then(() => message.react('😅'))
            .then(() => message.react('🤑'))
            .then(() => message.react('😱'))
            .then(() => message.react('🧛‍♂️'))
            .then(() => message.react('💋'))
            .then(() => message.react('✌️'))
            .then(() => message.react('👨‍👩‍👦‍👦'))
      .catch(() => console.error('One of the emojis failed to react.'));
  }
});

client.on('message', message => {
  if (message.content === 'yo') {
    message.react('🤣')
      .then(() => message.react('😃'))
            .then(() => message.react('😅'))
            .then(() => message.react('🤑'))
            .then(() => message.react('😱'))
            .then(() => message.react('🧛‍♂️'))
            .then(() => message.react('💋'))
            .then(() => message.react('✌️'))
            .then(() => message.react('👨‍👩‍👦‍👦'))
      .catch(() => console.error('One of the emojis failed to react.'));
  }
});

client.on('message', msg => {
  if (msg.content === 'status') {
    msg.reply('If You want to see **__SERVER STATUS__** visit <#700907325837279333>');
};
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('This is not **__HELP SECTION__** For help join Waiting For Support OR message <@684505462540206102> ');
  }  
});

client.on('message', msg => {
  if (msg.content === 'Help') {
    msg.reply('This is not **__HELP SECTION__** For help join Waiting For Support OR message <@684505462540206102> ');
  }  
});

client.on('message', msg => {
  if (msg.content === 'Can Any One Help') {
    msg.reply('This is not **__HELP SECTION__** For help join Waiting For Support OR message <@684505462540206102> ');
  }  
});

client.on('message', msg => {
  if (msg.content === 'can any one help') {
    msg.reply('This is not **__HELP SECTION__** For help join Waiting For Support OR message <@684505462540206102> ');
  }  
});

client.on('message', msg => {
  if (msg.content === 'CAN YOU HELP ME') {
    msg.reply('This is not **__HELP SECTION__** For help join Waiting For Support OR message <@684505462540206102> ');
  }  
});

client.on('message', msg => {
  if (msg.content === 'Plz Help') {
    msg.reply('This is not **__HELP SECTION__** For help join Waiting For Support OR message <@684505462540206102> ');
  }  
});

client.on('message', msg => {
  if (msg.content === 'Help me fast') {
    msg.reply('This is not **__HELP SECTION__** For help join Waiting For Support OR message <@684505462540206102> ');
  }  
});


client.login(process.env.TOKEN);
