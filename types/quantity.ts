interface Quantity {
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

export interface IQuantity {
  ADM?: Quantity[];
  PRT?: Quantity[];
}
export interface quantity {
  slug: {
    personal: IQuantity;
  };
}
