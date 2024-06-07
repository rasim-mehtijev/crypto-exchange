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

function Chart({ coinData, periodParams, setPriceHL }) {
  const [period, setPeriod] = React.useState(periods[0]);
  const [chartData, setChartData] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    if (periodParams) {
      const _period = periods.find(({ label }) => label === periodParams);
      if (_period) {
        setPeriod(_period);
      }
    }
  }, [periodParams]);

  React.useEffect(() => {
    const { start, end } = buildPeriod(period);
    getAssetsHistory(coinData.id, period.interval, start, end)
      .then((json) => {
        setChartData(
          json.data.map(({ time, ...rest }) => ({
            ...rest,
            date: parseTime(time, period.dateFormat),
          }))
        );

        const pricesHL = json.data.sort((a, b) => {
          if (a.priceUsd > b.priceUsd) {
            return 1;
          }
          if (a.priceUsd < b.priceUsd) {
            return -1;
          }
          return 0;
        });

        setPriceHL({
          low: pricesHL[0].priceUsd,
          high: pricesHL[pricesHL.length - 1].priceUsd,
        });
      })
      .catch((error) => setErrorMessage(error.message));
  }, [coinData.id, period, setPriceHL]);

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
          <YAxis
            domain={["auto", "auto"]}
            orientation="right"
            mirror
            tickLine={false}
            tickFormatter={(value) => `${value.toFixed(2)}`}
          />
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
