export interface IContact {
  emails: boolean[];
  faxes: boolean[];
  mobile: boolean[];
  phones: boolean[];
  sites: string[];
}

export interface IContactLocation {}

export interface contact {
  contacts: IContact;
}
