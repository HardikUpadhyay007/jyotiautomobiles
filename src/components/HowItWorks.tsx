import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}
const features: FeatureProps[] = [
    {
        icon: <></>,
        title: "Expert Repairs",
        description:
            "Our certified mechanics provide top-quality repair and maintenance services to keep your vehicle running smoothly.",
    },
    {
        icon: <></>,
        title: "Genuine Parts",
        description:
            "We offer high-quality, genuine, and aftermarket automobile parts to ensure the best performance for your vehicle.",
    },
    {
        icon: <></>,
        title: "Quick & Reliable Service",
        description:
            "We value your time! Our efficient service ensures quick turnaround times without compromising on quality.",
    },
    {
        icon: <></>,
        title: "Trust & Transparency",
        description:
            "No hidden costs, no unnecessary repairs! We believe in honest pricing and keeping our customers informed.",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                What{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    We{" "}
                </span>
                Offer{" "}
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                We offer a great range of services and genuine parts to keep
                your trust
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card key={title} className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
