import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ISimilarCompaniesProps } from '../../types/similarCompanies';
const CompanyTableData = dynamic(() => import('../CompanyTableData'));
import { NoDataTable } from './NoData';

function SimilarCompanies() {

  const router = useRouter();
  const { data }: ISimilarCompaniesProps = useQuery(['data', {id: router.query?.slug}]);

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
