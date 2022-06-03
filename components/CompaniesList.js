import CompaniesListItem from "./CompaniesListItem";

export default function CompaniesList({ companies }) {
  return (
    <div>
      {companies?.data?.data?.length > 0 &&
        companies?.data?.data?.map((item) => (
          <CompaniesListItem
            key={item.id}
            information={item}
          ></CompaniesListItem>
        ))}
    </div>
  );
}
