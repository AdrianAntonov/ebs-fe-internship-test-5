import styles from '../styles/Home.module.css';

function CompanyContactInfo({ contacts }) {
  // console.log(contacts);

  const phones = contacts.phones.map((phone, idx) => (
    <span key={idx}>{phone}</span>
  ));

  return (
    <div>
      CompanyContactInfo
      <p>Phones {}</p>
      <p>Faxes {contacts.faxes}</p>
      <p>Mobile {contacts.mobile}</p>
      <p>Email {contacts.emails}</p>
      <p>
        Facebook{' '}
        {contacts.sites.map((item, idx) => (
          <a key={idx} href={item} className={styles.infoLink}>
            {item}
          </a>
        ))}
      </p>
    </div>
  );
}

export default CompanyContactInfo;
