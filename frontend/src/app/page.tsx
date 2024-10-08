import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
       </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p
        >
            <strong>Welcome to Conchayoro</strong>            
          </p>
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
            <strong>This is the home</strong>            
          </p>
          <Link href="/modules">
            <p className="hidden md:block">Visit our modules</p>
           </Link>

        </div>        
      </div>
    </main>
  );
}
