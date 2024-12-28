import Sidebar from "../components/sidebar";
import Image from "next/image";
import Mobilenav from "../components/Mobilenav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="w-full flex">
        <Sidebar />

        <div className="flex flex-col size-full bg-zinc-200/80">
          <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
            <Image 
              src="/icons/logo.png"
              width={34}
              height={34}
              alt="Logo"
              className="rounded-xl"
            />
            <div className="">
              <Mobilenav />
            </div>
          </div>
          {children}
        </div>
          
      </main>
    );
  }
  