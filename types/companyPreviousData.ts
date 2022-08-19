export interface ISize {
  id: number;
  name: string;
}

export interface ICompanyPreviousInfo {
  slug: {
    general_data: {
      idno: string;
      creation_date: string;
      size: ISize;
    };
  };
}
