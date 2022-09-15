import dynamic from 'next/dynamic';
const CompanyWorkhours = dynamic(() => import('./CompanyWorkhours'));
import { ICompanyProfile } from '../../types/companyProfile';

function CompanyProfile({ data }: ICompanyProfile) {
  return (
    <div className="contactsInfoWrapper xs:flex-nowrap">
      <div className="contactsInfo">
        <div
          className="contactsInfoHead "
        >
          Company profile
        </div>
        <div className="contactsInfoContent">{data?.general_data?.description}</div>
      </div>
      <div className="contactsInfo">
        <CompanyWorkhours data={data?.general_data?.business_hours} />
      </div>
    </div>
  );
}

export default CompanyProfile;
