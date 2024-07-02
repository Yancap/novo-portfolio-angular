declare interface IRespostaConhecimentosTecnicos extends IRespostaPrismic {
  data: {
    tecnologias: ITecnologia[]
  };
}

declare interface ITecnologia {
  tech: string;
  icon: string;
}
