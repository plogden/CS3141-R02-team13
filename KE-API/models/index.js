const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

const CONFIG = require("../configuration/config");

const basename = path.basename(__filename);

// Setup db
const db = {};

const dbConfig = {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  pool: {
      max: 25,
      min: 0,
      acquire: 20000,
      idle: 10000,
      eviction: 10000,
  },
  dialectOptions: {
      encrypt: true,
      packetSize: 32768,
      options: {
          validateBulkLoadParameters: true,
          requestTimeout: 60000,
      }
  },
};

db.kedb = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, dbConfig);



fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(db.kedb, DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;