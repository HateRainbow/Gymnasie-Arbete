const nextConfig = require("../../../next.config");

const API_KEY = nextConfig.env.API_KEY;

async function searchBarStockData(symbol, keyword) {
  let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=${API_KEY}`;
  try {
    const data = await fetch(url)
      .then((res) => res.json())
      .then((data) => data);
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = searchBarStockData;
