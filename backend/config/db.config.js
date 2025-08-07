module.exports = {
  HOST: "localhost",         // or your online DB host
  USER: "root",              // your MySQL username
  PASSWORD: "seagle123",  // your MySQL password
  DB: "sequelize-seagle",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};