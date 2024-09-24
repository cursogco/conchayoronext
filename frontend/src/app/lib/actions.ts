'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { randomUUID }  from 'node:crypto';
import { getData, getDataById, postData, putData, deleteData} from './data';

export type State = {
  errors?: {
    id?: string[];
    name?: string[];
    category?: string[];
    price?: string[];
    rating?: string[];
  };
  message?: string | null;
};

export async function fetchProducts() {
  const products  = await getData('products');  
  return products;
}

export async function fetchProductById(id: string) {
  const product  = await getDataById('products', id);  
  return product;
}

export async function createProduct(prevState: State, formData: FormData) {
  const product = {
    'id': randomUUID(),
    'name': formData.get('name'),
    'category': formData.get('category'),
    'price': formData.get('price'),
    'rating': formData.get('rating')
  }
  postData('products', JSON.stringify(product));
  revalidatePath('/modules/products');
  redirect('/modules/products');
}

export async function updateProduct(id: string, prevState: State, formData: FormData) {
  const product = {
    'name': formData.get('name'),
    'category': formData.get('category'),
    'price': formData.get('price'),
    'rating': formData.get('rating')
  }
  putData('products', id, JSON.stringify(product));
  revalidatePath('/modules/products');
  redirect('/modules/products');
}
  
export async function deleteProduct(id: string) {
  deleteData('products', id);
  revalidatePath('/modules/products');
}
  