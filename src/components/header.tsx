import { PATHS } from "@/constants";
import { caveat } from "@/utils/fonts";
import Link from "next/link";

export const Header = () => {
  return (
    <header className='lg:px-16 px-4 bg-white shadow-md'>
      <div className='container mx-auto flex flex-wrap items-center px-4 py-4'>
        <h1 className='flex-1 flex justify-between items-center text-4xl font-bold text-emerald-700'>
          <Link href={PATHS.home()} className={caveat.className}>
            SLMax Shop
          </Link>
        </h1>
        <div className='hidden md:flex md:items-center md:w-auto w-full' id='menu'>
          <nav>
            <ul className='md:flex items-center justify-between text-base font-medium pt-4 md:pt-0'>
              <li>
                <Link href={PATHS.admin()} className='md:p-4 py-3 px-0 block hover:text-emerald-700'>
                  For Admins
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
