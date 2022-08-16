import styles from '../../styles/Home.module.css';

type TStatus = {
  id: number;
  keyword: string;
  title: string;
};

interface ICompanyHeaderProps {
  prop: { id: number; name: string; status: TStatus };
}

function CompanyHeader({ prop: { id, name, status } }: ICompanyHeaderProps) {
  // console.log(status);

  return (
    <div className={styles.slugHeaderContainer}>
      <div className={styles.slugHeader}>
        <div className={styles.slugCompanyId}>{id}</div>
        <div className={styles.slugCompanyName}>
          {name}
          <sup className={styles.sup}>{status?.keyword}</sup>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
