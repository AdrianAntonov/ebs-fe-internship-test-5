interface definition {
  id: number;
  title: string;
}

export interface IInvestCapital {
  countries: definition[];
  type: definition;
}

export interface ICompanyInvestCapital {
  data: {
    general_data: {
      social_capital: IInvestCapital;
    };
  };
}
