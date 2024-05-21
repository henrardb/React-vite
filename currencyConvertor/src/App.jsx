import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./Components/index";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("usd");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  //console.log(`Content of options: ${options}`);

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        Currency Convertor
        <InputBox
          label="From"
          amount={amount}
          currency={from}
          currencyOptions={options}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
        />
        <InputBox
          label="To"
          amount={convertedAmount}
          currency={to}
          disabledAmount={true}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
        />
        <div>
          <button>
            Convert from {from} to {to}
          </button>
          <button type="button" onClick={swap}>
            Swap
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
