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
import { periods } from "./constants";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { buildPeriod, parseTime } from "./utils";
import ErrorModal from "../../ErrorModal";

function Chart({ coinData }) {
  const [period, setPeriod] = React.useState(periods[0]);
  const [chartData, setChartData] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    const { start, end } = buildPeriod(period);
    getAssetsHistory(coinData.id, period.interval, start, end)
      .then((json) =>
        setChartData(
          json.data.map(({ time, ...rest }) => ({
            ...rest,
            date: parseTime(time, period.dateFormat),
          }))
        )
      )
      .catch((error) => setErrorMessage(error.message));
  }, [coinData.id, period]);

  return (
    <>
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
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="priceUsd"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
      <ButtonGroup size="sm">
        {periods.map((_period) => (
          <Button
            onClick={() => setPeriod(_period)}
            key={_period.label}
            variant="outline-primary"
            active={_period.label === period.label}
          >
            {_period.label}
          </Button>
        ))}
      </ButtonGroup>
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default Chart;
