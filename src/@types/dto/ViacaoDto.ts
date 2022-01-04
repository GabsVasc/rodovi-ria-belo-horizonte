export type ViacaoDto = {
  id: number;
  cnpj: string;
  nomeFantasia: string;
}

export type CriarViacaoDto = Omit<ViacaoDto, "id">;
