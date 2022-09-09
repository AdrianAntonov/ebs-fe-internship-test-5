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
import useWindowDimensions from '../../hooks/useWindowDimensions';

function CompanyTurnover({ data }: ICompanyTurnover) {
  const sum = data.general_data.turnover.last.toLocaleString();
  const { width } = useWindowDimensions();

  let xAxis = 1220;

  if (width < 640) {
    xAxis = 310;
  } else if (width > 640 && width <= 768) {
    xAxis = 500;
  } else if (width > 768 && width <= 1280) {
    xAxis = 750;
  } else if (width > 1280) {
    xAxis = 1220;
  }

  // const currency = new Intl.NumberFormat('md-MD', {
  //   style: 'currency',
  //   currency: 'MDL',
  // }).format(slug.general_data.turnover.last);

  return (
    <div className="mt-4">
      <div className="mt-4 flex justify-between">
        <div className="w-[100%] bg-white shadow-[0_0.4375rem_1.6875rem_0.1875rem_#1f69b30d] ">
          <div className="ml-4 border-b-[1px] border-b-solid border-b-[#e1e1e1] py-4 text-xl">
            Turnover
          </div>

          <div className="py-4 pl-4 text-xl font-bold text-[#2083be]">
            {sum} MDL
          </div>
          <div>
            {sum !== '0' ? (
              <LineChart
                width={xAxis}
                height={400}
                data={data.general_data.turnover.graph}
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
