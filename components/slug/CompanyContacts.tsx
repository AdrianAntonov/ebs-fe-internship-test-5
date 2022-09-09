import styles from '../../styles/Home.module.css';
import CompanyContactInfo from './CompanyContactInfo';
import CompanyLocation from './CompanyLocation';
import { ICompanyContacts } from '../../types/generalContactInfo';

function CompanyContacts({ data }: ICompanyContacts) {
  return (
    <div className={styles.ContactsInfoWrapper}>
      <CompanyContactInfo contacts={data.general_data.contact_info} />
      <CompanyLocation contacts={data.general_data.contact_info} />
    </div>
  );
}

export default CompanyContacts;
