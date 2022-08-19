export default interface ICompaniesListItem {
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
    mobile: string | null;
    phone: string | null;
    slug: string | null;
    industry: string | null;
    employees: string;
  };
}
