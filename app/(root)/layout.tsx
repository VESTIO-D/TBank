import Sidebar from "../components/sidebar";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="w-full flex">
        <Sidebar />
          {children}
      </main>
    );
  }
  