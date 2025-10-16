import Link from "next/link";
import menuItems from "./menuItems";
import Image from "next/image";

const Menu = () => {
    return (
        <div className="mt-4 text-small">
            {
                menuItems.map((item) => (
                    <div className="flex flex-col gap-2" key={item.title}>
                        <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
                        {item.items.map((iitem) => (
                            <Link href={iitem.href} key={iitem.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 ">
                                <Image src={iitem.icon} alt={iitem.label} width={32} height={32} />
                                <span className="hidden lg:block">{iitem.label}</span>
                            </Link>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;