'use server';

import { PATHS, PRODUCT_FORM } from '@/constants';
import { db } from '@/db';
import { z } from 'zod';
import slugify from 'slugify';
import { revalidatePath } from 'next/cache';

const createProductSchema = z.object({
  title: z.string().min(2, { message: 'Must be 2 or more characters long' }).toLowerCase(),
  category: z.string().min(2, { message: 'Must be 2 or more characters long' }).toLowerCase(),
  description: z.string().min(5, { message: 'Must be 5 or more characters long' }).toLowerCase(),
  image: z.string().url({ message: 'Invalid url' }).nullable(),
  quantity: z.coerce.number().nonnegative({ message: 'Value must be greater than zero' }),
  price: z.coerce.number().nonnegative({ message: 'Value must be greater than zero' }),
});

type Product = z.infer<typeof createProductSchema> & {
  id: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

type CreateProductFormState = {
  errors: {
    title?: string[];
    category?: string[];
    description?: string[];
    image?: string[];
    quantity?: string[];
    price?: string[];
    _form?: string[];
  };
};

export const createProduct = async (
  formState: CreateProductFormState,
  formData: FormData,
): Promise<CreateProductFormState> => {
  const result = createProductSchema.safeParse({
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

  const { title, category, description, image, quantity, price } = result.data;

  let newProduct: Product;

  try {
    newProduct = await db.product.create({
      data: {
        slug: slugify(title),
        title,
        category,
        description,
        image,
        quantity: +quantity,
        price: +price,
      },
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { errors: { _form: [e.message] } };
    } else {
        console.log(e)
      return { errors: { _form: ['Something went wrong'] } };
    }
  }
  console.log('newProduct', newProduct);
  revalidatePath(PATHS.home());
//   redirect(`/`);
  return {
    errors: {}, //! return 
  };
};
