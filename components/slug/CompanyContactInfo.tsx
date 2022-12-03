import { contact } from '../../types/contactInfo';

function CompanyContactInfo({ contacts }: contact) {
  const phones = contacts.phones.map((phone, idx) => (
    <span key={idx}>{phone}</span>
  ));

  const faxes = contacts.faxes.map((fax, idx) => <span key={idx}>{fax}</span>);
  const mobiles = contacts.mobile.map((mobile, idx) => (
    <span key={idx}>{mobile}</span>
  ));

  const emails = contacts.emails.map((email, idx) => (
    <span key={idx}>{email}</span>
  ));

  const sites = contacts.sites.map((item, idx) => (
    <div key={idx} className="facebookItem">
      <a href={item}>{item}</a>
    </div>
  ));

  return (
    <div className="contactsInfo">
      <div className="contactsInfoHead">Contact Information</div>
      <div className="contactsInfoContent">
        <div>Phones {phones}</div>
        <div>Faxes {faxes}</div>
        <div>Mobile {mobiles}</div>
        <div>Emails {emails}</div>
        <div className="flex flex-wrap gap-1">
          Websites:
          <div>{sites}</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyContactInfo;
