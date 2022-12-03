import {useQuery} from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';
import { NoData } from './NoData';

function QuantityAdminsPartners() {

const router=useRouter();
const { data }: IAdmPrtQuantity = useQuery(['data', {id: router.query?.slug}])

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
