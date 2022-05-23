import { useRouter } from "next/router";
import Link from "next/link";

function CompaniesListItem({ information }) {
  const {
    id,
    name,
    idno,
    website,
    email,
    creation_date,
    status,
    turnover,
    partners,
    mobile,
    phone,
    slug,
    industry,
    employees,
  } = information;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/${slug}`);
  };

  return (
    // <div key={id}>
    //   <p>{id}</p>
    //   <p>{name}</p>
    //   <p>{idno}</p>
    //   <p>{website}</p>
    //   <p>{creation_date}</p>
    // </div>
    <>
      <div style={{ marginLeft: "10rem" }}>
        <span>{id}</span> {/* <Link href={`/${id}`}> */}
        <span onClick={handleClick}>{name}</span>
        {/* </Link> */}
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div>IDNO {idno} </div>
          <div>Status {status} </div>
          <div>Date of establishment {creation_date}</div>
          <div>Virsta</div>
        </div>
        <div>
          <div>Nr. by the employees {employees} </div>
          <div>Turnover {turnover} </div>
          <div>Industry {industry} </div>
        </div>
        <div>
          Contacts
          <div>Phone mobile {mobile}</div>
          <div>Phone {phone} </div>
          <div>Email {email} </div>
          <div>Website {website} </div>
        </div>
      </div>
      {partners.length > 0 && <p>Founders of the company: {[...partners]}</p>}
    </>
  );
}

export default CompaniesListItem;
