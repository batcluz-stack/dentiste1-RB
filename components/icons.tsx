export const Tooth = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M7 2c-3.5 0-4 3.5-4 6 0 5.5 2 9 3 13 0.5 2.5 2.5 2 3.5 1 1-1 1.5-3 2.5-3s1.5 2 2.5 3c1 1 3 1.5 3.5-1 1-4 3-7.5 3-13 0-2.5-0.5-6-4-6-2 0-3 1.5-4 1.5S9 2 7 2z" />
        <path d="M15 4c1 0 2 1 2.5 2.5" strokeOpacity="0.5" />
    </svg>
);

export const Implant = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        {/* Implant : Partie vis (racine artificielle) */}
        <path d="M12 22v-8" />
        <path d="M9 19l6-2" />
        <path d="M9 16l6-2" />
        <path d="M9 22l6-2" />

        {/* Implant : Couronne sur pivot */}
        <path d="M7 2c-2 0-3 2-3 5 0 4 2 6 3 7h10c1-1 3-3 3-7 0-3-1-5-3-5s-2 1-3 1c-1 0-2-1-3-1s-2 1-4 0z" />
        <path d="M12 9v5" strokeOpacity="0.5" strokeDasharray="2 2" />
    </svg>
);
