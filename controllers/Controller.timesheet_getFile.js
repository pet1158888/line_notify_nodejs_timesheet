const TIMESHEET_GETFILE = require("../models/Model.timesheet_getFile");

exports.timesheet_getfile = (req, res, next) => {
    TIMESHEET_GETFILE.FunctionGetData(req, res, next);
}