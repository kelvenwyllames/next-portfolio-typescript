import { ReactNode } from "react";

type SocialNetworkLinksProps = {
    url: string;
    icon: ReactNode;
};

export const SocialNetworkLinks = ({ url, icon }: SocialNetworkLinksProps) => {
    return (
        <a
            className="hover:text-gray-100 transition-colors"
            href={url}
            target="_blank"
        >
            {icon}
        </a>
    );
};
