import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from '../styles/Home.module.css';

interface ICompanyTableDataProps {
  data: any;
  title: any;
  row?: any;
}

const CompanyTableData: React.FC<ICompanyTableDataProps> = ({
  data,
  title,
  row,
}) => {
  return (
    <TableContainer>
      <Table sx={{ backgroundColor: '#ffffff' }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <span className={styles.tableHead}>{title}</span>
            </TableCell>
          </TableRow>
          {row}
        </TableHead>
        <TableBody>{data}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompanyTableData;
