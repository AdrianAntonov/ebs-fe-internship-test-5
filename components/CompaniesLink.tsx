import { UpArrow } from 'images/svgImages';
import Link from 'next/link';
import { iCompaniesLinkProps } from '../types/companiesLink';

const CompaniesLink = ({ props }: iCompaniesLinkProps) => {
  const { idno, slug, name } = props;

  return (
    <div className="flex w-[256px] cursor-pointer justify-between rounded border hover:bg-[#e0f6ff] sm:w-[320px] md:w-8/12">
      <Link href={`/companies/${slug}`}>
        <a>
          {idno} {name}
        </a>
      </Link>
      <UpArrow />
    </div>
  );
};

export default CompaniesLink;
