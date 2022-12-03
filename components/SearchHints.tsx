import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useDebounceValue } from '../hooks/useDebounceValue';
import { useFetchingHook } from '../hooks/useFetchingHook';
const CompaniesLink = dynamic(() => import('./CompaniesLink'));
const NoResult = dynamic(() => import('./NoResult'));

interface ISearchHints {
  totalResults?: string;
}

function SearchHints({ totalResults }: ISearchHints) {
  const [companies, setCompanies] = useState(null);
  const [name, setName] = useState('');
  const router = useRouter();

  const debouncedQuery = useDebounceValue(name, 400);

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    router.push(`/companies?search=${name}`);
    setName('');
  };

  useEffect(() => {
    setName('');
  }, [setName]);

  const { data } = useFetchingHook(debouncedQuery);

  useEffect(() => {
    if (debouncedQuery === '' || debouncedQuery === ' ') {
      return;
    }

    const fetchCompanies = async () => {
      try {
        setCompanies(data?.data);
      } catch (error) {
        return <NoResult />;
      }
    };

    fetchCompanies();
  }, [data, debouncedQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className="flex-col">
      <div
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        className="mb-2 flex flex-col flex-wrap lg:flex-row"
      >
        <input
          className="h-10 w-[256px] cursor-default rounded-lg border-2 border-gray-300 bg-[#1f69b30d]  p-2
          outline-0 placeholder:text-[#c3c3c3] sm:h-12 sm:w-[320px] md:h-14 md:w-8/12 md:text-[20px]"
          placeholder={`Search from ${totalResults} companies`}
          value={name}
          onChange={handleChange}
        />
        <button
          className="mt-3 h-10 w-[72px] rounded-lg border bg-[#047cc0] text-xs  font-bold  uppercase text-white hover:bg-[#5f5f5fd9] focus:border-[#1f69b328] sm:mt-6 sm:h-12 sm:w-[120px] sm:text-lg md:h-14  md:tracking-wider lg:mt-0 lg:ml-16"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {debouncedQuery &&
        companies?.data?.map((i) => <CompaniesLink key={i.id} props={i} />)}
    </div>
  );
}

export default SearchHints;
