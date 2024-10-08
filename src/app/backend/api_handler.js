const nextConfig = require("../../../next.config");

const API_KEY = nextConfig.env.API_KEY;

async function searchBarStockData(symbol, keyword) {
  let url = `https://www.alphavantage.co/query?function=${symbol}&keywords=${keyword}&apikey=${API_KEY}`;
  try {
    const data = await fetch(url).then((res) => res.json());
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = searchBarStockData;
