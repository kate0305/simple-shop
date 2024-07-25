'use client';

import { useFormState } from 'react-dom';
import { updateProduct } from '@/actions';
import { ProductForm } from '@/components/product-form';
import { SelectData } from '@/types';

type UpdateProductProps = {
  idList: SelectData[];
};

export const UpdateProduct = ({ idList }: UpdateProductProps) => {
  const [formState, action] = useFormState(updateProduct, { errors: {} });

  return <ProductForm typeForm='update' btnText='Update Product' idList={idList} action={action} />;
};
