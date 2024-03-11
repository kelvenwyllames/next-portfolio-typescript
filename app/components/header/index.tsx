import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <Image
                        width={58}
                        height={49}
                        src="/images/logotipo.svg"
                        alt="logotipo KW Web Design"
                    />
                </Link>
            </div>
        </header>
    );
};
