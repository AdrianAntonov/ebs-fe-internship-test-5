import companies from 'api/companies';
import dynamic from 'next/dynamic';
import { QueryClient } from 'react-query';
import { getQueries } from 'utils/ssr';
import { ISlug } from 'types/slug';
const SlugContainer = dynamic(() => import('components/slug/Container'));
const CompanyHeader = dynamic(() => import('components/slug/CompanyHeader'));
const CompanyProfile = dynamic(() => import('components/slug/CompanyProfile'));
const CompanyContacts = dynamic(
  () => import('components/slug/CompanyContacts')
);
const QuantityAdminsPartners = dynamic(
  () => import('components/slug/QuantityAdminsPartners')
);
const TableRender = dynamic(() => import('components/slug/TableRender'));
const PreviousInfo = dynamic(
  () => import('components/slug/CompanyPreviousInfo')
);
const CompanyInvestCapital = dynamic(
  () => import('components/slug/CompanyInvestCapital')
);
const SimilarCompanies = dynamic(
  () => import('components/slug/SimilarCompanies')
);
const CompanyTurnover = dynamic(
  () => import('components/slug/CompanyTurnover')
);
const Loading = dynamic(() => import('components/Loading'));

function CompanyId({ data }: ISlug) {
  if (!data) {
    return <Loading />;
  }
  console.log(data);
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
  console.log(query.slug);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
      },
    },
  });

  await queryClient.prefetchQuery(
    ['data', { id: query.slug }],
    companies.search,
    { cacheTime: 50000 }
  );

  return getQueries(queryClient); // Returns: { data }
};
