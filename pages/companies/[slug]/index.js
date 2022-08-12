// import { useRouter } from 'next/router';
import CompanyWorkhours from '../../../components/slug/CompanyWorkhours';
import AdminsTable from '../../../components/slug/AdminsTable';
import AdminsBlocks from '../../../components/AdminsBlocks';
import PartnersTable from '../../../components/slug/PartnersTable.tsx';
import PartnersBlocks from '../../../components/slug/PartnersBlocks';
import CompanyContactInfo from '../../../components/slug/CompanyContactInfo';
import axios from 'axios';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import styles from '../../../styles/Home.module.css';

axios.defaults.baseURL = 'https://app.informer.md/api/public';

function CompanyId({ slug }) {
  // const router = useRouter();
  const { id, name, status } = slug;
  // console.log(slug.personal.ADM);
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  return (
    <div className={styles.wrapper}>
      <div className={styles.slugHeaderContainer}>
        <div className={styles.slugHeader}>
          <div className={styles.slugCompanyId}>{id}</div>
          <div className={styles.slugCompanyName}>
            {name}
            <sup className={styles.sup}>{status.keyword}</sup>
          </div>
        </div>
      </div>
      <div className={styles.slugContainer}>
        <div className={styles.slugMainInfo}>
          <div className={styles.slugMainInfoItem}>
            <div>IDNO</div>
            <div className={styles.itemInfo}>{slug.general_data.idno}</div>
          </div>
          <div className={styles.slugMainInfoItem}>
            <div>Date of establishment</div>
            <div className={styles.itemInfo}>
              {slug.general_data.creation_date}
            </div>
          </div>
          <div className={styles.slugMainInfoItem}>
            <div>Staff</div>
            <div className={styles.itemInfo}>{slug.general_data.size.name}</div>
          </div>
          {/*must */}
          {/* <div className={styles.slugMainInfoItem}>
            Virsta -de calculat  virsta-
          </div> */}
        </div>

        <div className={styles.ContactsInfoWrapper}>
          <div className={styles.ContactsInfo}>
            <div className={styles.ContactsInfoHead}>Company profile</div>
            <div className={styles.ContactsInfoContent}>
              {slug.general_data.description}
            </div>
          </div>
          <div className={styles.ContactsInfo}>
            <CompanyWorkhours
              data={slug.general_data.business_hours}
              title="Workhours"
            />
          </div>
        </div>
        {/* <div>{slug.general_data.business_hours}</div> is an array to map */}
        <div className={styles.ContactsInfoWrapper}>
          <div className={styles.ContactsInfo}>
            <div className={styles.ContactsInfoHead}>Contact Information</div>{' '}
            {/*  all are arrays to be mapped ! */}
            <div className={styles.ContactsInfoContent}>
              <CompanyContactInfo contacts={slug.general_data.contact_info} />
            </div>
          </div>
          <div className={styles.ContactsInfo}>
            <div className={styles.ContactsInfoHead}>Location</div>
            <div className={styles.iContactsIfoContent}>
              <div className={styles.adresses}>
                <p>Adress de facto:</p>
                <p>{slug.general_data.contact_info.address_de_facto.title}</p>
              </div>
              <div className={styles.adresses}>
                <p>Adress de jur:</p>
                <p>{slug.general_data.contact_info.address_de_jur.title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.slugMainInfo}>
          <div className={styles.slugMainInfoItem}>
            Administrators
            <div className={styles.itemInfo}>{slug.personal?.ADM?.length}</div>
          </div>
          <div className={styles.slugMainInfoItem}>
            Partners
            <div className={styles.itemInfo}>{slug.personal.PRT?.length}</div>
          </div>
        </div>
        {width > 710 ? (
          <div>
            <AdminsTable people={slug} />
            <PartnersTable people={slug} />
          </div>
        ) : (
          <div className={styles}>
            <AdminsBlocks people={slug} />
            <PartnersBlocks people={slug} />
          </div>
        )}
        <div>
          Turnover {slug.general_data.turnover.last}
          {/* <p>{slug.general_data.turnover.graph}</p> is an array to map */}
        </div>
        <div>
          <p>
            Type of social capital{' '}
            {slug.general_data?.social_capital?.type?.title}
          </p>
          <p>
            Country of Origin of Investments:{' '}
            {slug.general_data.social_capital.countries[0]?.title}
          </p>
          {/* must map array of countries */}
        </div>
        {/* <div>{slug.general_data.similar_companies}</div> is an array to map */}
      </div>
      {/* <p>Founders of the company: {[...partners]}</p> */}
    </div>
  );
}

export default CompanyId;

CompanyId.getInitialProps = async ({ query }) => {
  const result = await axios.get(
    `https://app.informer.md/api/public/company?slug=${query.slug}`
  );

  return {
    slug: result.data,
  };
};
