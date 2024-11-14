import Link from 'next/link';

export function Header() {
  return (
    <div
      className={
        'w-full h-14 bg-zinc-800 flex flex-row gap-2 items-center pl-5'
      }
    >
      <Link
        className={
          'bg-zinc-500 w-32 h-10 flex justify-center items-center rounded-md'
        }
        href={'/'}
      >
        <span>Currency List</span>
      </Link>
      <Link
        className={
          'bg-zinc-500 w-32 h-10 flex justify-center items-center rounded-md'
        }
        href={'/converter'}
      >
        <span>Converter</span>
      </Link>
    </div>
  );
}
