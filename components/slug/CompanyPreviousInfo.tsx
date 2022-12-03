import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { ICompanyPreviousInfo } from '../../types/companyPreviousData';
import { NoData } from './NoData';

function PreviousInfo() {
  const router = useRouter();

  const { data }: ICompanyPreviousInfo = useQuery(['data', { id: router?.query?.slug }]);

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
