export type ViagemDto = {
   id: number;
   pontoPartida: string;
   pontoDestino: string;
   dataViagem: Date;
}

export type CriarViagemDto = Omit<ViagemDto, "id">;
