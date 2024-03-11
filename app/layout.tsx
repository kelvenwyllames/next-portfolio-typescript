import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kelven Wyllames | Web Design",
    description: "Portfólio | Desenvolvedor Front-End",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={archivo.className}>
            <body className="bg-[#111111] text-gray-100 overflow-x-hidden">
                <Header />
                {children}
            </body>
        </html>
    );
}
