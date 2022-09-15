import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CompanyTableData from '../CompanyTableData';
import styles from '../../styles/Home.module.css';
import { NoDataTable } from './NoData';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';
import cn from 'classnames';

function PartnersTable({ data }: IAdmPrtQuantity) {
  const partners =
    data?.personal?.PRT?.length > 0 ? (
      data?.personal?.PRT?.map((item, idx) => (
        <TableRow className={styles.dayRow} key={item.id}>
          <TableCell className={styles.firstCell}>
            <span className={styles.number}>{idx + 1}</span>
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
      <TableCell className="tableRowTitle pl-10">
        Name and Surname
      </TableCell>
      <TableCell className="tableRowTitle">Seniority</TableCell>
      <TableCell className="tableRowTitle">Job Function</TableCell>
      <TableCell className="tableRowTitle">Phone</TableCell>
      <TableCell className="tableRowTitle">Email</TableCell>
    </TableRow>
  );

  return (
    <div className="showTable">
      <CompanyTableData data={partners} title="Partners" row={row} />
    </div>
  );
}

export default PartnersTable;
