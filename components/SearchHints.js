import { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import CompaniesLink from './CompaniesLink';
import { useDebounceValue } from './../hooks/useDebounceValue';

function SearchHints({ totalResults }) {
  const [companies, setCompanies] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const debouncedQuery = useDebounceValue(name, 400);

  const handleSubmit = (e) => {
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
      setCompanies(data);
    };

    fetchCompanies();
  }, [debouncedQuery]);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}>
      <TextField
        sx={{
          width: '40rem',
          mr: 2,
          // [`& fieldset`]: {
          //   borderRadius: 20,
          // },
        }}
        placeholder={`Search from ${totalResults} companies`}
        value={name}
        onChange={handleChange}
      />
      <Button
        size="small"
        sx={{
          pb: 2,
          pt: 2,
          maxHeight: 55,
        }}
        variant="contained"
        onClick={handleSubmit}
      >
        Search
      </Button>
      {debouncedQuery &&
        companies?.data?.data
          .slice(0, 5)
          .map((i) => <CompaniesLink key={i.id} props={i} />)}
    </div>
  );
}

export default SearchHints;
