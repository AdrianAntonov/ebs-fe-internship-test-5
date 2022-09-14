import styles from '../../styles/Home.module.css';
import { NoData } from './NoData';
import { ICompanyPreviousInfo } from '../../types/companyPreviousData';

function PreviousInfo({ data }: ICompanyPreviousInfo) {

  return (
    <div className="mt-4 flex-wrap justify-between bg-white text-3xl shadow-[0_0.4375rem_1.6875rem_0.1875rem_#1f69b30d] sm:flex sm:flex-nowrap md:text-2xl lg:text-base">
      <div className="slugPreviousInfoItem">
        <div>IDNO</div>
        <div className={styles.itemInfo}>
          {data?.general_data?.idno || <NoData />}
        </div>
      </div>
      <div className="slugPreviousInfoItem">
        <div>Date of establishment</div>
        <div className={styles.itemInfo}>
          {data?.general_data?.creation_date || <NoData />}
        </div>
      </div>
      <div className="slugPreviousInfoItem">
        <div>Staff</div>
        <div className={styles.itemInfo}>
          {data?.general_data.size?.name || <NoData />}
        </div>
      </div>
    </div>
  );
}

export default PreviousInfo;
