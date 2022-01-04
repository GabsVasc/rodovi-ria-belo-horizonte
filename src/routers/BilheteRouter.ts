import RequestWithUserData from "../@types/controllers/RequestWithUserData";
import { BilheteController } from "../controllers/BilheteController";
import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import Container from "typedi"
const router = Router();

const getController = (): BilheteController => {
  return Container.get<BilheteController>("BilheteController");
}

const createRouter = (): Router => {
  router.post("", authenticationMiddleware,(req: RequestWithUserData, res) => {
    getController().criar(req, res);
  })
  return router;
}

export default createRouter;
