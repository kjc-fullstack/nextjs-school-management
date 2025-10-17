import Link from "next/link";
import menuItems from "./menuItems";
import Image from "next/image";
import { role } from "@/lib/data";

const Menu = () => {
    return (
        <div className="mt-4 text-small">
            {
                menuItems.map((item) => (
                    <div className="flex flex-col gap-2" key={item.title}>
                        <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
                        {item.items.map((iitem) =>  {
                                if(iitem.visible.includes(role)) {
                                return (
                                <Link href={iitem.href} key={iitem.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-kjcSkyLight">
                                    <Image src={iitem.icon} alt={iitem.label} width={20} height={20} />
                                    <span className="hidden lg:block text-sm">{iitem.label}</span>
                                </Link>
                                 )
                                }
                        }
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;