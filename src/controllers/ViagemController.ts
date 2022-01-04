import { IViagemService } from "../@types/services/IViagemService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import RequestWithUserData from "../@types/controllers/RequestWithUserData";

@Service("ViagemController")
export class ViagemController {
  public constructor(
    @Inject("ViagemService")
    private viagemService: IViagemService
  ){}

  async criar(req: RequestWithUserData, res: Response): Promise<void> {
    try {
      const authorization = req.headers.authorization;
      if(!authorization) {
        res.status(401).send();
        return;
      }
      const viagem = await this.viagemService.criar(authorization, req.body);
      res.status(201).send(viagem);
      return;
    } catch(error) {
      res.status(400).send();
    }
  }

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const listaViagens = await this.viagemService.listar();
      res.status(200).send(listaViagens);
    } catch(error) {
      res.status(500).send({ error: "internal server error" });
    }
  }
}
