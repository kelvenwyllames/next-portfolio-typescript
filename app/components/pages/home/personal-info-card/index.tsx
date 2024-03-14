import { SectionTitle } from "@/app/components/section-title";
import { SocialNetworkLinks } from "@/app/components/social-network-links";
import {
    TbBrandGithub,
    TbBrandInstagram,
    TbBrandLinkedin,
} from "react-icons/tb";

export const PersonalInfoCard = () => {
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
        <section className="py-[100px] flex items-center justify-center flex-col">
            <SectionTitle
                subtitle="Conheça minha jornada e paixão pelo mundo digital."
                title="Sobre Mim."
            />
            <div className="lg:w-[1000px] lg:flex lg:justify-between lg:items-center gap-5 mx-5 border-2 border-[#E65100] border-solid p-[10px] bg-about-image bg-cover bg-no-repeat text-gray-50">
                <div className="lg:w-[380px] h-[380px] w-full bg-profile-image bg-cover bg-no-repeat"></div>
                <div className="flex justify-around flex-col gap-[57px]">
                    <div>
                        <h3 className="text-[34px] font-semibold text-[#E64A19]">
                            Kelven Wyllames
                        </h3>
                        <p className="font-light text-gray-50/40">
                            Desenvolvedor Full-Stack
                        </p>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <p className="max-w-[549px] leading-[24px] font-light">
                            s simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into
                            electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <div className="w-full flex items-center justify-end gap-2 text-gray-500 text-2xl">
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
            </div>
        </section>
    );
};
