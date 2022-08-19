import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CompanyTableData from '../CompanyTableData';
import styles from '../../styles/Home.module.css';
import { NoDataTable } from './NoData';
import { IAdmPrtQuantity } from '../../types/quantityAdmPrt';

function PartnersTable({ slug }: IAdmPrtQuantity) {
  const partners =
    slug?.personal?.PRT?.length > 0 ? (
      slug?.personal?.PRT?.map((item, idx) => (
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
    <TableRow className={styles.tableRow}>
      <TableCell className={`${styles.tableRowTitle} ${styles.firstCell}`}>
        Name and Surname
      </TableCell>
      <TableCell className={styles.tableRowTitle}>Seniority</TableCell>
      <TableCell className={styles.tableRowTitle}>Job Function</TableCell>
      <TableCell className={styles.tableRowTitle}>Phone</TableCell>
      <TableCell className={styles.tableRowTitle}>Email</TableCell>
    </TableRow>
  );

  return (
    <div className={styles.partnersTable}>
      <CompanyTableData data={partners} title="Partners" row={row} />
    </div>
  );
}

export default PartnersTable;
