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
    <div
      key={idx}
      className="flex flex-wrap gap-2 text-base text-[#a3a3a3] hover:text-[#096dd9]"
    >
      {/* .facebookItem */}
      <a href={item}>{item}</a>
    </div>
  ));

  return (
    <div className="w-[100%] bg-white shadow-[0_0.4375rem_1.6875rem_0.1875rem_#1f69b30d]">
      {/* .ContactsInfo  */}
      <div className="border-b-solid border-b-[1px] border-b-[#e1e1e1] text-xl">
        Contact Information
      </div>
      {/* .ContactsInfoHead*/}
      <div className="ml-4 pb-4 pt-4">
        {/* .ContactsInfoContent */}
        <div>Phones {phones}</div>
        <div>Faxes {faxes}</div>
        <div>Mobile {mobiles}</div>
        <div>Emails {emails}</div>
        <div className="flex flex-wrap gap-1">
          {/* facebookWrapper */}
          Websites:
          <div>{sites}</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyContactInfo;
