import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';
import { NoData } from './NoData';

function QuantityAdminsPartners({ data }: IAdmPrtQuantity) {
  return (
    <div className="slugPreviousInfo md:flex-nowrap">
      <div className="slugPreviousInfoItem">
        Administrators
        <div className="itemInfo">
          {data?.personal?.ADM?.length || <NoData />}
        </div>
      </div>
      <div className="slugPreviousInfoItem">
        Partners
        <div className="itemInfo">
          {data?.personal?.PRT?.length || <NoData />}
        </div>
      </div>
    </div>
  );
}

export default QuantityAdminsPartners;
