const mongoose = require("mongoose");
const config = require("./");
module.exports = async () => {
  try {
    await mongoose.connect(config.database.connectionString, {
      useNewUrlParser: true,
    });

    console.log("Banco de dados conectado!");
  } catch (error) {
    console.log('Erro ao conectar banco de dados!', error);
  }
};
