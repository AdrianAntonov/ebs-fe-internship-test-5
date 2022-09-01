import axios from 'axios';
// import { useRouteMatch } from 'react-router-dom';
import SlugContainer from '../../../components/slug/SlugContainer';
import CompanyHeader from '../../../components/slug/CompanyHeader';
import CompanyProfile from '../../../components/slug/CompanyProfile';
import CompanyContacts from '../../../components/slug/CompanyContacts';
import QuantityAdminsPartners from '../../../components/slug/QuantityAdminsPartners';
import TableRender from '../../../components/slug/TableRender';
import PreviousInfo from '../../../components/slug/CompanyPreviousInfo';
import CompanyInvestCapital from '../../../components/slug/CompanyInvestCapital';
import SimilarCompanies from '../../../components/slug/SimilarCompanies';
import CompanyTurnover from '../../../components/slug/CompanyTurnover';
import { ISlug } from '../../../types/slug';
import styles from '../../../styles/Home.module.css';
import Loading from '../../../components/Loading';

axios.defaults.baseURL = 'https://app.informer.md/api/public';

function CompanyId({ slug }: ISlug) {
  // const {url, path} = useRouteMatch();
  // console.log(url);
  // console.log(path);
  if (!slug) {
    return <Loading />;
  }
  return (
    <div className={styles.wrapper}>
      <CompanyHeader slug={slug} />
      <SlugContainer>
        <PreviousInfo slug={slug} />
        <CompanyProfile slug={slug} />
        <CompanyContacts slug={slug} />
        <QuantityAdminsPartners slug={slug} />
        <TableRender slug={slug} />
        <CompanyTurnover slug={slug} />
        <CompanyInvestCapital slug={slug} />
        <SimilarCompanies slug={slug} />
      </SlugContainer>
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
