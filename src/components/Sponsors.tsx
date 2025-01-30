import { Radar } from "lucide-react";

interface SponsorProps {
    icon: JSX.Element;
    name: string;
}

const sponsors: SponsorProps[] = [
    {
        icon: <Radar size={34} />,
        name: "TATA MOTORS",
    },
    {
        icon: <Radar size={34} />,
        name: "MAHINDRA & MAHINDRA",
    },
    {
        icon: <Radar size={34} />,
        name: "HUYNDAI",
    },
    {
        icon: <Radar size={34} />,
        name: "MARUTI SUZUKI",
    },
    {
        icon: <Radar size={34} />,
        name: "TOYOTA",
    },
    {
        icon: <Radar size={34} />,
        name: "FORD",
    },
];

export const Sponsors = () => {
    return (
        <section id="sponsors" className="container pt-2 -mt-3 sm:py-32">
            <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
                Brands That Trust Us
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {sponsors.map(({ icon, name }: SponsorProps) => (
                    <div
                        key={name}
                        className="flex items-center gap-1 text-muted-foreground/60"
                    >
                        <span>{icon}</span>
                        <h3 className="text-xl  font-bold">{name}</h3>
                    </div>
                ))}
            </div>
            <h2 className="text-center mt-5 text-muted-foreground text-md lg:text-xl font-bold mb-8 ">
                And More....
            </h2>
        </section>
    );
};
