import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import styles from '../../styles/Home.module.css';

function CompanyTurnover({ slug }) {
  const sum = slug.general_data.turnover.last.toLocaleString();

  // const currency = new Intl.NumberFormat('md-MD', {
  //   style: 'currency',
  //   currency: 'MDL',
  // }).format(slug.general_data.turnover.last);

  return (
    <div className={styles.turnoverContainer}>
      <div className={styles.ContactsInfoWrapper}>
        <div className={styles.ContactsInfo}>
          <div className={styles.ContactsInfoHead}>Turnover</div>
          <div className={styles.turnoverLast}>{sum} MDL</div>
          <div className={styles.ContactsInfoContent}>
            <LineChart
              width={1220}
              height={400}
              data={slug.general_data.turnover.graph}
              margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid />
              <XAxis dataKey="year" />
              <YAxis dataKey="turnover" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="year" stroke="#8884d8" />
              <Line type="monotone" dataKey="turnover" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyTurnover;
