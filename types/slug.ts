import { IInvestCapital } from './investcapital';
import { ITurnover } from './turnover';
import { ISize } from './previousData';
import { IBusinessHours } from './businessHours';
import { IGeneralContactInfo } from './IGeneralContactInfo';
import { ISimilarCompanies } from './similarCompanies';
import { IQuantity } from './quantity';

export interface ISlug {
  slug: {
    id: number;
    name: string;
    status: {
      id: number;
      keyword: string;
      title: string;
    };
    general_data: {
      idno: string;
      creation_date: string;
      creation_year: number;
      description: string;
      business_hours: IBusinessHours[];
      contact_info: IGeneralContactInfo;
      size: ISize;
      social_capital: IInvestCapital;
      turnover: ITurnover;
    };
    personal: IQuantity;
    similar_companies: ISimilarCompanies[];
  };
}
