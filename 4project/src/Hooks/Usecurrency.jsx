import { useEffect, useState } from 'react';

function Usecurrency(baseCurrency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/76da7ffbb969db2db6dfa8a5/latest/${baseCurrency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch currency data for ${baseCurrency}`);
        }
        return res.json();
      })
      .then((res) => {
        setData(res.conversion_rates); // ✅ THIS gives object like {INR: 83.1, USD: 1, EUR: 0.9}
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setData(null);
      });
  }, [baseCurrency]);

  return data;
}

export default Usecurrency;
