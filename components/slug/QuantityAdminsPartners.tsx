import styles from '../../styles/Home.module.css';
import { NoData } from './NoData';
import { quantity } from '../../types/quantity';

function QuantityAdminsPartners({ slug }: quantity) {
  return (
    <div className={styles.slugPreviousInfo}>
      <div className={styles.slugPreviousInfoItem}>
        Administrators
        <div className={styles.itemInfo}>
          {slug.personal?.ADM?.length || <NoData />}
        </div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        Partners
        <div className={styles.itemInfo}>
          {slug.personal.PRT?.length || <NoData />}
        </div>
      </div>
    </div>
  );
}

export default QuantityAdminsPartners;
