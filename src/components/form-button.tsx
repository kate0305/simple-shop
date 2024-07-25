'use client';

import { Button, ButtonProps } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

type FormButtonProps = ButtonProps & {
  text: string;
};

export const FormButton = ({ text, className }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' isLoading={pending} className={`bg-emerald-700 text-white text-lg ${className}`}>
      {text}
    </Button>
  );
};
