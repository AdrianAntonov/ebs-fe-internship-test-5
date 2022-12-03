export type TStringOrNull = string | null;
export interface Quantity {
  id: number;
  name: string;
  email: TStringOrNull,
  phone: TStringOrNull,
  function: TStringOrNull,
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
  data: {
    personal: IPersonalQuantity;
  };
}
