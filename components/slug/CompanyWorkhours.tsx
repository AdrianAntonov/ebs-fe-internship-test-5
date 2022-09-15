import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CompanyTableData from '../CompanyTableData';
import { IWorkingHours } from '../../types/businessHours';

function CompanyWorkhours({ data }: IWorkingHours) {
  // console.log(data);
  const hoursTable =
    data.length > 0 ? (
      data.map((day) => (
        <TableRow className="hover:bg-[#fafafa]" key={day.title}>
          <TableCell className="bg-[#eff7ff] font-semibold text-[#494949] hover:bg-[#fafafa]">
            {day.title}
          </TableCell>
          <TableCell className="hover:bg-[#fafafa]">{day.value}</TableCell>
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
