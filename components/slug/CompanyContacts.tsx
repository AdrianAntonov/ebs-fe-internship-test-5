import styles from '../../styles/Home.module.css';
import CompanyContactInfo from './CompanyContactInfo';

function CompanyContacts({ slug }) {
  return (
    <div className={styles.ContactsInfoWrapper}>
      <div className={styles.ContactsInfo}>
        <div className={styles.ContactsInfoHead}>Contact Information</div>{' '}
        {/*  all are arrays to be mapped ! */}
        <div className={styles.ContactsInfoContent}>
          <CompanyContactInfo contacts={slug.general_data.contact_info} />
        </div>
      </div>
      <div className={styles.ContactsInfo}>
        <div className={styles.ContactsInfoHead}>Location</div>
        <div className={styles.adresses}>
          <p>Adress de facto:</p>
          <p>{slug.general_data.contact_info.address_de_facto.title}</p>
        </div>
        <div className={styles.adresses}>
          <p>Adress de jur:</p>
          <p>{slug.general_data.contact_info.address_de_jur.title}</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyContacts;
