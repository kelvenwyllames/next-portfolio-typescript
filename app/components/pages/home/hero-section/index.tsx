import { Button } from "@/app/components/button";
import { SocialNetworkLinks } from "@/app/components/social-network-links";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
    TbBrandGithub,
    TbBrandLinkedin,
    TbBrandInstagram,
} from "react-icons/tb";

export const HeroSection = () => {
    const socialLinksData = [
        {
            icon: <TbBrandGithub />,
            url: "https://github.com/kelvenwyllames",
        },
        {
            icon: <TbBrandInstagram />,
            url: "https://www.instagram.com/kelvenwyllames/",
        },
        {
            icon: <TbBrandLinkedin />,
            url: "https://www.linkedin.com/in/kelvenwyllames/",
        },
    ];
    return (
        <section className="py-[250px] bg-hero-image bg-cover bg-no-repeat">
            <div className="w-full relative flex justify-center items-center">
                <div className="w-[1024px] max-[1550px]:flex max-[1550px]:items-center max-[1550px]:flex-col max-[1550px]:text-center max-[1550px]:m-4 text-gray-50">
                    <h1 className="max-w-[650px] text-clamp-h1-hero font-semibold leading-none">
                        Transformando visões em experiência{" "}
                        <span className="text-[#E65100]">
                            digitais memoráveis.
                        </span>
                    </h1>
                    <p className="max-w-[600px] my-[5px] font-light leading-[25px] text-clamp-p-hero">
                        Dê vida à sua presença online com design que inspira e
                        funcionalidades que cativam. Estou aqui para transformar
                        suas ideias em uma jornada digital incrível!
                    </p>
                    <div className="mt-9 lg:flex lg:items-center lg:gap-5 lg:flex-row sm:flex-col">
                        <Button className="shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>
                        <div className="flex items-center justify-center gap-2 text-gray-500 text-2xl m-2">
                            {socialLinksData.map((link, index) => (
                                <SocialNetworkLinks
                                    key={index}
                                    icon={link.icon}
                                    url={link.url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    className="absolute right-[0%] hidden"
                    width={500}
                    height={300}
                    src="/images/logotipo.svg"
                    alt="logotipo KW Web Design"
                />
            </div>
        </section>
    );
};
