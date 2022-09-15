import { NoData } from './NoData';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';

function PartnersBlocks({ data }: IAdmPrtQuantity) {
  const partners =
    data?.personal?.PRT?.length > 0 ? (
      data?.personal?.PRT?.map((item) => (
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
      <p className="contactsInfoHead">Partners</p>
      {partners}
    </div>
  );
}

export default PartnersBlocks;
