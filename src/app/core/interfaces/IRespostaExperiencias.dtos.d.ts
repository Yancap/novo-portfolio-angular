declare interface IRespostaExperiencias extends IRespostaPrismic {
  data: IExperiencias;
}

declare interface IExperiencias {
  empresa: string;
  data_saida: string;
  cargos: {
    idcargo: number;
    nomecargo: string;
    datafinal: null | string;
    datainicio: string;
    descricao: IRichText[];
    tecnologias: string;
  }[];
  projetoscargo: {
    idcargo: number;
    descricaoprojeto: string;
    links: IRichText[];
    minhafuncaoprojeto: string;
    nomeprojeto: string;
    tecnologiasicon: string;
  }[];
}
