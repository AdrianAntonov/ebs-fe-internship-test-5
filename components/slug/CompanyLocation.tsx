import { ICompanyLocation } from '../../types/companyLocation';
import { NoData } from './NoData';

function CompanyLocation({ contacts }: ICompanyLocation) {
  return (
    <div className="contactsInfo">
      <div className="contactsInfoHead">Location</div>
      <div className="pl-4 pt-2">
        <p>Adress de facto:</p>
        <div className="mt-[-8px]">
          {contacts.address_de_facto.title || <NoData />}
        </div>
      </div>
      <div className="pl-4">
        <p>Adress de jur:</p>
        <div className="mt-[-8px]">
          {contacts.address_de_jur.title || <NoData />}
        </div>
      </div>
    </div>
  );
}

export default CompanyLocation;
