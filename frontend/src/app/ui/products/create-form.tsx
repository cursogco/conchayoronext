'use client';

import Link from 'next/link';
// import { useActionState } from 'react'; # ainda em versão experimental do React (19)
import { useFormState } from 'react-dom';
import { createProduct, State } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';

export default function CreateForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(createProduct, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""              
            >              
            </input>
           </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Category
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="category"
                name="category"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"                
               />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Price
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"                
               />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Rating
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="rating"
                name="rating"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"                
               />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/modules/products"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
}