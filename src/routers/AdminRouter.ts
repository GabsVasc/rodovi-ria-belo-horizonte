import { Router } from 'express';
import { authenticationMiddleware } from '../middlewares/authenticationMiddleware';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import Container from 'typedi';
const router = Router();
import { AdminController  } from '../controllers/AdminController';

const getController = (): AdminController => {
  return Container.get<AdminController>('AdminController');
};

const crateRouter = () => {
  router.get('/usuarios', authenticationMiddleware,
    authorizationMiddleware,
    (req, res) => getController().list(req, res)
  );
  router.post('/usuarios', ((req, res) => getController().create(req, res)));
  router.get('/usuarios/:id', authenticationMiddleware,
    authorizationMiddleware,
    (req, res) => getController().get(req, res)
  );
  router.patch('/usuarios/:id', authenticationMiddleware,
    authorizationMiddleware,
    (req, res) => getController().update(req, res)
  );
  router.delete('/usuarios/:id', authenticationMiddleware,
    authorizationMiddleware,
    (req, res) => getController().remove(req, res)
  );

  return router;
};

export default crateRouter;
