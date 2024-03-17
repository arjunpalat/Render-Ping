require("dotenv").config();

const PING_URLS = process.env.PING_URLS.split(" ");

module.exports = { PING_URLS };

