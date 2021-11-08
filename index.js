const express = require('express');

const app = express();
const timesheetRouter = require('./routes/send');
const config = require('config')
const PORT = config.get('PORT');
require("./cron-jobs");
app.use(express.json());
app.use("/send",timesheetRouter)
app.get('/', (req, res) => {
    res.json({
        path: "/",
        method: "GET",
        api_doc:"enter path url/send is send line"
    })
})
app.listen(PORT, () => {
    console.log(`server is run port ${PORT}`)
})