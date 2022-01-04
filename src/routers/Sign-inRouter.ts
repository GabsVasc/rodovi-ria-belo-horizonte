import { RequestHandler, Router } from "express";
import Container from "typedi";
const router = Router();
import { AdminController } from "../controllers/AdminController";

const getController = (): AdminController => {
  return Container.get<AdminController>("AdminController");
};

const createRouter = (): Router => {
  router.post("", (async (req, res) => {
    await getController().autenticar(req, res);
  }) as RequestHandler);

  return router;
};

export default createRouter;
