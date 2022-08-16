import styles from '../../styles/Home.module.css';

function QuantityAdminsPartners({ slug }) {
  return (
    <div className={styles.slugPreviousInfo}>
      <div className={styles.slugPreviousInfoItem}>
        Administrators
        <div className={styles.itemInfo}>{slug.personal?.ADM?.length}</div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        Partners
        <div className={styles.itemInfo}>{slug.personal.PRT?.length}</div>
      </div>
    </div>
  );
}

export default QuantityAdminsPartners;
