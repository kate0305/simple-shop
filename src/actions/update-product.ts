'use server';

import type { Product } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { z } from 'zod';
import slugify from 'slugify';
import { PATHS, PRODUCT_FORM } from '@/constants';
import { ProductFormState } from '@/types';

const updateProductSchema = z.object({
  id: z.string(),
  title: z.string().toLowerCase().optional(),
  category: z.string().toLowerCase().optional(),
  description: z.string().toLowerCase().optional(),
  image: z.string().nullable().optional(),
  quantity: z.coerce.number().nonnegative({ message: 'Value must be greater than zero' }).optional(),
  price: z.coerce.number().nonnegative({ message: 'Value must be greater than zero' }).optional(),
});

export const updateProduct = async (formState: ProductFormState, formData: FormData): Promise<ProductFormState> => {
  const result = updateProductSchema.safeParse({
    id: formData.get(PRODUCT_FORM.id),
    title: formData.get(PRODUCT_FORM.title),
    category: formData.get(PRODUCT_FORM.category),
    description: formData.get(PRODUCT_FORM.description),
    image: formData.get(PRODUCT_FORM.image),
    quantity: formData.get(PRODUCT_FORM.quantity),
    price: formData.get(PRODUCT_FORM.price),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { errors: result.error.flatten().fieldErrors };
  }

  const { id, title, category, description, image, quantity, price } = result.data;

  let newProduct: Product;

  try {
    newProduct = await db.product.update({
      where: {
        id,
      },
      data: {
        slug: title?.trim() && slugify(title),
        title: title?.trim() || undefined,
        category: category?.trim() || undefined,
        description: description?.trim() || undefined,
        image: image?.trim() || undefined,
        quantity: (quantity && +quantity) || undefined,
        price: (price && +price) || undefined,
      },
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { errors: { _form: [e.message] } };
    } else {
      console.log(e);
      return { errors: { _form: ['Something went wrong'] } };
    }
  }

  revalidatePath(PATHS.home());
  revalidatePath(`${PATHS.showProduct(slugify(newProduct.slug))}-${id}`, 'page');
  redirect(PATHS.home());
};
