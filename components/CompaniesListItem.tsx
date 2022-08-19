import { useRouter } from 'next/router';
import { Card, Box, Paper, CardContent } from '@mui/material';
import styles from '../styles/Home.module.css';
import ICompaniesListItem from '../types/companiesListItem';

function CompaniesListItem({ information }: ICompaniesListItem) {
  const {
    id,
    name,
    idno,
    website,
    email,
    creation_date,
    status,
    turnover,
    partners,
    mobile,
    phone,
    slug,
    industry,
    employees,
  } = information;

  console.log(information);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/companies/${slug}`);
  };

  return (
    <Card
      className={styles.card}
      sx={{
        marginBottom: '1rem',
        backgroundColor: '#f9f9f9',
        border: '1px solid hsla(0, 0%, 82%, 0.1)',
      }}
    >
      <CardContent>
        <div>
          <div>
            <span className={styles.cardId}>{id}</span>
            <span onClick={handleClick} className={styles.cardName}>
              {name}
            </span>
          </div>
          <Box
            display="flex"
            sx={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              // gap: '10rem',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Box>
              <div>
                <span className={styles.title}>IDNO&#58;</span>{' '}
                <span className={styles.values}>{idno}</span>
              </div>
              <div>
                <span className={styles.title}>Status&#58;</span> {status}
              </div>
              <div>
                <span className={styles.title}>Date of establishment&#58;</span>
                {creation_date}
              </div>
              <div>
                <span className={styles.title}>Virsta&#58;</span>
              </div>
            </Box>
            <Box>
              <div>
                <span className={styles.title}>Nr. by the employees&#58;</span>
                {employees}{' '}
              </div>
              <div>
                <span className={styles.title}>Turnover&#58;</span> {turnover}
              </div>
              <div>
                <span className={styles.title}>Industry&#58;</span>{' '}
                <span className={styles.values}>{industry}</span>
              </div>
            </Box>
            <Box>
              <div style={{ display: 'flex' }}>
                <div style={{ paddingRight: '5px' }} className={styles.title}>
                  Contacts&#58;
                </div>
                <div>
                  <div>
                    <span className={styles.title}>Phone mobile&#58;</span>{' '}
                    {mobile}
                  </div>
                  <div>
                    <span className={styles.title}>Phone&#58;</span> {phone}
                  </div>
                  <div>
                    <span className={styles.title}>Email&#58;</span> {email}
                  </div>
                  <div>
                    <span className={styles.title}>Website&#58;</span>{' '}
                    <a href={`${website}`}>{website}</a>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <Box className={styles.cardFooter}>
            {partners.length > 0 && (
              <p className={styles.title}>
                Founders of the company:{' '}
                <span className={styles.cardFooterName}>{[...partners]}</span>
              </p>
            )}
          </Box>
        </div>
      </CardContent>
    </Card>
  );
}

export default CompaniesListItem;
