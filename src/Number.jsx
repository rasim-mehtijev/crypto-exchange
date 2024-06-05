import { NumericFormat } from "react-number-format";

const Number = ({ value }) => (
  <NumericFormat
    value={value}
    displayType={"text"}
    thousandSeparator
    prefix={"$"}
    decimalScale={2}
  />
);

export default Number;
