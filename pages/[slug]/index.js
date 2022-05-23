import { useRouter } from "next/router";
import axios from "axios";

function CompanyId({ slug }) {
  const router = useRouter();

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
    industry,
    employees,
  } = slug;

  // const companyId = router.query.companyId;
  console.log(slug);

  return (
    <div>
      Details
      <div style={{ marginLeft: "10rem" }}>
        <span>{id}</span> {/*must */}
        <span>{name}</span>
        {/*must */}
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div>IDNO {slug.general_data.idno} </div> {/*must */}
          <div>Status {status.keyword} </div>
          <div>Date of establishment {slug.general_data.creation_date}</div>
          {/*must */}
          <div>Virsta{/* de calculat  virsta */}</div>
        </div>
        <div>
          <div>Nr. by the employees {slug.general_data.size.name} </div>
          {/*must, este emplyees */}
          <div>{slug.general_data.description}</div>
          {/* <div>{slug.general_data.business_hours}</div> is an array to map */}

          <div>
            Contacts {/*  all are arrays to be mapped ! */}
            <p>Phones {slug.general_data.contact_info.phones}</p>
            <p>Faxes {slug.general_data.contact_info.faxes}</p>
            <p>Mobile {slug.general_data.contact_info.mobile}</p>
            <p>Email {slug.general_data.contact_info.emails}</p>
            <p>Facebook {slug.general_data.contact_info.facebook} </p>
          </div>
          <div>Partners {slug.personal.PRT.length}</div>
          <div>Administrators {slug.personal.ADM.length}</div>
          <div>
            {/* must map arrays of ADM & PRT */}
            Parteners
            <p>Name and Surname: {slug.personal.PRT[0].name}</p>
            <p>Seniority: {slug.personal.PRT[0].seniority.title}</p>{" "}
            <p>Job Function: {slug.personal.PRT[0].seniority.function}</p>{" "}
            <p>Phone: {slug.personal.PRT[0].seniority.phone}</p>{" "}
            <p>Email: {slug.personal.PRT[0].seniority.email}</p>{" "}
          </div>
          <div>
            Administrators
            <p>Name and Surname: {slug.personal.ADM[0].name}</p>
            <p>Seniority: {slug.personal.ADM[0].seniority.title}</p>{" "}
            <p>Job Function: {slug.personal.ADM[0].seniority.function}</p>{" "}
            <p>Phone: {slug.personal.ADM[0].seniority.phone}</p>{" "}
            <p>Email: {slug.personal.ADM[0].seniority.email}</p>{" "}
          </div>
          <div>
            Turnover {slug.general_data.turnover.last}
            {/* <p>{slug.general_data.turnover.graph}</p> is an array to map */}
          </div>
          <div>
            <p>
              Type of social capital{" "}
              {slug.general_data.social_capital.type.title}
            </p>
            <p>
              Country of Origin of Investments:{" "}
              {slug.general_data.social_capital.countries[0].title}
            </p>
            {/* must map array of countries */}
          </div>
          {/* <div>{slug.general_data.similar_companies}</div> is an array to map */}
        </div>
        {/*<div>
          Contacts
          <div>Phone mobile {mobile}</div>
          <div>Phone {phone} </div>
          <div>Email {email} </div>
          <div>Website {website} </div>
        </div>*/}
      </div>
      {/* <p>Founders of the company: {[...partners]}</p> */}
    </div>
  );
}

export default CompanyId;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { slug: "fractia-unica-srl" } },
      { params: { slug: "srl-unicat-lux" } },
      { params: { slug: "sc-unicalianord-srl" } },
      { params: { slug: "transgrain-group-srl" } },
    ],
  };
}

export const getStaticProps = async (context) => {
  const { params } = context;

  // console.log(params);

  const result = await axios.get(
    `https://app.informer.md/api/public/company?slug=transgrain-group-srl`
  );
  console.log(result);
  return {
    props: {
      slug: result.data,
    },
  };
};
