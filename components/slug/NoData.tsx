import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styles from '../../styles/Home.module.css';

export function NoData() {
  return <div className={styles.NoData}>No Data</div>;
}

export function NoDataTable() {
  return (
    <TableRow>
      <TableCell
        colSpan={6}
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
}
// export default NoData;
