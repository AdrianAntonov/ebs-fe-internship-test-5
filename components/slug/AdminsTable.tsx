import dynamic from 'next/dynamic';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';
import { NoDataTable } from './NoData';
const CompanyTableData = dynamic(() => import('../CompanyTableData'));

function AdminsTable({ data }: IAdmPrtQuantity) {
  const administrators =
    data?.personal?.ADM?.length > 0 ? (
      data?.personal?.ADM?.map((item, idx) => (
        <TableRow key={item.id}>
          <TableCell>
            <span className="mx-6">{idx + 1}</span>
            {item.name}
          </TableCell>
          <TableCell>
            <b>{item.seniority?.title || '---'}</b>
          </TableCell>
          <TableCell>{item.function || '---'}</TableCell>
          <TableCell>{item.phone || '---'}</TableCell>
          <TableCell>{item.email || '---'}</TableCell>
        </TableRow>
      ))
    ) : (
      <NoDataTable />
    );

  const row = (
    <TableRow className="bg-[#eaf0f6]">
      <TableCell className="tableRowTitle">Name and Surname</TableCell>
      <TableCell className="tableRowTitle">Seniority</TableCell>
      <TableCell className="tableRowTitle">Job Function</TableCell>
      <TableCell className="tableRowTitle">Phone</TableCell>
      <TableCell className="tableRowTitle">Email</TableCell>
    </TableRow>
  );

  return (
    <div className="showTable">
      <CompanyTableData
        data={administrators}
        title="Administrators"
        row={row}
      />
    </div>
  );
}

export default AdminsTable;
