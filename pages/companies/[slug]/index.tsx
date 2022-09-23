import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import companies from 'api/companies';
import { defaultOptions } from 'utils/ssr';
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

function CompanyId() {
  const router = useRouter();
  const { data }: ISlug = useQuery(['data', { id: router?.query?.slug }]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="bg-[#fafafa]">
      <CompanyHeader />
      <SlugContainer>
        <PreviousInfo />
        <CompanyProfile />
        <CompanyContacts />
        <QuantityAdminsPartners />
        <TableRender />
        <CompanyTurnover />
        <CompanyInvestCapital />
        <SimilarCompanies />
      </SlugContainer>
    </div>
  );
}

export default CompanyId;

export async function getServerSideProps({ query }) {
  const queryClient = new QueryClient({ defaultOptions });

  await queryClient.prefetchQuery(
    ['data', { id: query.slug }],

    companies.search
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}
