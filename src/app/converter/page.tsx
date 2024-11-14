import { Converter } from '@/widgets/Converter';

export default function Home() {
  return (
    <div className={'flex flex-col justify-center items-center gap-20 mt-5'}>
      <Converter />
    </div>
  );
}
