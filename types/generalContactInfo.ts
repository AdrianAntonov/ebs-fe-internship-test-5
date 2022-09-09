import { IContact } from './contactInfo';
import { ILocation } from './companyLocation';

export interface IGeneralContactInfo extends IContact, ILocation {}
export interface ICompanyContacts {
  data: {
    general_data: {
      contact_info: IGeneralContactInfo;
    };
  };
}
