import Sidebar from "../components/sidebar";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="w-full flex gap-2">
        <Sidebar />
          {children}
      </main>
    );
  }
  