import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import { axios } from '../../libs/axios';
import dynamic from 'next/dynamic';
import { NextLabel, PreviousLabel } from 'images/svgImages';
const NoResult = dynamic(() => import('components/NoResult'));
const CompaniesList = dynamic(() => import('components/CompaniesList'));
const Loading = dynamic(() => import('components/Loading'));
const SearchHints = dynamic(() => import('components/SearchHints'));

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
    };

    fetchCompanies();
  }, [page, router.query.search]);

  const getCompanies = async ({ selected }) => {
    setPage(selected + 1);
  };

  if (allCompanies?.total_results === 0 || router.query.search === '') {
    return <NoResult />;
  }
  if (!allCompanies) {
    return <Loading />;
  }

  return (
    <section className="mx-auto min-w-[1450px]">
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
            previousLabel={<PreviousLabel />}
            nextLabel={<NextLabel />}
          />
        )}
      </div>
    </section>
  );
}

export default Companies;
