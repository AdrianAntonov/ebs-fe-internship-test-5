import dynamic from 'next/dynamic';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const CompanyTableData = dynamic(() => import('../CompanyTableData'));
import { NoDataTable } from './NoData';
import { ISimilarCompaniesProps } from '../../types/similarCompanies';

function SimilarCompanies({ data }: ISimilarCompaniesProps) {
  const companies =
    data?.similar_companies !== null ? (
      data?.similar_companies?.map((company) => (
        <TableRow className="hover:bg-[#fafafa]" key={company.id}>
          <TableCell>{company?.name}</TableCell>
          <TableCell>{company?.industry}</TableCell>
          <TableCell>{company?.location}</TableCell>
          <TableCell>{company?.site}</TableCell>
          <TableCell>{company?.email}</TableCell>
          <TableCell>{company?.phone}</TableCell>
        </TableRow>
      ))
    ) : (
      <NoDataTable />
    );
  console.log(typeof companies);
  const row = (
    <TableRow className="bg-[#eaf0f6]">
      <TableCell className="tableRowTitle">NAME</TableCell>
      <TableCell className="tableRowTitle">INDUSTRY</TableCell>
      <TableCell className="tableRowTitle">LOCATION</TableCell>
      <TableCell className="tableRowTitle">WEBSITE</TableCell>
      <TableCell className="tableRowTitle">EMAIL</TableCell>
      <TableCell className="tableRowTitle">PHONE</TableCell>
    </TableRow>
  );

  return (
    <div className="mx-auto mt-4 flex-wrap shadow-[0_0.4375rem_1.6875rem_0.1875rem_#d6e8f3b9]">
      <CompanyTableData data={companies} title="Similar companies" row={row} />
    </div>
  );
}

export default SimilarCompanies;
