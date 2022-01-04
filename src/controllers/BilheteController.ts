import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import RequestWithUserData from "../@types/controllers/RequestWithUserData";
import { IPassageiroService } from "../@types/services/IPassageiroService";
import { AssentoNaoExiste } from "../@types/errors/AssentoNaoExiste";
import { AssentoJaReservado } from "../@types/errors/AssentoJaReservado";

@Service("BilheteController")
export class BilheteController {
  public constructor(
    @Inject("PassageiroService")
    private passageiroService: IPassageiroService
  ){}

  async criar(req: RequestWithUserData, res: Response): Promise<void> {
    try {
      const authorization = req.headers.authorization;
      const bilhete =
        await this.passageiroService.criarBilhete(authorization, req.body);
      res.status(201).send(bilhete);
      return;
    } catch(error) {
      if(error instanceof AssentoNaoExiste) {
        res.status(400).send({ error: error.message })
        return;
      }

      if(error instanceof AssentoJaReservado) {
        res.status(422).send({ error: error.message })
        return;
      }
      res.status(500).send({ error: "internal server error" })
    }
  }
}
