import { ICompanyInvestCapital } from '../../types/companyInvestCapital';
import { NoData } from './NoData';

function CompanyInvestCapital({ data }: ICompanyInvestCapital) {
  const countries =
    data?.general_data?.social_capital?.countries.length > 0 ? (
      data?.general_data?.social_capital?.countries?.map((country) => (
        <div key={country.id}>{country.title}</div>
      ))
    ) : (
      <NoData />
    );
  return (
    <div className="slugPreviousInfo md:flex-nowrap">
      <div className="slugPreviousInfoItem">
        Type of social capital
        <div className="itemInfo">
          {data?.general_data?.social_capital?.type?.title || <NoData />}
        </div>
      </div>
      <div className="slugPreviousInfoItem">
        Country of Origin of Investments:
        <div className="itemInfo">{countries}</div>
      </div>
    </div>
  );
}

export default CompanyInvestCapital;
