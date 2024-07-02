declare interface IRespostaApresentacao extends IRespostaPrismic {
  data: IApresentacao;
}

declare interface IApresentacao {
  titulo: IRichText[];
  descricao: IRichText[];
  formacoesacademicas: {
    formacaoacademica: IRichText[];
  }[];
}
