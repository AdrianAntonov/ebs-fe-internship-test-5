import {useQuery} from '@tanstack/react-query';
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic';
import { ICompanyContacts } from '../../types/generalContactInfo';
const CompanyContactInfo = dynamic(() => import('./CompanyContactInfo'));
const CompanyLocation = dynamic(() => import('./CompanyLocation'));

function CompanyContacts() {
const router = useRouter()
const { data }: ICompanyContacts = useQuery(['data', {id: router?.query?.slug}])
  
  return (
    <div className="contactsInfoWrapper sm:flex-nowrap">
      <CompanyContactInfo contacts={data?.general_data?.contact_info} />
      <CompanyLocation contacts={data?.general_data?.contact_info} />
    </div>
  );
}

export default CompanyContacts;
