'use client';

import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

type FormButtonProps = {
  text: string;
};

export const FormButton = ({ text }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' isLoading={pending}>
      {text}
    </Button>
  );
};
