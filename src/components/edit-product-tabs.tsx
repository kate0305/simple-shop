'use client';

import { Tabs, Tab } from '@nextui-org/react';

type EditProductTabsProps = {
  create: React.ReactNode;
  update: React.ReactNode;
};

export const EditProductTabs = ({ create, update }: EditProductTabsProps) => {
  return (
    <Tabs aria-label='Options' variant='bordered' color='success' fullWidth={true}>
      <Tab key='create' title='Create product' className='border-emerald-700 text-white text-lg'>
        {create}
      </Tab>
      <Tab key='update' title='Update product'>
        {update}
      </Tab>
    </Tabs>
  );
};
