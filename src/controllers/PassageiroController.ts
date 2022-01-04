import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IPassageiroService } from "../@types/services/IPassageiroService";
import { UsusarioJaExiste } from "../@types/errors/UsuarioJaExiste";

@Service("PassageiroController")
export class PassageiroController {
  public constructor(
    @Inject("PassageiroService")
    private passageiroService: IPassageiroService
  ){}

  async criar(req: Request, res: Response): Promise<void> {
    try {
      const passageiro = await this.passageiroService.cadastrarPassageiro(req.body);
      res.status(201).send(passageiro);
      return;
    } catch(error) {
      if(error instanceof UsusarioJaExiste) {
        res.status(422).send({ error: error.message });
        return;
      }
      res.status(500).send({ error: "internal server error "});
    }
  }
}
