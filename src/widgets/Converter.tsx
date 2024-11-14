'use client';
import CurrencyService from '@/shared/services/currency.service';
import { useState } from 'react';

export function Converter() {
  const handleSwitchCurrency = (value: string) => {
    const split = value.split(' in ');
    const currencyIn = split[1];
    const needConvert = split[0];
    const amount = needConvert.split(' ')[0];
    const currency = needConvert.split(' ')[1];
    async function convert() {
      const rates = await CurrencyService.convertCurrency(
        currency,
        currencyIn,
        parseFloat(amount),
      );
      setValue(`${needConvert} = ${rates} ${currencyIn}`);
    }
    convert();
  };
  const [input, setInput] = useState('');
  const [value, setValue] = useState('');
  return (
    <form
      className={'relative mb-3 flex flex-col'}
      onSubmit={(e) => {
        handleSwitchCurrency(input);
        e.preventDefault();
      }}
    >
      <label
        className={
          'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        }
      >
        <span>ENTER CURRENCY</span>
      </label>
      <input
        type="text"
        className={
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        }
        value={input}
        placeholder={'15 usd in rub'}
        onInput={(e) => setInput(e.currentTarget.value)}
      />
      <span>{value}</span>
    </form>
  );
}
