import { useId } from 'react';

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'USD',
  amountDisable = false,
  currencyDisable = false,
}) {
  const uniqueId = useId();

  return (
    <div className="mb-3">
      <label>{label}</label>
      <div className="flex items-center gap-2">
        <input
          id={`${uniqueId}-amount`}
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
          className="border rounded px-2 py-1 w-full"
        />
        <select
          id={`${uniqueId}-currency`}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="border rounded px-2 py-1"
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
