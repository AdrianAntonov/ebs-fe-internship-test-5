export interface IHeader {
  id: number;
  name: string;
  status: {
    id: number;
    keyword: string;
    tite: string;
  };
}

export interface headerSlug {
  slug: IHeader;
}
