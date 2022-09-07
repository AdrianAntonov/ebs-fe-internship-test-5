import { headerSlug } from '../../types/header';

function CompanyHeader({ slug }: headerSlug) {
  return (
    <div className="mb-4 bg-[#fff] pt-[50px]">
      <div className="mx-auto flex w-full max-w-[75rem] text-2xl font-semibold">
        <div className="mr-4">{slug.id}</div>
        <div>
          {slug.name}
          <sup className="ml-2 inline-block rounded-[10px] bg-[#e0f6ff] p-1 text-xs text-[#494949] ">
            {slug.status?.keyword}
          </sup>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
