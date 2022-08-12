import styles from '../styles/Home.module.css';

function AdminsBlocks({ people }) {
  const administrators = people?.personal?.ADM?.map((item) => (
    <div key={item.id}>
      <p>Name and Surname: {item.name}</p>
      <p>
        Seniority: <b>{item.seniority?.title || '---'}</b>
      </p>
      <p>
        Job function: <b>{item.seniority?.function || '---'}</b>
      </p>
      <p>Phone: {item.seniority?.phone || '---'}</p>
      <p>Email: {item.seniority?.email || '---'}</p>
    </div>
  ));

  return (
    <div className={styles.partnerBlock}>
      <p className={styles.ContactsInfoHead}>Administrators</p>
      {administrators}
    </div>
  );
}

export default AdminsBlocks;
