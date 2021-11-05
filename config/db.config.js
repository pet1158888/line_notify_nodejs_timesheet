const Sequelize = require("sequelize");
// const DBhost = "192.168.9.211";
//const DBhost = "192.168.5.222";
const DBhost = "192.168.5.19";
const DBuser = "mi";
//const DBpassword = "Sa@dmin";
const DBpassword = "miadmin";

const approval_sequelize = new Sequelize("APPROVAL", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const authorize_sequelize = new Sequelize("AUTHORIZE", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const inventory_sequelize = new Sequelize("INVENTORY", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const hrm_sequelize = new Sequelize("HRM", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const purchase_sequelize = new Sequelize("PURCHASE", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const systemlog_sequelize = new Sequelize("SYSTEMLOG", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const sales_sequelize = new Sequelize("SALES", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const qa_sequelize = new Sequelize("QA", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

const production_sequelize = new Sequelize("PRODUCTION", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});
const mi_sequelize = new Sequelize("mi", DBuser, DBpassword, {
  host: DBhost,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      useUTC: false,
      dateFirst: 1,
      trustServerCertificate: true,
      enableArithAbort: false,
    },
  },
});

module.exports = approval_sequelize;
module.exports = authorize_sequelize;
module.exports = inventory_sequelize;
module.exports = hrm_sequelize;
module.exports = purchase_sequelize;
module.exports = systemlog_sequelize;
module.exports = sales_sequelize;
module.exports = qa_sequelize;
module.exports = production_sequelize;
module.exports = mi_sequelize;
