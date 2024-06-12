import { NumericFormat } from "react-number-format";

const TrillionNumber = ({ value }) => {
  const trillionValue = value / 1e12;

  return (
    <NumericFormat
      value={trillionValue}
      displayType={"text"}
      thousandSeparator={true}
      decimalScale={2}
      fixedDecimalScale={true}
      suffix={"T"}
      prefix="$"
    />
  );
};

export default TrillionNumber;
