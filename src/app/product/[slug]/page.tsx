import { Button } from '@nextui-org/react';
import { ProductImg } from '@/components/product-img';
import { getProduct } from '@/db/queries';
import { capitalizeSentences } from '@/utils/capitalize-every-sentence';
import { getLastPartOfStr } from '@/utils/get-last-part-of-str';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const id = getLastPartOfStr(params.slug) ?? '';
  const product = await getProduct(id);

  if (!product) return 'Something went wrong';

  const { category, title, description, image, price, quantity } = product;

  return (
    <div className='flex flex-wrap mx-4'>
      <div className='w-full md:w-1/2 px-4 mb-8'>
        <ProductImg img={image} alt={title} className='w-full h-auto rounded-lg shadow-md mb-4' />
      </div>
      <div className='w-full md:w-1/2 px-4"'>
        <h2 className='text-3xl font-bold mb-2 capitalize'>{title}</h2>
        <p className='ext-gray-600 mb-4'>Category: {category}</p>
        <p className='text-2xl font-bold mr-2'>{price} $</p>
        <p className='text-gray-700 mb-6'>{capitalizeSentences(description)}</p>
        <Button className='bg-emerald-700 text-white text-lg'>Add to cart</Button>
      </div>
    </div>
  );
}
