import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CompanyTableData from '../CompanyTableData';
import styles from '../../styles/Home.module.css';

function CompanyWorkhours({ data }) {
  const hoursTable = data.map((day) => (
    <TableRow className={styles.dayRow} key={day.title}>
      <TableCell className={styles.workdays}>{day.title}</TableCell>
      <TableCell className={styles.workhours}>{day.value}</TableCell>
    </TableRow>
  ));

  return <CompanyTableData data={hoursTable} title="Workhours" />;
}

export default CompanyWorkhours;
