const apiUrl = "https://api.coinpaprika.com/v1";

export const getGlobalData = async () => {
  const response = await fetch(`${apiUrl}/global`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Fetch global data failed");
  }

  return data;
};
