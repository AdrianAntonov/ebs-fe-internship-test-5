export interface IPreviousData {
  general_data: {
    idno: string;
    creation_date: string;
    size: {
      id: number;
      name: string;
    };
  };
}

export interface previousInfo {
  slug: IPreviousData;
}
