import { QueryClient } from 'react-query';
import dynamic from 'next/dynamic';
import companies from 'api/companies';
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
const TableRender = dynamic(() => import('components/slug/TableRender'), {
  ssr: false,
});
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
    ['data', { id: query.slug }],
    companies.search
  );

  return getQueries(queryClient);
};
