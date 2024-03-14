import { getRelativeTimeString } from "@/app/utils/get-relative-time";
import { ReactNode } from "react";

type TechnologyCardProps = {
    tech: {
        icon: ReactNode;
        name: string;
        startDate: string;
    };
};

export const TechnologyCard = ({ tech }: TechnologyCardProps) => {
    const relativeTime = getRelativeTimeString(
        new Date(tech.startDate),
        "pt-BR"
    ).replace("há ", "");
    return (
        <div className="flex items-center flex-col p-2 rounded-lg bg-gray-600/20 text-gray-500 hover:text-[#E64A19] hover:bg-gray-600/30 transition-all">
            <div className="flex items-center flex-col">
                <p>{tech.name}</p>
                <span className="text-[44px]">{tech.icon}</span>
            </div>
            <span>{relativeTime} de experiência</span>
        </div>
    );
};
