export const PRODUCT_FORM = {
    id: 'id',
  title: 'title',
  category: 'category',
  description: 'description',
  image: 'image',
  quantity: 'quantity',
  price: 'price',
};

export const PATHS = {
  home() {return '/';},
  admin() {return '/admin';},
  showProduct(slug: string) {return `/product/${slug}`;},
};

