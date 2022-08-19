import { IBusinessHours } from './businessHours';

export interface IProfile {
  description: string;
  business_hours: IBusinessHours[];
}
export interface ICompanyProfile {
  slug: {
    general_data: IProfile;
  };
}
