const contract = require("../contract");
const user = require("./user-router");

const validarToken = (token) => {
  return true;
};

module.exports = (app) => {
  auth(app);

  app.use("/", (req, res, next) => {
    console.log("Autenticar usuario");

    const tokenValido = validarToken(req.headers.authorization);
    if (tokenValido) {
      next();
    } else {
      res.status(401);
    }
  });

  contract(app); // Rotas de contrato
  user(app); // Rotas de usuario
};
