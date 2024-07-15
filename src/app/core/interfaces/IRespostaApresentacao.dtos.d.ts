declare interface IRespostaApresentacao extends IRespostaPrismic {
  data: IApresentacao;
}

declare interface IApresentacao {
  titulo: IRichText[];
  descricao: IRichText[];
  ocupacao_atual : string;
  formacoesacademicas: {
    formacaoacademica: IRichText[];
  }[];
}
