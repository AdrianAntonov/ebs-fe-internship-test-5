import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { ICompanyTurnover } from '../../types/turnover';

function CompanyTurnover({ data }: ICompanyTurnover) {
  const sum = data?.general_data?.turnover.last?.toLocaleString();

  // const { innerWidth } = globalThis.window;

  return (
    <div className="mt-4">
      <div className="mt-4 flex justify-between">
        <div className="w-[100%] bg-white shadow-[0_0.4375rem_1.6875rem_0.1875rem_#1f69b30d] ">
          <div className="border-b-solid ml-4 border-b-[1px] border-b-[#e1e1e1] py-4 text-xl">
            Turnover
          </div>

          <div className="py-4 pl-4 text-xl font-bold text-[#2083be]">
            {sum} MDL
          </div>
          <div>
            {sum !== '0' ? (
              <LineChart
                className="w-[920px] md:w-[600px] "
                width={1200}
                height={400}
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
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyTurnover;
