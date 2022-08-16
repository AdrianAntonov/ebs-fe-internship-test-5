import { Link } from '@mui/material';

type TProps = {
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
};

interface iCompaniesLinkProps {
  props: TProps;
}

const CompaniesLink = ({ props }: iCompaniesLinkProps) => {
  // console.log(props);
  const { idno, slug, name } = props;

  return (
    <div>
      <Link href={`/companies/${slug}`}>
        {idno} {name}
      </Link>
    </div>
  );
};

export default CompaniesLink;
