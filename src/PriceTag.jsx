import { NumericFormat } from "react-number-format";

const PriceTag = ({ value }) => {
  console.log("PriceTag");
  return (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator
      prefix={"$"}
      decimalScale={10}
    />
  );
};

export default PriceTag;
