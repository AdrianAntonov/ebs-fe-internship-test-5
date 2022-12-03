import { TStringOrNull } from "./quantityAdmPrt";

export default interface InformationProps {
  information: {
    id: number;
    name: string;
    idno: string;
    website: string;
    email: string;
    creation_date: string;
    status: string;
    turnover: number;
    partners: string[];
    mobile: TStringOrNull;
    phone: TStringOrNull;
    slug: TStringOrNull;
    industry: TStringOrNull;
    employees: string;
  };
}
