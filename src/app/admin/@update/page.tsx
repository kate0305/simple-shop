import { UpdateProduct } from '@/components/update-product';
import { getProductsId } from '@/db/queries/products';

export default async function UpdateProductPage() {
  const idList = (await getProductsId()).map(({ id }) => ({ key: id, label: id }));
  return <UpdateProduct idList={idList} />;
}
