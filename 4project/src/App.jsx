import { useState, useEffect } from 'react';
import Inputbox from './Components/Inputbox';
import Usecurrency from './Hooks/Usecurrency';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('INR');
  const [to, setTo] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = Usecurrency(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) { 
    result=  setConvertedAmount(amount *currencyInfo[to]);
     { console.log(result);}
    }
  };
  

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/839351/pexels-photo-839351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
      }}>
      <div className="w-full max-w-md p-5 rounded-lg border backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
          <Inputbox
            label="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(val) => setAmount(val)}
            onCurrencyChange={(val) => setFrom(val)}
            selectCurrency={from}
          />
          <div className="text-center my-4">
            <button type="button" onClick={swap}
              className="bg-blue-600 text-white px-4 py-1 rounded">
              Swap
            </button>
          </div>
          <Inputbox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(val) => setTo(val)}
            selectCurrency={to}
            amountDisable={true}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
