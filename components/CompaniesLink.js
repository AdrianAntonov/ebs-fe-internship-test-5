// import Link from "next/link";
import { Link } from "@mui/material";

function CompaniesLink({ props }) {
  const { idno, slug, name } = props;

  return (
    <div>
      <Link href={`/companies/${slug}`}>
        {idno} {name}
      </Link>
    </div>
  );
}

export default CompaniesLink;
