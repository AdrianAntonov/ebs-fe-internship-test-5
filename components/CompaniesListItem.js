import { useRouter } from "next/router";
import { Box } from "@mui/material";

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
    router.push(`/companies/${slug}`);
  };

  return (
    <>
      <div>
        <span>{id}</span> {/* <Link href={`/${id}`}> */}
        <span onClick={handleClick}>{name}</span>
        {/* </Link> */}
      </div>
      <br />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={6}>
        <Box gridColumn="span 4" spacing={8}>
          <div>IDNO {idno} </div>
          <div>Status {status} </div>
          <div>Date of establishment {creation_date}</div>
          <div>Virsta</div>
        </Box>
        <Box gridColumn="span 4">
          <div>Nr. by the employees {employees} </div>
          <div>Turnover {turnover} </div>
          <div>Industry {industry} </div>
        </Box>
        <Box gridColumn="span 4">
          Contacts
          <div>Phone mobile {mobile}</div>
          <div>Phone {phone} </div>
          <div>Email {email} </div>
          <div>Website {website} </div>
        </Box>
      </Box>
      {partners.length > 0 && <p>Founders of the company: {[...partners]}</p>}
    </>
  );
}

export default CompaniesListItem;
