// client.ts

const axios = require("axios");

async function run() {
  while (true) {
    const res = await axios.get("http://localhost:3000/task");
    const task = res.data.task;

    if (task === null) {
      console.log("No task left.");
      break;
    }

    console.log(`Got task: ${task}`);
    const result = task * task;

    await axios.post("http://localhost:3000/result", { result });
    console.log(`Sent result: ${result}`);
  }
}

run();
