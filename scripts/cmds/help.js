module.exports = {
  config: {
    name: "help",
    version: "1.0",
    author: "Rai La Vincèra",
    countDown: 5,
    role: 0,
    shortDescription: "Show all commands",
    longDescription: "View the list of bot commands",
    category: "system",
    guide: "{pn} [command]"
  },

  onStart: async function ({ message, args }) {

    const msg = `
╔════════════════════╗
        ✦  AE BOT  ✦
     𝗛𝗘𝗟𝗣 𝗖𝗘𝗡𝗧𝗘𝗥
╚════════════════════╝

✦ GENERAL COMMANDS
━━━━━━━━━━━━━━━━━━
• help
• ping
• uid
• prefix

✦ FUN COMMANDS
━━━━━━━━━━━━━━━━━━
• sim
• ai
• joke
• say
• meme

✦ GROUP MANAGEMENT
━━━━━━━━━━━━━━━━━━
• kick
• ban
• mute
• unmute
• warn

✦ SYSTEM
━━━━━━━━━━━━━━━━━━
• uptime
• owner
• restart

━━━━━━━━━━━━━━━━━━
Type: help <command>
Example: help ban
━━━━━━━━━━━━━━━━━━

👑 Owner: Rai La Vincèra
⚡ Powered by AE BOT
`;

    message.reply(msg);
  }
};
