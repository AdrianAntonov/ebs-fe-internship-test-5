export interface ISimilarCompanies {
  name: string;
  industry: string;
  location: string;
  site: string;
  email: boolean;
  phone: boolean;
  id: number;
}

export interface ISimilarCompaniesProps {
  data: {
    similar_companies: ISimilarCompanies[];
  };
}
