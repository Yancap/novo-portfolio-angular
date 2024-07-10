declare interface IRespostaProjetos extends IRespostaPrismic {
  data: {
    projeto: IProjeto[];
  };
}

declare interface IProjeto {
  titulo: string;
  descricao: string;
  tecnologias: string;
  url: string;
  github: string;
  imagem: {
    url: string;
  };
}
