import styles from '../../styles/Home.module.css';
import CompanyWorkhours from './CompanyWorkhours';

function CompanyProfile({ slug }) {
  return (
    <div className={styles.ContactsInfoWrapper}>
      <div className={styles.ContactsInfo}>
        <div className={styles.ContactsInfoHead}>Company profile</div>
        <div className={styles.ContactsInfoContent}>
          {slug.general_data.description}
        </div>
      </div>
      <div className={styles.ContactsInfo}>
        <CompanyWorkhours data={slug.general_data.business_hours} />
      </div>
    </div>
  );
}

export default CompanyProfile;
