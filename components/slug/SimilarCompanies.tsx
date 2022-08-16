import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CompanyTableData from '../CompanyTableData';
import styles from '../../styles/Home.module.css';

function SimilarCompanies({ slug }) {
  const companies =
    slug.similar_companies !== null ? (
      slug.similar_companies.map((company) => (
        <TableRow className={styles.dayRow} key={company.id}>
          <TableCell>{company?.name || '---'}</TableCell>
          <TableCell>{company?.industry || '---'}</TableCell>
          <TableCell>{company?.location || '---'}</TableCell>
          <TableCell>{company?.site || '---'}</TableCell>
          <TableCell>{company?.email || '---'}</TableCell>
          <TableCell>{company?.phone || '---'}</TableCell>
        </TableRow>
      ))
    ) : (
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

  const row = (
    <TableRow className={styles.tableRow}>
      <TableCell className={styles.tableRowTitle}>NAME</TableCell>
      <TableCell className={styles.tableRowTitle}>INDUSTRY</TableCell>
      <TableCell className={styles.tableRowTitle}>LOCATION</TableCell>
      <TableCell className={styles.tableRowTitle}>WEBSITE</TableCell>
      <TableCell className={styles.tableRowTitle}>EMAIL</TableCell>
      <TableCell className={styles.tableRowTitle}>PHONE</TableCell>
    </TableRow>
  );

  return (
    <div className={styles.adminTable}>
      <CompanyTableData data={companies} title="Similar companies" row={row} />
    </div>
  );
}

export default SimilarCompanies;
