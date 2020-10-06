const pwd = process.env.dbPwd || "GMjKryQVQwUEqUnM";
module.exports = {
  port: process.env.port || 8080,
  database: {
    connectionString: `mongodb+srv://user:${pwd}@cluster0.dkn1i.mongodb.net/<dbname>?retryWrites=true&w=majority`,
  },
};
