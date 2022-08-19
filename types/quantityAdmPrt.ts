export interface Quantity {
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

export interface IPersonalQuantity {
  ADM?: Quantity[];
  PRT?: Quantity[];
}
export interface IAdmPrtQuantity {
  slug: {
    personal: IPersonalQuantity;
  };
}
