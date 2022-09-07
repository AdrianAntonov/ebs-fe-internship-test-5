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
    <div className="bg-white w-[100%] shadow-[0_0.4375rem_1.6875rem_0.1875rem_#1f69b30d]">
      {/* .ContactsInfo {
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0 0.4375rem 1.6875rem 0.1875rem rgba(31, 105, 179, 0.05);
} */}
      <div className="text-xl border-b-[1px] border-b-solid border-b-[#e1e1e1]">Contact Information</div>
      {/* .ContactsInfoHead {
  font-size: 1.2rem;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin-left: 1rem;
} */}
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
