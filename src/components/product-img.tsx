import { Image, ImageProps } from '@nextui-org/react';

type ProductImgProps = ImageProps & {
    img: string | null;
};

export const ProductImg = ({ alt, img, className }: ProductImgProps) => (
  <Image
    width='100%'
    alt={alt}
    className='w-full object-contain h-[250px] bg-white'
    src={img ?? '../../public/no-image.svg'}
    loading='lazy'
  />
);
