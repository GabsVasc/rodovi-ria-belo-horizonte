import { PassageiroController } from "../controllers/PassageiroController";
import { RequestHandler, Router } from "express";
import Container from "typedi";
const router = Router();

const getController = (): PassageiroController => {
  return Container.get<PassageiroController>("PassageiroController");
};

const createRouter = (): Router => {
  router.post("", (async (req, res) => {
    await getController().criar(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
