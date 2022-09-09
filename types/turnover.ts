type graphType = {
  turnover: number;
  year: number;
};
export interface ITurnover {
  graph: graphType[];
  last: number;
}

export interface ICompanyTurnover {
  data: {
    general_data: {
      turnover: ITurnover;
    };
  };
}
