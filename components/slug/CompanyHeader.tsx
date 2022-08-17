import styles from '../../styles/Home.module.css';
import { headerSlug } from '../../types/header';

function CompanyHeader({ slug }: headerSlug) {
  return (
    <div className={styles.slugHeaderContainer}>
      <div className={styles.slugHeader}>
        <div className={styles.slugCompanyId}>{slug.id}</div>
        <div className={styles.slugCompanyName}>
          {slug.name}
          <sup className={styles.sup}>{slug.status?.keyword}</sup>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
