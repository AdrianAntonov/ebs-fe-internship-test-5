import styles from '../../styles/Home.module.css';

function PreviousInfo({ slug }) {
  return (
    <div className={styles.slugPreviousInfo}>
      <div className={styles.slugPreviousInfoItem}>
        <div>IDNO</div>
        <div className={styles.itemInfo}>{slug.general_data.idno}</div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        <div>Date of establishment</div>
        <div className={styles.itemInfo}>{slug.general_data.creation_date}</div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        <div>Staff</div>
        <div className={styles.itemInfo}>{slug.general_data.size.name}</div>
      </div>
    </div>
  );
}

export default PreviousInfo;
