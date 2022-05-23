import CompaniesListItem from "./CompaniesListItem";

export default function CompaniesList({ companies }) {
  // console.log(companies);
  return (
    <div>
      {companies.map((item) => (
        <CompaniesListItem key={item.id} information={item}></CompaniesListItem>
      ))}
    </div>
  );
}
