
import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UsuarioRepository } from "../../repositories/UsuarioRepository";
import { AssentoRepository } from "../../repositories/AssentoRepository";
import { BilheteRepository } from "../../repositories/BilheteRepository";
import { ViacaoRepository } from "../../repositories/ViacaoRepository";
import { ViagemRepository } from "../../repositories/ViagemRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/AdminController";
import "../../controllers/EnderecoController";
import "../../controllers/ViagemController";
import "../../controllers/PassageiroController";
import "../../controllers/ViacaoController";

// inicializa services
import "../../services/UsuarioService";
import "../../services/EnderecoService";
import "../../services/AssentoService";
import "../../services/ViacaoService";
import "../../services/ViagemService";
import "../../services/PassageiroService";

// inicializa clientes
import "../../clients/CepClient"
import "../../infra/http/AxiosHttpClient";


const createDependencyInjector = () => {
  Container.set("UsuarioRepository", getCustomRepository(UsuarioRepository));
  Container.set("AssentoRepository", getCustomRepository(AssentoRepository));
  Container.set("BilheteRepository", getCustomRepository(BilheteRepository));
  Container.set("ViacaoRepository", getCustomRepository(ViacaoRepository));
  Container.set("ViagemRepository", getCustomRepository(ViagemRepository));
};

export default createDependencyInjector;
