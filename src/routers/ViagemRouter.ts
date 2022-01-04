import RequestWithUserData from "../@types/controllers/RequestWithUserData";
import { ViagemController } from "controllers/ViagemController";
import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import Container from "typedi"
const router = Router();

const getController = (): ViagemController => {
  return Container.get<ViagemController>("ViagemController");
}

const createRouter = (): Router => {
  router.post("", authenticationMiddleware,(req: RequestWithUserData, res) => {
    getController().criar(req, res);
  })

  router.get("", authenticationMiddleware, (req: RequestWithUserData, res) => {
    getController().criar(req, res);
  })
  return router;
}

export default createRouter;
