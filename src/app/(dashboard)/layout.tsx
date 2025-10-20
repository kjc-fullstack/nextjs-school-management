import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/* Left sidebar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="App logo" width={32} height={32}/>
          <span className="hidden lg:block font-bold">Schoolidor</span>
          </Link>

          <Menu />
        </div>

        {/* Right */}
        <div className="flex-1 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
  ); 
}
