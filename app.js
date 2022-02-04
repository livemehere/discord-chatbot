import express from "express";
import { Client, Intents } from "discord.js";
import "dotenv/config";

const app = express();
const TOKEN = process.env.BOT_TOKEN;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.content === "ping") {
    message.reply("pong!");
  }
});

client.login(TOKEN);

app.listen(5252, () => {
  console.log("server ion");
});
