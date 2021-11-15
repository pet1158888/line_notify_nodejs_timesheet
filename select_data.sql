SELECT
    files.id,
    files.header_id,
    files.attach_file_name,
    files.attach_file,
    convert(varchar, files.created, 24) as create_time,
    convert(VARCHAR,files.created,103) as create_date,
    files.created,
    header.plan_id,
    header.machine_id,
    planning.jobid,
    planning.shift_id,
    CASE
       WHEN planning.shift_id = 1 THEN 'กลางวัน'
       ELSE 'กลางคืน'
   END AS shift_name
FROM mi.dbo.timesheet_attach_files files
    LEFT JOIN mi.dbo.timesheet_header header ON header.header_id = files.header_id
    LEFT JOIN mi.dbo.machine_planning planning ON planning.id = header.plan_id
WHERE files.created > DateAdd(DAY, -1, GETDATE()) and files.created<=GETDATE()