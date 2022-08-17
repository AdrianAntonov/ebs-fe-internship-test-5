export interface ILocation {
  title: string;
}

export interface location {
  contacts: {
    address_de_facto: ILocation;
    address_de_jur: ILocation;
  };
}
