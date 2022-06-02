// import Link from "next/link";
import { Link } from "@mui/material";
function CompaniesLink({ props }) {
  const { idno, slug, name } = props;

  console.log(idno, slug, name);
  return (
    <div>
      {/* HIIIII */}
      <Link href={`/${slug}`}>
        {idno} {name}
      </Link>
    </div>
  );
}

export default CompaniesLink;
