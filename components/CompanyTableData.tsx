import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactNode } from 'react';
import styles from '../styles/Home.module.css';

interface ICompanyTableDataProps {
  data: ReactNode;
  title: string;
  row?: ReactNode;
}

const CompanyTableData: React.FC<ICompanyTableDataProps> = ({
  data,
  title,
  row,
}) => {
  return (
    <TableContainer>
      <Table className="bg-white">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <span className="text-xl">{title}</span>
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
