interface Location {
  title: string;
}

export interface ILocation {
  address_de_facto: Location;
  address_de_jur: Location;
}

export interface location {
  contacts: ILocation;
}
