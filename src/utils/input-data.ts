import { PRODUCT_FORM } from "@/constants";

type InputData = {
  type: string;
  id: string;
  notRequired?: boolean;
  min?: string;
  step?: string;
};

export const inputData: InputData[] = [
  {
    type: 'text',
    id: PRODUCT_FORM.title,
  },
  {
    type: 'text',
    id: PRODUCT_FORM.category,
  },
  {
    type: 'text',
    id: PRODUCT_FORM.image,
    notRequired: true,
  },
  {
    type: 'text',
    id: PRODUCT_FORM.quantity,
    min: '0',
  },
  {
    type: 'text',
    id: PRODUCT_FORM.price,
    min: '0',
    step: '0.01',
  },
];
