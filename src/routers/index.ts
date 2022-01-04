import * as express from "express";
import createUsuarioRouter from "./AdminRouter";
import createEnderecoRouter from "./EnderecoRouter";
import createViagemRouter from "./ViagemRouter";
import createAuthenticationRouter from "./Sign-inRouter"
import createViacaoRouter from "./ViacaoRouter"
import createSignUpRouter from "./Sign-upRouter"
import createBilheteRouter from "./BilheteRouter"

const createRouters = (app: express.Express) => {
  app.use("/sign-in", createAuthenticationRouter());
  app.use("/sign-up", createSignUpRouter());
  app.use("/admin", createUsuarioRouter());
  app.use("/enderecos", createEnderecoRouter());
  app.use("/viagens", createViagemRouter());
  app.use("/viacoes", createViacaoRouter());
  app.use("/bilhetes", createBilheteRouter());
};

export default createRouters;
