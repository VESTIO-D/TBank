"use client";
import Image from 'next/image'
import Link from 'next/link';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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


const Mobilenav = () => {

  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden); // Toggles the state
  };

  const pathname = usePathname()

  const cn = (...inputs: ClassValue[]) => {
      return twMerge(clsx(inputs));
  };

  return (
    <section
     className="w-full max-w-[264px]" 
     id="mobnav">
        <div className="">
            <Image 
             src="/icons/hamburger.svg"
             width={30}
             height={30}
             alt="menu"
             onClick={toggleVisibility}
            />
        </div>
        {isHidden && (
        <div className="bg-zinc-50 border-none z-10 fixed top-0 left-0 w-[250px] h-full shadow-lg p-4
         transition-all duration-300 flex flex-col  justify-between animate-in"
        onClick={toggleVisibility}
        >
            <nav
            className="flex flex-col gap-4">
                <div className="flex justify-end">
                <Image
                    src="/icons/plus.svg"
                    width={30}
                    height={30}
                    alt="TBank"
                    className="rotate-[45deg] cursor-pointer"
                    onClick={toggleVisibility}
                    />
                </div>
                
                    <Link
                    href="/"
                    className="cursor-pointer
                    flex items-center gap-1 mt-[-10px]">

                    <Image
                    src="/icons/logo.png"
                    width={34}
                    height={34}
                    alt="TBank"
                    className=""
                    />

                    <h1 className="font-bold font-ibm-plex-serif  xl:block text-black-1 max-xl:text-lg">TBank</h1>

                    </Link>
                

                {sidebarLinks.map((i) => {
                    const isActive =
                    pathname === i.route || pathname.startsWith(`${i.route}/`)
                    return(
                    <Link
                     href={i.route} 
                     key={i.label}
                     onClick={(event) => {
                      event.preventDefault();
                      setIsHidden((prev) => !prev);
                    }}
                     className={cn('flex gap-3 items-center p-4 rounded-lg w-full max-w-60', {
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
                        <p className={cn("text-16 font-semibold text-black-2",{
                        "text-white":
                        isActive
                        })}>
                            {i.label}
                        </p>
                        
                    </Link>
                    )
                })}

                USER
            </nav>
            footer
        </div>
        )}
        
     </section>
  )
}

export default Mobilenav
