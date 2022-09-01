import { useState, useEffect, KeyboardEvent } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import CompaniesLink from './CompaniesLink';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface ISearchHints {
  totalResults: string;
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
    <div onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)} className='flex flex-col sm:flex-row'>
      <input className='w-[288px] h-10 p-2 bg-[#1f69b30d] border-2 border-gray-300  placeholder:text-[#c3c3c3]  sm:text-[20px] rounded-lg sm:h-14 outline-0 sm:w-[580px]'
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
      <button className='w-[72px] uppercase text-xs border mt-3 h-10 bg-[#096dd9]  rounded-lg hover:bg-[#afafaf] text-white font-bold md:tracking-wider focus:border-[#1f69b328]  sm:mt-0 sm:ml-8 sm:w-[120px] sm:h-14 '
        // size="small"
        // sx={{
        //   pb: 2,
        //   pt: 2,
        //   maxHeight: 55,
        // }}
        // variant="contained"
        onClick={handleSubmit}
      >
        Search
      </button>
      {debouncedQuery &&
        companies?.data
          .slice(0, 5)
          .map((i) => <CompaniesLink key={i.id} props={i} />)}
    </div>
  );
}

export default SearchHints;
