import { useState, useEffect } from "react";
import { Pagination, Stack } from "@mui/material";
import CompaniesList from "../../components/CompaniesList";
import axios from "axios";
import { useRouter } from "next/router";

axios.defaults.baseURL = "https://app.informer.md/api/public";

function Companies() {
  const router = useRouter();
  console.log(router);

  const [allCompanies, setAllCompanies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getCompanies = async (num: number) => {
    const data = await axios.get(
      `/search?page=${page}&company_name=${router.query.search}`
    );
    setPage(num);
    setTotalPages(data.data.pages);
    setAllCompanies(data);
    // router.push(`/companies?search=${router.query.search}&page=${page}`);
  };

  useEffect(() => {
    if (router.query.search === "") {
      return;
    }
    const fetchCompanies = async () => {
      const data = await axios.get(
        `/search?page=${page}&company_name=${router.query.search}`
      );
      setTotalPages(data.data.pages);
      setAllCompanies(data);
      // router.push(
      //   `/companies?search=${router.query.search}&page=${router.query.page}`
      // );
    };
    fetchCompanies();
  }, [page, router.query.search]);

  if (allCompanies?.data?.total_results === 0 || router.query.search === "") {
    return <h2>Sorry, no results</h2>;
  }

  return (
    <div>
      <h2>Companies</h2>
      <Stack spacing={2}>
        <CompaniesList companies={allCompanies} />
      </Stack>
      <Stack spacing={2}>
        {allCompanies?.data?.data?.length > 0 && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, num) => {
              getCompanies(num);
            }}
          ></Pagination>
        )}
      </Stack>
    </div>
  );
}

export default Companies;
