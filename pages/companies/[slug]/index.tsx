// import axios from 'axios';
import { axios } from '../../../libs/axios';

import { QueryClient } from 'react-query';
import { getQueries } from '../../../utils/ssr';
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

// CompanyId.getInitialProps = async ({ query }) => {
//   const result = await axios.get(
//     `/company?slug=${query.slug}`
//   );

//   return {
//     data: result.data,
//   };
// };

CompanyId.getInitialProps = async ({ query }): Promise<Record<string, any>> => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
      },
    },
  });

  await queryClient.prefetchQuery(
    ['data', { id: query?.slug }],
    ({ queryKey: [, query] }: Record<string, any>) => axios.get(
      `/company?slug=${query.slug}`
    ).then(({ data }) => data), // It would be better to move requests to a separate api folder 
    { cacheTime: 50000 },
  );

  return getQueries(queryClient); // Returns: { data }
};