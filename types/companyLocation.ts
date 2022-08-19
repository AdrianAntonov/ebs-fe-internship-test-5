interface Location {
  title: string;
}

export interface ILocation {
  address_de_facto: Location;
  address_de_jur: Location;
}

export interface ICompanyLocation {
  contacts: ILocation;
}
