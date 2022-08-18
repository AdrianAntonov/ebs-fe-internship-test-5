export interface IHeader {
  id: number;
  name: string;
  status: {
    id: number;
    keyword: string;
    title: string;
  };
}

export interface headerSlug {
  slug: IHeader;
}
