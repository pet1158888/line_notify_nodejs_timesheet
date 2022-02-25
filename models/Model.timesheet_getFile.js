var LineNotify = require('../src/client');
const mi_sequelize = require('../config/db.config');
const ACCESS_TOKEN = "0sHlHdNIkCtt5gZR2jNR3L6mFTWG19orYbFM7lXPBx1";
const ACCESS_TOKEN2 = "0ZQapzO7kMLFkz82AIJonnaDyVzQVTQMFVOA4XWA28d";
//const ACCESS_TOKEN = "vtnF8VVYTh0Tye8iSMcRZwDgXS4w19qxZ6uq6GSryzm";
//const ACCESS_TOKEN2 = "vtnF8VVYTh0Tye8iSMcRZwDgXS4w19qxZ6uq6GSryzm";
//mi 0ZQapzO7kMLFkz82AIJonnaDyVzQVTQMFVOA4XWA28d
//test Zz82ic2KrfKSuJA0ktg3hFq26oBHIvJIwsXGV2ykfv6
//bot2 vtnF8VVYTh0Tye8iSMcRZwDgXS4w19qxZ6uq6GSryzm
//production Dv0P2wueKjBI0uJNMtVgkS3ZJdrJARUbYJw3aa8D2YV
//production2 0sHlHdNIkCtt5gZR2jNR3L6mFTWG19orYbFM7lXPBx1
const notify = new LineNotify(`${ACCESS_TOKEN}`);
const notify2 = new LineNotify(`${ACCESS_TOKEN2}`);
const Timesheet_getFile = (timesheet) => {
    [];
}
const sendlineFN = (res) => {
  res.status(200).json(timesheet_data)
    var interval = 5000; // how much time should the delay between two iterations be (in milliseconds)?
  var promise = Promise.resolve();
  if (timesheet_data.length == 0) {
    notify.sendMessage("วันนี้ไม่มีข้อมูลในระบบ")
    notify2.sendMessage("วันนี้ไม่มีข้อมูลในระบบ")
  }  
  timesheet_data.forEach(function (data) {
     promise = promise.then(function () {
       console.log("data", data);
        img = `//192.168.5.40/www/planning/timesheet/upload_timesheet/${data.attach_file}`
        messages =`\n header_id: ${data.header_id}\n job_id: ${data.jobid}\n machine_id: ${data.machine_id}\n machine_name: ${data.machine_name}\n shift_name: ${data.shift_name}\n create_time: ${data.create_time}\n create_date: ${data.create_date}\n`
       notify.sendImage(img, messages)
       notify2.sendImage(img, messages)
        return new Promise(function (resolve) {
          setTimeout(resolve, interval);
        });
     });
});
  promise.then(function () {
    console.log('Loop finished.');
});
}
let sql;
let timesheet_data = [];
let messages;
let img ;
Timesheet_getFile.FunctionCkearVariable = () => {
   sql = "";
   timesheet_data = [];
   messages = "";
   img = "";
}
Timesheet_getFile.FunctionGetData = (req, res, next) => {
    Timesheet_getFile.FunctionCkearVariable();
    sql = " ";
    sql += `SELECT TOP 1
    files.id,
    files.header_id,
    files.attach_file_name,
    files.attach_file,
    convert(varchar, files.created, 24) as create_time,
      convert(VARCHAR,files.created,103) as create_date,
    files.created,
    header.plan_id,
    header.machine_id,
	  machine_tb.machine_name,
    planning.jobid,
    planning.shift_id, 
   CASE
       WHEN planning.shift_id = 1 THEN 'กลางวัน'
       ELSE 'กลางคืน'
   END AS shift_name
   FROM mi.dbo.timesheet_attach_files files
   LEFT JOIN mi.dbo.timesheet_header header ON header.header_id = files.header_id
   LEFT JOIN mi.dbo.machine_planning planning ON planning.id = header.plan_id
	 LEFT JOIN mi.dbo.machine machine_tb ON machine_tb.machine_id = header.machine_id
   --WHERE files.created = '2022-02-20'
   WHERE files.created > DateAdd(DAY, -1, GETDATE()) and files.created<=GETDATE()`;
    mi_sequelize.query(sql).then((data) => {
        timesheet_data.push(...data[0])
        sendlineFN(res);
    }) 
}

module.exports = Timesheet_getFile

// จะส่งข้อมูลวันที่ 11 ตอน 16:00
//   ให้ไปค้นหาข้อมูล ของ วันที่ 10 ตอน 16: 01 เป็นต้นไป
//                 จนถึงวันที่ 11 ตอน 16: 00

// จะส่งข้อมูลวันที่ 12 ตอน 16:00
// ให้ไปค้นหาข้อมูล ของ วันที่ 11 ตอน 16:01 เป็นต้นไป
//               จนถึงวันที่ 12 ตอน 16:00

// SELECT 
//     files.id,
//     files.header_id,
//     files.attach_file_name,
//     files.attach_file,
//     convert(varchar, files.created, 24) as create_time,
//     convert(VARCHAR,files.created,103) as create_date,
//     files.created,
//     header.plan_id,
//     header.machine_id,
//     planning.jobid,
//     planning.shift_id, 
//    CASE
//        WHEN planning.shift_id = 1 THEN 'กลางวัน'
//        ELSE 'กลางคืน'
//    END AS shift_name
//    FROM mi.dbo.timesheet_attach_files files
//    LEFT JOIN mi.dbo.timesheet_header header ON header.header_id = files.header_id
//    LEFT JOIN mi.dbo.machine_planning planning ON planning.id = header.plan_id
//    WHERE files.created > DateAdd(DAY, -1, GETDATE()) and files.created<=GETDATE()
// 	 --WHERE files.created >= DATEADD(hh, -24, GETDATE())
// 	 --WHERE files.created >= DATEADD(day, -1, GETDATE()) 
//    --WHERE convert(DATE, files.created, 20) >= CONVERT(VARCHAR(10), GETDATE()-1, 23) + ' '  + '16:01:00' AND convert(DATE, files.created, 20) <= CONVERT(VARCHAR(10), GETDATE(), 23) + ' '  + '16:00:00'
	 
