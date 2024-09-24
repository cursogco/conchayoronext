import { notFound } from 'next/navigation';
import Form from '@/app/ui/products/update-form';
import { fetchProductById } from '@/app/lib/actions';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [product] = await Promise.all([
    fetchProductById(id),
   ]);
   if (!product) {
    notFound();
  }
  return (
    <main>
      <Form product={product} />
    </main>
  );
}