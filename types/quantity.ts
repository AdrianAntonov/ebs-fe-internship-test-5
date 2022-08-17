export interface IQuantity {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  function: string | null;
  seniority: {
    id: string;
    title: string;
  };
}

export interface quantity {
  slug: {
    personal: {
      ADM?: IQuantity[];
      PRT?: IQuantity[];
    };
  };
}
