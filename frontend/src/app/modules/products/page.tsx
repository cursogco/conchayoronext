import { lusitana } from '@/app/ui/fonts';
import Table from '@/app/ui/products/table';
import { CreateProduct } from '@/app/ui/products/buttons';
 
export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateProduct />
      </div>
        <Table />
      <div className="mt-5 flex w-full justify-center">
      </div>
    </div>
  );
}