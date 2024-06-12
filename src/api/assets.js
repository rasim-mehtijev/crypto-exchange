const apiUrl = "https://api.coincap.io/v2";

export const getAssets = async () => {
  const response = await fetch(`${apiUrl}/assets`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Assets call failed");
  }

  return data;
};

export const getAssetsHistory = async (id, interval, start, end) => {
  const params = new URLSearchParams({
    interval,
    start,
    end,
  });

  const response = await fetch(`${apiUrl}/assets/${id}/history?${params}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "History call failed");
  }

  return data;
};

export const getAssetsById = async (id) => {
  const response = await fetch(`${apiUrl}/assets/${id}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Assets id call failed");
  }

  return data;
};

export const searchAssets = async (searchString) => {
  const params = new URLSearchParams({
    search: searchString,
  });

  const response = await fetch(`${apiUrl}/assets?${params}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Search call failed");
  }

  return data;
};
