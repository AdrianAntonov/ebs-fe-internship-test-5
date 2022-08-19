import styles from '../../styles/Home.module.css';
import { NoData } from './NoData';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';

function AdminsBlocks({ slug }: IAdmPrtQuantity) {
  const administrators =
    slug?.personal?.ADM?.length > 0 ? (
      slug?.personal?.ADM?.map((item) => (
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
      <p className={styles.ContactsInfoHead}>Administrators</p>
      {administrators}
    </div>
  );
}

export default AdminsBlocks;
