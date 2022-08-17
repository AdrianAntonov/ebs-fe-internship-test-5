import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CompanyTableData from '../CompanyTableData';
import styles from '../../styles/Home.module.css';
import { workingHours } from '../../types/businessHours';

function CompanyWorkhours({ data }: workingHours) {
  // console.log(data);
  const hoursTable =
    data.length > 0 ? (
      data.map((day) => (
        <TableRow className={styles.dayRow} key={day.title}>
          <TableCell className={styles.workdays}>{day.title}</TableCell>
          <TableCell className={styles.workhours}>{day.value}</TableCell>
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell
          colSpan={2}
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            letterSpacing: 1.5,
            fontSize: '1.5rem',
            color: '#c3c3c3',
          }}
        >
          No data
        </TableCell>
      </TableRow>
    );

  return <CompanyTableData data={hoursTable} title="Workhours" />;
}

export default CompanyWorkhours;
