require("dotenv").config();

const PING_URLS = process.env.PING_URLS.split(" ");
const MINUTES = process.env.MINUTES;

module.exports = { PING_URLS, MINUTES };
