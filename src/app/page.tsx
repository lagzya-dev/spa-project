import { Currency } from '@/widgets/Currency';
import { SwitchCurrency } from '@/widgets/SwitchCurrency';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 mt-5">
      <SwitchCurrency />
      <Currency />
    </div>
  );
}
