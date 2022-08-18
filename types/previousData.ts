export interface ISize {
  id: number;
  name: string;
}

export interface previousInfo {
  slug: {
    general_data: {
      idno: string;
      creation_date: string;
      size: ISize;
    };
  };
}
