module.exports = {
  HOST: "185.158.114.248",
  USER: "leverage",
  PASSWORD: "leverage",
  DB: "testdb",
  dialect: "mongodb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
