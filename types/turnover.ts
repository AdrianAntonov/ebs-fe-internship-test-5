type graphType = {
  turnover: number;
  year: number;
};
export interface ITurnover {
  graph: graphType[];
  last: number;
}

export interface turnover {
  slug: {
    general_data: {
      turnover: ITurnover;
    };
  };
}
