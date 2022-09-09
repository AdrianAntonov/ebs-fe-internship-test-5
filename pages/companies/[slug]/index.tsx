import axios from 'axios';
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
import Loading from '../../../components/Loading';

// axios.defaults.baseURL = 'https://app.informer.md/api/public';

function CompanyId({ data }: ISlug) {
  if (!data) {
    return <Loading />;
  }

  return (
    <div className="bg-[#fafafa]">
      <CompanyHeader data={data} />
      <SlugContainer>
        <PreviousInfo data={data} />
        <CompanyProfile data={data} />
        <CompanyContacts data={data} />
        <QuantityAdminsPartners data={data} />
        <TableRender data={data} />
        <CompanyTurnover data={data} />
        <CompanyInvestCapital data={data} />
        <SimilarCompanies data={data} />
      </SlugContainer>
    </div>
  );
}

export default CompanyId;

CompanyId.getInitialProps = async ({ query }) => {
  const result = await axios.get(
    `/company?slug=${query.slug}`
  );

  return {
    data: result.data,
  };
};
