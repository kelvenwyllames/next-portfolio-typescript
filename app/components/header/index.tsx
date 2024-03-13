"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-item";

const NAV_ITENS = [
    {
        label: "Ínicio",
        href: "/",
    },
    {
        label: "Projetos",
        href: "/projects",
    },
    {
        label: "Contato",
        href: "/contact",
    },
];
export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-around">
                <Link href="/">
                    <Image
                        width={64}
                        height={64}
                        src="/images/small-logotipo.svg"
                        alt="logotipo KW Web Design"
                    />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITENS.map((item) => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </nav>
            </div>
        </header>
    );
};
