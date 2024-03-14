import { cn } from "@/app/lib/utils";

type SectionTitleProps = {
    title: string;
    subtitle: string;
    className?: string;
};

export const SectionTitle = ({
    title,
    subtitle,
    className,
}: SectionTitleProps) => {
    return (
        <div
            className={cn(
                "flex items-center flex-col leading-none mb-[60px]",
                className
            )}
        >
            <h3 className="text-[34px] font-medium text-[#E64A19]">{title}</h3>
            <span className="text-[14px] text-[#cccccc]">{subtitle}</span>
        </div>
    );
};
