import { db } from '@/db';

export const getProduct = async (id: string) =>
  await db.product.findUnique({
    where: { id },
    select: {
      title: true,
      category: true,
      image: true,
      description: true,
      price: true,
      quantity: true,
    },
  });

export const getProductsList = async () =>
  await db.product.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      image: true,
      price: true,
    },
  });
