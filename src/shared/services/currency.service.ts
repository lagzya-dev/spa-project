import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import {
  TRates,
  TValute,
} from '@/shared/interfaces/response-currence.interface';

class CurrencyService {
  public actualCurrency = new BehaviorSubject<TValute>({});
  public currentCurrencyRates = new BehaviorSubject<TRates>({});
  public currentCurrency = new BehaviorSubject<string>('usd');
  public async getCurrency() {
    const response = await axios.get<TValute>(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json',
    );

    this.actualCurrency.next(response.data);
    await this.setCurrency(this.currentCurrency.getValue());
    return response.data;
  }
  public async setCurrency(currency: string) {
    this.currentCurrency.next(currency);
    const response = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${this.currentCurrency.getValue()}.json`,
    );
    const rates: TRates = response.data[this.currentCurrency.getValue()];
    console.log(rates);
    this.currentCurrencyRates.next(rates);
  }
  public async convertCurrency(
    currencyNeed: string,
    currencyIn: string,
    amount: number,
  ) {
    const response = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyNeed}.json`,
    );
    const rates: TRates = response.data[currencyNeed];
    console.log(rates);
    return Number(rates[currencyIn]) * amount;
  }
}

export default new CurrencyService();
