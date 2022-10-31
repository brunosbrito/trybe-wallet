const economyApi = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const data = response.json();
  return data;
};

export default economyApi;
