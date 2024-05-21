import React, { useId } from "react";

function InputBox({
  label,
  amount,
  disabledAmount = false,
  disabledCurrency = false,
  currency = "eur",
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`inputBox ${className}`}>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="number"
          placeholder="Amount"
          disabled={disabledAmount}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <p>Currency type</p>
        <select
          name="currency"
          value={currency}
          disabled={disabledCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
