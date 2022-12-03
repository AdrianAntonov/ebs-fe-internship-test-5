import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ICompanyTurnover } from '../../types/turnover';

function CompanyTurnover() {
  const router = useRouter();
  const { data }: ICompanyTurnover = useQuery(['data', {id: router.query?.slug}]);
  const sum = data?.general_data?.turnover.last?.toLocaleString();

  return (
    <div className="mt-4">
      <div className="contactsInfoWrapper">
        <div className="contactsInfo">
          <div className="contactsInfoHead">Turnover</div>
          <div className="py-4 pl-4 text-xl font-bold text-[#2083be]">
            {sum} MDL
          </div>
          <div>
            {sum !== '0' ? (
              <ResponsiveContainer width="90%" height={400}>
                <LineChart
                  data={data?.general_data?.turnover?.graph}
                  margin={{ top: 25, right: 30, left: 35, bottom: 5 }}
                >
                  <CartesianGrid />
                  <XAxis dataKey="year" />
                  <YAxis dataKey="turnover" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="year" stroke="#8884d8" />
                  <Line type="monotone" dataKey="turnover" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyTurnover;
