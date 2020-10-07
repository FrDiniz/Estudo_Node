const contract = require("./private/contract-router");
const privateUser = require("./private/user-router");
const publicUser = require("./public/user-router");

const validarToken = (token) => {
  return true;
};

module.exports = (app) => {
  app.use("/", (req, res, next) => {
    app.use('/public/user', publicUser) // Rotas de usuario
 
    const tokenValido = validarToken(req.headers.authorization);
    if (tokenValido) {
      next();
    } else {
      res.status(401);
    }

  });

  app.use('/contract', contract)
  app.use('/user', privateUser)
};
