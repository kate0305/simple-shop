import Link from 'next/link';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { PATHS } from '@/constants';
import { ProductImg } from './product-img';

type ProductCardProps = {
  id: string;
  slug: string;
  title: string;
  src: string | null;
  price: number;
};

export const ProductCard = ({ id, slug, title, src, price }: ProductCardProps) => (
  <Link href={`${PATHS.showProduct(slug)}-${id}`}>
    <Card shadow='md' className='p-5'>
      <CardBody className='overflow-visible p-0'>
        <ProductImg img={src} alt={title} className='w-full object-contain h-[250px] bg-white' />
      </CardBody>
      <CardFooter className='flex-col justify-start items-start p-0 text-small rounded-none'>
        <p className='max-w-64 capitalize truncate'>{title}</p>
        <p className='text-default-500'>{price} $</p>
      </CardFooter>
    </Card>
  </Link>
);
