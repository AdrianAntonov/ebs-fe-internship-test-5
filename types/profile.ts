import { IBusinessHours } from './businessHours';

export interface IProfile {
  description: string;
  business_hours: IBusinessHours[];
}
export interface profile {
  slug: {
    general_data: IProfile;
  };
}
