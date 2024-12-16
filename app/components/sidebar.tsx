"use client";
import Link from 'next/link'
import Image from 'next/image'
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from 'next/navigation';

interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

const Sidebar = () => {

  const pathname = usePathname()

  const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};


  return (
    <section
     className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]"
     >
      <nav
       className="flex flex-col gap-4">
         
        <Link
         href="/"
         className="mb-12 cursor-pointer
         flex items-center gap-2">

          <Image
           src="/icons/logo.png"
           width={34}
           height={34}
           alt="TBank"
           className="size-[35px] max-xl:size-12"
           />

          <h1 className="font-bold hidden xl:block text-black-1 text-[26px]">TBank</h1>

        </Link>

        {sidebarLinks.map((i) => {
            const isActive =
             pathname === i.route || pathname.startsWith(`${i.route}/`)
            return(
              <Link href={i.route} key={i.label}
               className={cn('sidebar-link', {
                'bg-bank-gradient': isActive
               })}>
                <div className="relative size-6">
                  <Image
                    src={i.imgURL}
                    alt={i.label}
                    fill
                    className={cn({'brightness-[3] invert-0':isActive})}
                  />
                  
                </div>
                <p className={cn("text-16 font-semibold text-black-2 max-xl:hidden",{
                  "!text-white":
                  isActive
                })}>
                    {i.label}
                 </p>
                
              </Link>
            )
        })}

      </nav>

      <p className="text-black-1">Footer</p>
    </section>
  )
}

export default Sidebar
