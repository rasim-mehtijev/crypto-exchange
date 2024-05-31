const apiUrl = "https://api.coincap.io/v2";

export const getAssets = async () => {
  const response = await fetch(`${apiUrl}/assets`);

  return await response.json();
};

export const getAssetsHistory = async (id, interval, start, end) => {
  const params = new URLSearchParams({
    interval,
    start,
    end,
  });

  const response = await fetch(`${apiUrl}/assets/${id}/history?${params}`);

  return await response.json();
};

export const getAssetsById = async (id) => {
  const response = await fetch(`${apiUrl}/assets/${id}`);

  return await response.json();
};
