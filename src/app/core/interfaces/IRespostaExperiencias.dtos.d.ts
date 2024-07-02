declare interface IRespostaExperiencias extends IRespostaPrismic {
  data: IExperiencias;
}

declare interface IExperiencias {
  empresa: string;
  data_saida: string;
  cargos: {
    cargo: string;
    datafinal: null | string;
    datainicio: string;
    descricao: string;
    tecnologias: string;
  }[];
}
