type TechnologyBadgeProps = {
    name: string;
};

export const TechnologyBadge = ({ name }: TechnologyBadgeProps) => {
    return (
        <span className="text-orange-600 bg-orange-900/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    );
};
