import styles from '../../styles/Home.module.css';
import { NoData } from './NoData';
import { previousInfo } from '../../types/previousData';

function PreviousInfo({ slug }: previousInfo) {
  return (
    <div className={styles.slugPreviousInfo}>
      <div className={styles.slugPreviousInfoItem}>
        <div>IDNO</div>
        <div className={styles.itemInfo}>
          {slug.general_data.idno || <NoData />}
        </div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        <div>Date of establishment</div>
        <div className={styles.itemInfo}>
          {slug.general_data.creation_date || <NoData />}
        </div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        <div>Staff</div>
        <div className={styles.itemInfo}>
          {slug.general_data.size.name || <NoData />}
        </div>
      </div>
    </div>
  );
}

export default PreviousInfo;
