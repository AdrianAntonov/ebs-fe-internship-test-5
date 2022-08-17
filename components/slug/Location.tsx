import styles from '../../styles/Home.module.css';
import { location } from '../../types/location';
import { NoData } from './NoData';

function CompanyLocation({ contacts }: location) {
  return (
    <div className={styles.ContactsInfo}>
      <div className={styles.ContactsInfoHead}>Location</div>
      <div className={styles.adresses}>
        <p>Adress de facto:</p>
        <div>{contacts.address_de_facto.title || <NoData />}</div>
      </div>
      <div className={styles.adresses}>
        <p>Adress de jur:</p>
        <div>{contacts.address_de_jur.title || <NoData />}</div>
      </div>
    </div>
  );
}

export default CompanyLocation;
