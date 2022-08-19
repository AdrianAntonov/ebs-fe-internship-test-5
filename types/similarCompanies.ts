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
  slug: {
    similar_companies: ISimilarCompanies[];
  };
}
