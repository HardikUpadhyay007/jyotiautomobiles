import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/cube-leg.png";
import man from "../assets/man.png";
interface ServiceProps {
    title: string;
    description: string;
    icon: JSX.Element;
}
const serviceList: ServiceProps[] = [
    {
        title: "Personalized Consultation",
        description:
            "We understand your needs! Our experts provide tailored advice on repairs, maintenance, and the best parts for your vehicle.",
        icon: <></>,
    },
    {
        title: "Customer-Centric Support",
        description:
            "Our dedicated support team is always ready to assist you with queries, service bookings, and expert recommendations.",
        icon: <></>,
    },
    {
        title: "Transparent Pricing",
        description:
            "No hidden costs! We provide clear estimates and cost breakdowns to ensure you get the best value for your money.",
        icon: <></>,
    },
];

export const Services = () => {
    return (
        <section id="services" className="container py-24 sm:py-32">
            <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Client-Centric{" "}
                        </span>
                        Services
                    </h2>

                    <p className="text-muted-foreground text-xl mt-4 mb-8 ">
                        Driven by Care, Powered by Trust - Your Satisfaction is
                        Our Priority!
                    </p>

                    <div className="flex flex-col gap-8">
                        {serviceList.map(
                            ({ icon, title, description }: ServiceProps) => (
                                <Card key={title}>
                                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                                        <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                                            {icon}
                                        </div>
                                        <div>
                                            <CardTitle>{title}</CardTitle>
                                            <CardDescription className="text-md mt-2">
                                                {description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            )
                        )}
                    </div>
                </div>

                <img
                    src={man}
                    className="w-[300px] bg-[hsl(20,14.29%,4.12%)] md:w-[500px] lg:w-[600px] object-contain"
                    alt="About services"
                />
            </div>
        </section>
    );
};
