export interface ISize {
  id: number;
  name: string;
}

export interface ICompanyPreviousInfo {
  data: {
    general_data: {
      idno: string;
      creation_date: string;
      size: ISize;
    };
  };
}
