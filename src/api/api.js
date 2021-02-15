const request = async(url) => {
  const response = await fetch(`${url}`);

  if (!response.ok) {
    throw new Error(`${response.status} -- ${response.statusText}`);
  }

  return response.json();
};

export const getDate = async(count) => {
  const data = await request(
    `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${count * 12}`,
  );

  const result = await Promise.all(
    data.results.map(async(item) => {
      const itemInfo = await request(item.url);

      return {
        name: itemInfo.name,
        id: itemInfo.id,
        type: itemInfo.types,
      };
    }),
  );

  return result;
};
