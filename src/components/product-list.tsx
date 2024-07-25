import { getProductsList } from '@/db/queries';
import { ProductCard } from './product-card';

export const ProductList = async () => {
  const products = await getProductsList();
  return (
    <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
      {products.map(({ id, slug, title, image, price }) => (
        <ProductCard key={id} id={id} slug={slug} title={title} src={image} price={price} />
      ))}
    </div>
  );
};
