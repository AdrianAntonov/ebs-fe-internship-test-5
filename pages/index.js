import { useState, useEffect } from "react";
import {
  Container,
  Pagination,
  TextField,
  Stack,
  Link,
  Button,
} from "@mui/material";
import CompaniesList from "../components/CompaniesList";
import axios from "axios";
import SearchHints from "../components/SearchHints";

axios.defaults.baseURL = "https://app.informer.md/api/public";

// export default function Home() {
//   const [searchName, setSearchName] = useState("");
//   const [companies, setCompanies] = useState("");

//   const fetcher = async (name) => {
//     const data = await axios.get(
//       `/search?page=1&per_page=5&company_name=${name}`
//     );
//     setCompanies(data);
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearchName(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetcher(searchName);
//   };

//   return (
//     <div className={styles.container}>
//       <h1>
//         We help Republic of Moldova&#39;s companies upscale their business and
//         minimize potential risks.
//       </h1>
//       <form>
//         <input type="text" onChange={handleChange} value={searchName} />
//         &nbsp;
//         <button onClick={handleSubmit}>Search</button>
//       </form>
//       <CompaniesList
//         companies={companies.data?.data}
//       ></CompaniesList>
//     </div>
//   );
// }

export default function Home() {
  const [searchName, setSearchName] = useState("");
  const [allCompanies, setAllCompanies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [show, setShow] = useState(false);
  console.log(allCompanies);

  const fetcher = async (name) => {
    const data = await axios.get(
      `/search?page=1&per_page=5&company_name=${name}`
    );
    setTotalPages(data.data.pages);
    setAllCompanies(data);
  };

  // useEffect(() => {
  //   if (searchName === "") {
  //     return;
  //   }
  //   const fetchCompanies = async () => {
  //     const data = await axios.get(
  //       `/search?page=${page}&company_name=${searchName}`
  //     );
  //     setTotalPages(data.data.pages);
  //     setAllCompanies(data);
  //   };
  //   fetchCompanies();
  // }, [page, searchName]);

  const getCompanies = async (name) => {
    const data = await axios.get(`/search?page=${page}&company_name=${name}`);

    // setPage(num);
    //  https://app.informer.md/api/public/search?page=CURRENT_PAGE&company_name=INPUT_VALUE
    setTotalPages(data.data.pages);
    setAllCompanies(data);
  };
  console.log(page);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show);
    getCompanies(searchName);
  };

  return (
    // <div className={styles.container}>
    //   <h1>
    //     We help Republic of Moldova&#39;s companies upscale their business and
    //     minimize potential risks.
    //   </h1>
    //   <form>
    //     <input type="text" onChange={handleChange} value={searchName} />
    //     &nbsp;
    //     <button onClick={handleSubmit}>Search</button>
    //   </form>
    //   <CompaniesList companies={allCompanies} />
    // </div>
    <Container>
      <h1>
        We help Republic of Moldova&#39;s companies upscale their business and
        minimize potential risks.
      </h1>

      <TextField
        sx={{ width: "30rem", mr: 2 }}
        label="Search"
        value={searchName}
        onChange={handleChange}
      />
      <Button
        size="large"
        sx={{ pb: 2, pt: 2 }}
        variant="contained"
        onClick={handleSubmit}
      >
        Search
      </Button>
      {/* {allCompanies?.data?.data?.length > 0 && (
        <SearchHints companies={allCompanies}></SearchHints>
      )} */}
      <Stack spacing={2}>
        {show && <CompaniesList companies={allCompanies} />}
      </Stack>
      {show && (
        <Stack spacing={2}>
          {allCompanies?.data?.data?.length > 0 && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, num) => {
                setPage(num);
                getCompanies(searchName);
              }}
            ></Pagination>
          )}
        </Stack>
      )}
    </Container>
  );
}

///////////////////    HOW GET name FROM name state???     ////////////////////

// export const getStaticProps = async (context) => {
//   const { query } = context;
//   console.log(query);
//   const data = await axios.get(`/search?page=1&per_page=5&company_name= `);
//   // console.log(data);
//   return {
//     props: {
//       companies: data.data,
//     },
//   };
// };
