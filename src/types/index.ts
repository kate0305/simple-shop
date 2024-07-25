export type ProductFormState = {
  errors: {
    title?: string[];
    category?: string[];
    description?: string[];
    image?: string[];
    quantity?: string[];
    price?: string[];
    _form?: string[];
  };
};

export type SelectData = {
  key: string;
  label: string;
};
