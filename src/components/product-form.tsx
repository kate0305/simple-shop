import { Input, Textarea } from '@nextui-org/react';
import { inputData } from '@/utils/input-data';
import { SelectData } from '@/types';
import { PRODUCT_FORM } from '@/constants';
import { FormButton } from './form-button';
import { SelectProduct } from './select-product';

type ProductFormProps = {
  typeForm: 'create' | 'update';
  btnText: string;
  action: (payload: FormData) => void;
  idList?: SelectData[];
};

export const ProductForm = ({ typeForm, btnText, action, idList }: ProductFormProps) => {
  return (
    <form action={action} className='container mx-auto px-4 flex flex-col gap-y-6'>
      {typeForm === 'update' && <SelectProduct idList={idList ?? []} />}
      {inputData.map(({ type, id, notRequired, min, step }) => (
        <Input
          key={id}
          type={type}
          id={id}
          name={id}
          label={`Enter your product ${id}`}
          labelPlacement='outside'
          placeholder={id === PRODUCT_FORM.price ? '0.00' : id}
          radius='sm'
          size='sm'
          isRequired={typeForm === 'create' && !notRequired}
          min={min}
          step={step}
          endContent={
            id === PRODUCT_FORM.price && (
              <div className='pointer-events-none flex items-center'>
                <span className='text-default-400 text-small'>$</span>
              </div>
            )
          }
          className='max-w-3xl text-lg'
        />
      ))}
      <Textarea
        label='Description'
        name={PRODUCT_FORM.description}
        id='description'
        labelPlacement='outside'
        placeholder='Enter product description'
        radius='sm'
        size='sm'
        isRequired={typeForm === 'create'}
        className='max-w-3xl text-lg'
      />
      <FormButton text={btnText} className='max-w-3xl' />
    </form>
  );
};
