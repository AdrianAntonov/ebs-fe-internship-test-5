interface TProps {
  creation_date: string;
  creation_year: number;
  email: boolean;
  employees: string;
  full_location: string;
  id: number;
  idno: string;
  industry: string;
  location: string;
  mobile: true;
  name: string;
  partners: string[];
  phone: boolean;
  slug: string;
  status: string;
  turnover: null;
  website: string;
}

export interface iCompaniesLinkProps {
  props: TProps;
}
