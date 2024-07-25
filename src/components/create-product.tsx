'use client';

import { useFormState } from 'react-dom';
import { createProduct } from '@/actions';
import { ProductForm } from '@/components/product-form';

export const CreateProduct = () => {
  const [formState, action] = useFormState(createProduct, { errors: {} });
  return <ProductForm typeForm='create' btnText='Create Product' action={action} />;
};
