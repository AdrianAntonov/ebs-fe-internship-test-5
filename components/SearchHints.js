import { useState, useEffect, useRef } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import CompaniesLink from "./CompaniesLink";
import { useRouter } from "next/router";

function SearchHints({ totalResults, clear }) {
  const [companies, setCompanies] = useState("");
  const [name, setName] = useState("");
  const ref = useRef(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/companies?search=${name}`);
  };

  useEffect(() => {
    setName("");
  }, [setName]);

  useEffect(() => {
    if (name === "") {
      ref.current = false;
      return;
    } else {
      ref.current = true;
    }

    const fetchCompanies = async () => {
      const data = await axios.get(`/search?page=1&company_name=${name}`);
      setCompanies(data);
    };

    fetchCompanies();
  }, [name]);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div>
      <TextField
        sx={{
          width: "40rem",
          mr: 2,
          // [`& fieldset`]: {
          //   borderRadius: 20,
          // },
        }}
        placeholder={`Search from ${totalResults} companies`}
        value={name}
        onChange={handleChange}
      />{" "}
      <Button
        size="small"
        sx={{ pb: 2, pt: 2, maxHeight: 55 }}
        variant="contained"
        onClick={handleSubmit}
      >
        Search
      </Button>
      {ref.current &&
        companies?.data?.data
          .slice(0, 5)
          .map((i) => <CompaniesLink key={i.id} props={i} />)}
    </div>
  );
}

export default SearchHints;
