import styles from '../../styles/Home.module.css';
import { NoData } from './NoData';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';

function PartnersBlocks({ slug }: IAdmPrtQuantity) {
  const partners =
    slug?.personal?.PRT?.length > 0 ? (
      slug?.personal?.PRT?.map((item) => (
        <div key={item.id}>
          <p>Name and Surname: {item.name}</p>
          <p>
            Seniority: <b>{item.seniority?.title || '---'}</b>
          </p>
          <p>
            Job function: <b>{item.function || '---'}</b>
          </p>
          <p>Phone: {item.phone || '---'}</p>
          <p>Email: {item.email || '---'}</p>
        </div>
      ))
    ) : (
      <NoData />
    );

  return (
    <div className={styles.partnerBlock}>
      <p className={styles.ContactsInfoHead}>Partners</p>
      {partners}
    </div>
  );
}

export default PartnersBlocks;
