import { EditProductTabs } from '@/components/edit-product-tabs';

type AdminLayoutProps = {
  children: React.ReactNode;
  create: React.ReactNode;
  update: React.ReactNode;
};

export default function AdminLayout({ children, create, update }: AdminLayoutProps) {
  return (
    <>
      {children}
      <EditProductTabs create={create} update={update}/>
    </>
  );
}
