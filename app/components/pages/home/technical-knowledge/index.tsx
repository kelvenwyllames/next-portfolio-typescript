import { SectionTitle } from "../../../section-title";
import { TechnologyCard } from "./technology-card";
import { TbBrandNextjs } from "react-icons/tb";

export const TechnicalKnowledge = () => {
    return (
        <section className="py-[100px] flex items-center justify-center flex-col">
            <SectionTitle
                subtitle="Transformando códigos em experiências visuais."
                title="Conhecimentos"
            />

            <div className="container px-[15px] grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <TechnologyCard
                        key={index}
                        tech={{
                            icon: <TbBrandNextjs />,
                            name: "Next.js",
                            startDate: "2021-01-01",
                        }}
                    />
                ))}
            </div>
        </section>
    );
};
