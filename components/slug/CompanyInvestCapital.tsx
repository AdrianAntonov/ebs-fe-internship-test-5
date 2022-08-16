import styles from '../../styles/Home.module.css';

function CompanyInvestCapital({ slug }) {
  return (
    // <div>
    //   CompanyInvestCapital
    //   <div>
    //     <p>
    //       Type of social capital{' '}
    //       {slug.general_data?.social_capital?.type?.title}
    //     </p>
    //     <p>
    //       Country of Origin of Investments:{' '}
    //       {slug.general_data.social_capital.countries[0]?.title}
    //     </p>
    //   </div>
    <div className={styles.slugPreviousInfo}>
      <div className={styles.slugPreviousInfoItem}>
        Type of social capital
        <div className={styles.itemInfo}>
          {slug.general_data?.social_capital?.type?.title}
        </div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        Country of Origin of Investments:
        <div className={styles.itemInfo}>
          {slug.general_data.social_capital.countries[0]?.title}
        </div>
      </div>
    </div>
  );
}

export default CompanyInvestCapital;
