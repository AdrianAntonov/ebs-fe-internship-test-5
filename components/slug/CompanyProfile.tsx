import CompanyWorkhours from './CompanyWorkhours';
import { ICompanyProfile } from '../../types/companyProfile';

function CompanyProfile({ slug }: ICompanyProfile) {
  return (
    <div className="mt-4 flex justify-between">
      <div className="w-[100%] bg-white shadow-[0_0.4375rem_1.6875rem_0.1875rem_#1f69b30d]">
        <div
          className="ml-4 border-b-[1px] border-b-solid
         border-b-[#e1e1e1] py-4 text-xl "
        >
          Company profile
        </div>
        <div className="ml-4 py-4">{slug.general_data.description}</div>
      </div>
      <div className="w-[100%] bg-white shadow-[0_0.4375rem_1.6875rem_0.1875rem_#1f69b30d]">
        <CompanyWorkhours data={slug.general_data.business_hours} />
      </div>
    </div>
  );
}

export default CompanyProfile;
