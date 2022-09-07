import { useState, useEffect, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import CompaniesLink from './CompaniesLink';
import { useDebounceValue } from '../hooks/useDebounceValue';

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
    setName('');
    router.push(`/companies?search=${name}`);
  };

  /////// cand se va reincarca pagina va seta campul TextField fara caractere
  useEffect(() => {
    setName('');
  }, [setName]);
  ///////////////////////////////////////////////////

  useEffect(() => {
    if (debouncedQuery === '' || debouncedQuery === ' ') {
      return;
    }

    const fetchCompanies = async () => {
      const data = await axios.get(
        `/search?page=1&company_name=${debouncedQuery}`
      );
      console.log(data);
      setCompanies(data.data);
    };

    fetchCompanies();
  }, [debouncedQuery]);

  const handleChange = (e) => {
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
          // sx={{
          //   width: '40rem',
          //   mr: 2,
          //   // [`& fieldset`]: {
          //   //   borderRadius: 20,
          //   // },
          // }}
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
        companies?.data
          .slice(0, 5)
          .map((i) => <CompaniesLink key={i.id} props={i} />)}
    </div>
  );
}

export default SearchHints;
