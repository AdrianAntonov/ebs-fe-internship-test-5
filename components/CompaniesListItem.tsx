import { useRouter } from 'next/router';
import InformationProps from '../types/companiesListItem';

function CompaniesListItem({ information }: InformationProps) {
  const {
    id,
    name,
    idno,
    website,
    email,
    creation_date,
    status,
    turnover,
    partners,
    mobile,
    phone,
    slug,
    industry,
    employees,
  } = information;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/companies/${slug}`);
  };

  return (
    <section className="border-hsla(0, 0%, 82%, 0.1) mx-8 mb-4 border-[1px] border-solid bg-[#f9f9f9] text-4xl hover:border-[#cae5fd] hover:shadow-[2px_2px_20px_#b4b4b4] xs:text-3xl sm:mx-auto sm:w-[80%] sm:text-2xl md:text-base ">
      <div className="px-4 pt-4 pb-6">
        <div>
          <span className="pr-4 font-[700] ">{id}</span>
          <span
            onClick={handleClick}
            className="relative inline-block cursor-pointer text-5xl font-bold tracking-widest text-[#096dd9] hover:text-[#8db6da] xs:text-4xl sm:text-3xl md:text-xl"
          >
            {name}
          </span>
        </div>
        <div className="mt-2 flex flex-col flex-wrap items-start justify-around space-y-12 xs:flex-row xs:space-y-0">
          <div>
            <div>
              <span className="title">IDNO&#58;</span>{' '}
              <span className="font-bold">{idno}</span>
            </div>
            <div>
              <span className="title">Status&#58;</span> {status}
            </div>
            <div>
              <span className="title">Date of establishment&#58; </span>
              {creation_date}
            </div>
            <div>
              <span className="title">Virsta&#58;</span>
            </div>
          </div>
          {/* ----------CONTAINER 2------------  */}
          <div>
            <div>
              <span className="title">Nr. by the employees&#58; </span>
              {employees}{' '}
            </div>
            <div>
              <span className="title">Turnover&#58;</span> {turnover}
            </div>
            <div>
              <span className="title">Industry&#58;</span>{' '}
              <span className="font-bold">{industry}</span>
            </div>
          </div>
          {/* ----------CONTAINER 2------------  */}
          {/* ----------CONTAINER 3------------  */}
          <div className="flex">
            <div className="title pr-[5px]">Contacts&#58;</div>
            <div>
              <div>
                <span className="title">Phone mobile&#58;</span> {mobile}
              </div>
              <div>
                <span className="title">Phone&#58;</span> {phone}
              </div>
              <div>
                <span className="title">Email&#58;</span> {email}
              </div>
              <div>
                <span className="title">Website&#58;</span>{' '}
                <a
                  className="font-semibol text-[#096dd9] hover:text-[#08137c]"
                  href={`${website}`}
                >
                  {website}
                </a>
              </div>
            </div>
          </div>
          {/* ----------CONTAINER 3------------  */}
        </div>
        <div className="mt-4 border-t-[1px] border-solid border-[#bdbdbd] pt-6">
          {partners.length > 0 && (
            <p className="title ">
              Founders of the company:{' '}
              <span className="py-12 text-black">{[...partners]}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CompaniesListItem;
