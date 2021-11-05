/** @format */
const cron = require("node-cron");
const config = require("./config");
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
    url: "http://localhost:5000/send",
  };
  axios(header).then((res) => {
    console.log("run_time_at_16_00");
  });
});