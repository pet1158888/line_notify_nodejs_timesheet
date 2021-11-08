/** @format */
const cron = require("node-cron");
const config = require("./config");
const configPORT = require('config')
const PORT = configPORT.get('PORT');
const {
  run_time_at_16_00
} = config;
const axios = require("axios");
cron.schedule(run_time_at_16_00, () => {
  console.log("Run task run_time_at_16_00");
  const header = {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    url: `http://localhost:${PORT}/send`,
  };
  axios(header).then((res) => {
    console.log("run_time_at_16_00");
  });
});