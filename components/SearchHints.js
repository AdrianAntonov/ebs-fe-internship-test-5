import { Container, Stack, Button, dividerClasses } from "@mui/material";
import Link from "next/link";
import CompaniesLink from "./CompaniesLink";

function SearchHints({ companies }) {
  return (
    <Container>
      SearchHints
      {companies?.data?.data.slice(0, 5).map((i) => (
        // console.log(i)

        <CompaniesLink key={i.id} props={i} />
      ))}
    </Container>
  );
}

export default SearchHints;
