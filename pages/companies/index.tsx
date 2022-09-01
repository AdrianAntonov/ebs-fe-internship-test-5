import { useState, useEffect } from 'react';
import { Pagination, Stack, Container } from '@mui/material';
import CompaniesList from '../../components/CompaniesList';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Loading from '../../components/Loading';

axios.defaults.baseURL = 'https://app.informer.md/api/public';

interface ICompanies {
  total_results: number;
  data: [];
}

function Companies() {
  const router = useRouter();

  const [allCompanies, setAllCompanies] = useState<ICompanies>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (router.query.search === '') {
      return;
    }
    const fetchCompanies = async () => {
      const data = await axios.get(
        `/search?page=${page}&company_name=${router.query.search}`
      );
      console.log(data);
      setTotalPages(data.data.pages);
      setAllCompanies(data.data);
      // router.push(
      //   `/companies?search=${router.query.search}&page=${router.query.page}`
      // );
    };

    fetchCompanies();
  }, [page, router.query.search]);

  const getCompanies = async (num: number) => {
    const data = await axios.get(
      `/search?page=${page}&company_name=${router.query.search}`
    );
    setPage(num);
    setTotalPages(data.data.pages);
    setAllCompanies(data.data);
    // router.push(`/companies?search=${router.query.search}&page=${page}`);
  };

  if (allCompanies?.total_results === 0 || router.query.search === '') {
    return <h2>Sorry, no results</h2>;
  }
  if (!allCompanies) {
    return <Loading />;
  }

  return (
    <Container maxWidth={false} sx={{ minWidth: '1450px' }}>
      <h2>Companies</h2>
      <Stack spacing={2}>
        <CompaniesList companies={allCompanies} />
      </Stack>
      <Stack spacing={2}>
        {allCompanies?.data?.length > 0 && (
          <div className={styles.pagination}>
            <Pagination
              size="large"
              count={totalPages}
              page={page}
              onChange={(_, num) => {
                getCompanies(num);
              }}
            />
          </div>
        )}
      </Stack>
    </Container>
  );
}

export default Companies;
