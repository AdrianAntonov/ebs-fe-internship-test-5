import { IInvestCapital } from './companyInvestCapital';
import { ITurnover } from './turnover';
import { ISize } from './companyPreviousData';
import { IBusinessHours } from './businessHours';
import { IGeneralContactInfo } from './generalContactInfo';
import { ISimilarCompanies } from './similarCompanies';
import { IPersonalQuantity } from './quantityAdmPrt';

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
    personal: IPersonalQuantity;
    similar_companies: ISimilarCompanies[];
  };
}
