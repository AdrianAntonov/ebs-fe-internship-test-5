import { Link } from '@mui/material';
import { iCompaniesLinkProps } from '../types/companiesLink';

const CompaniesLink = ({ props }: iCompaniesLinkProps) => {
  const { idno, slug, name } = props;

  return (
    <div className="flex w-[256px] cursor-pointer justify-between rounded border hover:bg-[#e0f6ff] sm:w-[320px] md:w-8/12">
      <Link style={{ textDecoration: 'none' }} href={`/companies/${slug}`}>
        {idno} {name}
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#afafaf"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    </div>
  );
};

export default CompaniesLink;
