import dynamic from 'next/dynamic';
import { ICompanyContacts } from '../../types/generalContactInfo';
const CompanyContactInfo = dynamic(() => import('./CompanyContactInfo'));
const CompanyLocation = dynamic(() => import('./CompanyLocation'));

function CompanyContacts({ data }: ICompanyContacts) {
  return (
    <div className="contactsInfoWrapper sm:flex-nowrap">
      <CompanyContactInfo contacts={data?.general_data?.contact_info} />
      <CompanyLocation contacts={data?.general_data?.contact_info} />
    </div>
  );
}

export default CompanyContacts;
