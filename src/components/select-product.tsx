import { Select, SelectItem } from '@nextui-org/react';
import { SelectData } from '@/types';
import { PRODUCT_FORM } from '@/constants';

type SelectProductProps = {
  idList: SelectData[];
};

export const SelectProduct = ({ idList }: SelectProductProps) => {
  return (
    <Select
      items={idList}
      label='Select id'
      placeholder='product id'
      radius='sm'
      size='sm'
      labelPlacement='outside'
      className='max-w-3xl text-lg'
      id={PRODUCT_FORM.id}
      name={PRODUCT_FORM.id}
    >
      {({ key, label }) => <SelectItem key={key}>{label}</SelectItem>}
    </Select>
  );
};
