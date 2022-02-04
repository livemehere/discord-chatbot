# Discord Chatbot

### app.js

```js
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
```

## 공식문서에서는...

이 부분을 "messageCreate" 가 아니라 "interactionCreate"으로 설명하는데 되지않아서 다른이벤트를 적용하였더니 됬다.

```js
client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.content === "ping") {
    message.reply("pong!");
  }
});
```

또한 공식문서와 다르게 작성했기때문에 intents부분에 `Intents.FLAGS.GUILD_MESSAGES` 를 추가해줘야한다

```js
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
```
