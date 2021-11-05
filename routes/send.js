
var express = require('express');
var router = express.Router();
const TimesheetController = require("../controllers/Controller.timesheet_getFile")
router.get('/',TimesheetController.timesheet_getfile);
module.exports = router;
