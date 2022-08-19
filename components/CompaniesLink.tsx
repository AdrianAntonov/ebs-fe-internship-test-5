import { Link } from '@mui/material';
import { iCompaniesLinkProps } from '../types/companiesLink';

const CompaniesLink = ({ props }: iCompaniesLinkProps) => {
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
