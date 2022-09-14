import dynamic from 'next/dynamic';

const CompaniesListItem = dynamic(() => import('./CompaniesListItem'));

export default function CompaniesList({ companies }) {
  return (
    <div>
      {companies?.data?.length > 0 &&
        companies?.data?.map((item) => (
          <CompaniesListItem
            key={item.id}
            information={item}
          ></CompaniesListItem>
        ))}
    </div>
  );
}
