import styles from '../../styles/Home.module.css';
import { NoData } from './NoData';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';

function QuantityAdminsPartners({ data }: IAdmPrtQuantity) {
  return (
    <div className={styles.slugPreviousInfo}>
      <div className={styles.slugPreviousInfoItem}>
        Administrators
        <div className={styles.itemInfo}>
          {data?.personal?.ADM?.length || <NoData />}
        </div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        Partners
        <div className={styles.itemInfo}>
          {data?.personal?.PRT?.length || <NoData />}
        </div>
      </div>
    </div>
  );
}

export default QuantityAdminsPartners;
