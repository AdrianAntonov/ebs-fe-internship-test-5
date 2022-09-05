import { useState, useEffect } from 'react';
import { Pagination, Stack, Container } from '@mui/material';
import CompaniesList from '../../components/CompaniesList';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Loading from '../../components/Loading';
import ReactPaginate from 'react-paginate';

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
      // console.log(data.data.data.map(i=> i.name));
      console.log(data.data);
      setTotalPages(data.data.pages);
      setAllCompanies(data.data);
      // router.push(
      //   `/companies?search=${router.query.search}&page=${router.query.page}`
      // );
    };

    fetchCompanies();
  }, [page, router.query.search]);

  console.log(page);

  // const getCompanies = async (num: number) => {
    // const data = await axios.get(
    //   `/search?page=${page}&company_name=${router.query.search}`
    // );
    // console.log(selected);
    //setPage(num);
    // setTotalPages(data.data.pages);
    // setAllCompanies(data.data);
    // router.push(`/companies?search=${router.query.search}&page=${page}`);
  // };

  const getCompanies = async ({selected}) => {
    // const data = await axios.get(
    //   `/search?page=${page}&company_name=${router.query.search}`
    // );
    console.log(selected);
    setPage(selected + 1);
    // setTotalPages(data.data.pages);
    // setAllCompanies(data.data);
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
          <div>
            {/* <div className={styles.pagination}> */}
            {/* <Pagination
              size="large"
              count={totalPages}
              page={page}
              onChange={(_, num) => {
                getCompanies(num);
              }}
            /> */}
            <ReactPaginate
              className="mx-auto mt-[80px] mb-[160px] flex w-6/12 justify-between text-xl font-bold text-sky-700"
              pageCount={totalPages}
              onPageChange={getCompanies}
              // previousClassName={"bg-[#c3c3c3]"}
              // pageClassName={"bg-[#ff0000]"}
              activeClassName={"bg-[#00ff00] rounded-[50px] w-8 h-8 text-center"}
            />
          </div>
        )}
      </Stack>
    </Container>
  );
}

export default Companies;
