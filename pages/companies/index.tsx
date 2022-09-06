import { useState, useEffect } from 'react';
// import { Stack, Container } from '@mui/material';
import CompaniesList from '../../components/CompaniesList';
import axios from 'axios';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import ReactPaginate from 'react-paginate';
// import NavBar from '../../components/NavBar';
import SearchHints from '../../components/SearchHints';

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

      setTotalPages(data.data.pages);
      setAllCompanies(data.data);
      // router.push(
      //   `/companies?search=${router.query.search}&page=${router.query.page}`
      // );
    };

    fetchCompanies();
  }, [page, router.query.search]);

  const getCompanies = async ({ selected }) => {
    setPage(selected + 1);
  };

  if (allCompanies?.total_results === 0 || router.query.search === '') {
    return <h2>Sorry, no results</h2>;
  }
  if (!allCompanies) {
    return <Loading />;
  }

  return (
    <section className="mx-auto min-w-[1450px]">
      {/* <h2>Companies</h2> */}
      <div className="my-16 w-[80%] pl-40">
        <SearchHints />
      </div>
      <CompaniesList companies={allCompanies} />
      <div>
        {allCompanies?.data?.length > 0 && (
          <ReactPaginate
            className="mx-auto mt-[80px] mb-[160px] flex w-6/12 items-center justify-between text-xl font-semibold text-sky-700"
            pageCount={totalPages}
            onPageChange={getCompanies}
            activeClassName={
              'bg-[#d6e8f3b9] text-sky-500 w-10 h-10 pt-1 scale-110 rounded-[30px] text-center'
            }
            previousLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            }
            nextLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            }
          />
        )}
      </div>
    </section>
  );
}

export default Companies;
