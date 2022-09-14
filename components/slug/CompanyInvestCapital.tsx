import styles from '../../styles/Home.module.css';
import { NoData } from './NoData';
import { ICompanyInvestCapital } from '../../types/companyInvestCapital';

function CompanyInvestCapital({ data }: ICompanyInvestCapital) {
  const countries =
    data?.general_data?.social_capital?.countries.length > 0 ? (
      data?.general_data?.social_capital?.countries?.map((country) => (
        <div key={country.id}>{country.title}</div>
      ))
    ) : (
      <NoData />
    );
  return (
    <div className={styles.slugPreviousInfo}>
      <div className={styles.slugPreviousInfoItem}>
        Type of social capital
        <div className={styles.itemInfo}>
          {data?.general_data?.social_capital?.type?.title || <NoData />}
        </div>
      </div>
      <div className={styles.slugPreviousInfoItem}>
        Country of Origin of Investments:
        <div className={styles.itemInfo}>{countries}</div>
      </div>
    </div>
  );
}

export default CompanyInvestCapital;
