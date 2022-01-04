import RequestWithUserData from "../@types/controllers/RequestWithUserData";
import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import Container from "typedi"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware";
import { ViacaoController } from "../controllers/ViacaoController";
const router = Router();

const getController = (): ViacaoController => {
  return Container.get<ViacaoController>("ViacaoController");
}

const createRouter = (): Router => {
  router.post("", authenticationMiddleware,
    authorizationMiddleware,
    (req, res) => {
      getController().criar(req, res);
    })

  router.post("/:id/funcionarios", authenticationMiddleware,
  authorizationMiddleware,
  (req, res) => {
    getController().cadastrarFuncionario(req, res);
  })

  router.get("/:id/funcionarios", authenticationMiddleware,
  (req, res) => {
    getController().listar(req, res);
  })
  return router;
}

export default createRouter;
