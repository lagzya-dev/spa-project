'use client';
import CurrencyService from '@/shared/services/currency.service';
import { useEffect, useState } from 'react';

export function Currency() {
  const setter = async () => {
    const res = await CurrencyService.getCurrency();
    console.log(res);
  };
  const [currency, setCurrency] = useState(
    CurrencyService.actualCurrency.getValue(),
  );
  const [currentCurrency, setCurrentCurrency] = useState(
    CurrencyService.currentCurrency.getValue(),
  );
  const [currentCurrencyRates, setCurrentCurrencyRates] = useState(
    CurrencyService.currentCurrencyRates.getValue(),
  );
  useEffect(() => {
    const sub = CurrencyService.actualCurrency.subscribe((currency) => {
      setCurrency(currency);
    });

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    const sub = CurrencyService.currentCurrency.subscribe((currency) => {
      setCurrentCurrency(currency);
    });

    return () => sub.unsubscribe();
  }, []);
  useEffect(() => {
    const sub = CurrencyService.currentCurrencyRates.subscribe((currency) => {
      setCurrentCurrencyRates(currency);
    });

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    setter();
  }, []);
  return (
    <div className={'flex flex-col justify-start items-start content-start'}>
      <span>Текущая валюта: {currency[currentCurrency]}</span>
      {Object.keys(currentCurrencyRates).map((p) => (
        <span key={p}>
          1 {currentCurrency} = {currentCurrencyRates[p]} {p}
        </span>
      ))}
    </div>
  );
}
