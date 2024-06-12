import TrillionNumber from "./TrillionNumber";

export const mainSubHeader = [
  {
    children: "MARKET CAP",
    property: "market_cap_usd",
    Component: TrillionNumber,
  },
  {
    children: "Market cap change 24h",
    property: "market_cap_change_24h",
    Component: ({ value }) => value,
  },
  {
    children: "BTC DOM INDEX",
    property: "bitcoin_dominance_percentage",
    Component: ({ value }) => value,
  },
];

export const pageSubHeader = [
  {
    children: "Rank 1",
  },
  {
    children: "Bitcoin",
  },
  {
    children: "Market cap",
  },
  {
    children: "Volume",
  },
  {
    children: "Supply",
  },
];
