import { NoData } from './NoData';
import { ICompanyPreviousInfo } from '../../types/companyPreviousData';

function PreviousInfo({ data }: ICompanyPreviousInfo) {
  return (
    <div className="slugPreviousInfo sm:flex-nowrap md:text-2xl lg:text-base">
      <div className="slugPreviousInfoItem">
        <div>IDNO</div>
        <div className="itemInfo">{data?.general_data?.idno || <NoData />}</div>
      </div>
      <div className="slugPreviousInfoItem">
        <div>Date of establishment</div>
        <div className="itemInfo">
          {data?.general_data?.creation_date || <NoData />}
        </div>
      </div>
      <div className="slugPreviousInfoItem">
        <div>Staff</div>
        <div className="itemInfo">
          {data?.general_data.size?.name || <NoData />}
        </div>
      </div>
    </div>
  );
}

export default PreviousInfo;
