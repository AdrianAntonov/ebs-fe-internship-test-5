import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';
import { NoData } from './NoData';

function AdminsBlocks({ data }: IAdmPrtQuantity) {
  const administrators =
    data?.personal?.ADM?.length > 0 ? (
      data?.personal?.ADM?.map((item) => (
        <div key={item.id}>
          <p>Name and Surname: {item.name}</p>
          <p>
            Seniority: <b>{item.seniority?.title || '---'}</b>
          </p>
          <p>
            Job function: <b>{item.function || '---'}</b>
          </p>
          <p>Phone: {item.phone || '---'}</p>
          <p>Email: {item.email || '---'}</p>
        </div>
      ))
    ) : (
      <NoData />
    );

  return (
    <div className="partnerBlock">
      <p className="contactsInfoHead">Administrators</p>
      {administrators}
    </div>
  );
}

export default AdminsBlocks;
