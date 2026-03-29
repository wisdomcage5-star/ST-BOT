module.exports = {
  config: {
    name: "help",
    version: "2.0",
    author: "Rai La Vincèra",
    countDown: 5,
    role: 0,
    shortDescription: "View all commands",
    longDescription: "Show full command list or command info",
    category: "system",
    guide: "{pn} [command]"
  },

  onStart: async function ({ message, args, commands, getPrefix }) {

    const prefix = getPrefix();

    // 👉 IF USER TYPES: help ping
    if (args[0]) {
      const cmd = commands.get(args[0].toLowerCase());
      if (!cmd) return message.reply("❌ Command not found.");

      return message.reply(
`╔════════════════╗
📌 COMMAND INFO
╚════════════════╝

Name: ${cmd.config.name}
Description: ${cmd.config.longDescription || "No description"}
Category: ${cmd.config.category || "No category"}
Cooldown: ${cmd.config.countDown}s
Permission: ${cmd.config.role}

Usage:
${prefix}${cmd.config.guide || cmd.config.name}`
      );
    }

    // 👉 SHOW ALL COMMANDS
    const allCommands = Array.from(commands.values());
    const categories = {};

    for (const cmd of allCommands) {
      const cat = cmd.config.category || "other";
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(cmd.config.name);
    }

    let msg = `
╔════════════════════╗
        ✦ AE BOT ✦
     𝗔𝗟𝗟 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
╚════════════════════╝

Prefix: ${prefix}\n`;

    for (const cat in categories) {
      msg += `\n✦ ${cat.toUpperCase()}\n━━━━━━━━━━━━━━\n`;
      msg += categories[cat].map(cmd => `• ${prefix}${cmd}`).join("\n");
      msg += "\n";
    }

    msg += `
━━━━━━━━━━━━━━
Type ${prefix}help <command>
👑 Owner: Rai La Vincèra`;

    message.reply(msg);
  }
};
