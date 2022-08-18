import styles from '../../styles/Home.module.css';
import { contact } from '../../types/contactInfo';

function CompanyContactInfo({ contacts }: contact) {
  const phones = contacts.phones.map((phone, idx) => (
    <span key={idx}>{phone}</span>
  ));
  const faxes = contacts.faxes.map((fax, idx) => <span key={idx}>{fax}</span>);
  const mobiles = contacts.mobile.map((mobile, idx) => (
    <span key={idx}>{mobile}</span>
  ));
  const emails = contacts.emails.map((email, idx) => (
    <span key={idx}>{email}</span>
  ));
  const sites = contacts.sites.map((item, idx) => (
    <div key={idx} className={styles.facebookItem}>
      <a href={item} className={styles.infoLink}>
        {item}
      </a>
    </div>
  ));

  return (
    <div className={styles.ContactsInfo}>
      <div className={styles.ContactsInfoHead}>Contact Information</div>
      <div className={styles.ContactsInfoContent}>
        <div>Phones {phones}</div>
        <div>Faxes {faxes}</div>
        <div>Mobile {mobiles}</div>
        <div>Emails {emails}</div>
        <div className={styles.facebookWrapper}>
          Websites:
          <div>{sites}</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyContactInfo;
