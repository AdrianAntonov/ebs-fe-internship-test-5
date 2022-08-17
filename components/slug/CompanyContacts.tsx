import styles from '../../styles/Home.module.css';
import CompanyContactInfo from './CompanyContactInfo';
import CompanyLocation from './Location';

function CompanyContacts({ slug }) {
  return (
    <div className={styles.ContactsInfoWrapper}>
      <CompanyContactInfo contacts={slug.general_data.contact_info} />
      <CompanyLocation contacts={slug.general_data.contact_info} />
    </div>
  );
}

export default CompanyContacts;
