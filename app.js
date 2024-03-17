const cron = require("node-cron");
import("node-fetch");

const { PING_URLS, MINUTES } = require("./utils/config");

cron.schedule(`*/${MINUTES} * * * *`, async () => {
  try {
    for (const url of PING_URLS) {
      const response = await fetch(url);
      if (response.ok) {
        console.log(`Pinged at ${new Date()}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
});
