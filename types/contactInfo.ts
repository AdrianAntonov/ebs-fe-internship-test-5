export interface IContact {
  emails: boolean[];
  faxes: boolean[];
  mobile: boolean[];
  phones: boolean[];
  sites: string[];
}

export interface contact {
  contacts: IContact;
}
