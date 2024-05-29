import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getAssetsHistory } from "../../api/assets";
import { intervals } from "./constants";

function Chart({ coinData }) {
  const [interval] = React.useState(intervals[0]);
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {
    getAssetsHistory(coinData.id, interval).then((json) =>
      setChartData(json.data)
    );
  }, [coinData.id, interval]);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        width={500}
        height={500}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="priceUsd" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
