import { HeroSection } from "./components/pages/home/hero-section";
import { PersonalInfoCard } from "./components/pages/home/personal-info-card";
import { TechnicalKnowledge } from "./components/pages/home/technical-knowledge";

export default async function Page() {
    return (
        <>
            <HeroSection />
            <PersonalInfoCard />
            <TechnicalKnowledge />
        </>
    );
}
