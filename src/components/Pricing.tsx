import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

interface PricingProps {
    title: string;
    popular: PopularPlanType;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}
const pricingList: PricingProps[] = [
    {
        title: "Basic Service",
        popular: 0,
        price: 49, // Adjust price as per your business
        description:
            "Essential maintenance to keep your vehicle running smoothly.",
        buttonText: "Book Now",
        benefitList: [
            "Oil change & filter replacement",
            "Basic engine diagnostics",
            "Tire pressure check",
            "Standard customer support",
            "Exterior car wash",
        ],
    },
    {
        title: "Premium Care",
        popular: 1,
        price: 99, // Adjust price as per your business
        description:
            "Comprehensive service for peak vehicle performance and longevity.",
        buttonText: "Get Started",
        benefitList: [
            "All Basic Service benefits",
            "Brake inspection & adjustment",
            "Battery check & replacement",
            "Premium customer support",
            "Interior & exterior detailing",
        ],
    },
    {
        title: "Ultimate Package",
        popular: 0,
        price: 199, // Adjust price as per your business
        description:
            "Full-service care for maximum performance and safety for our customer.",
        buttonText: "Contact Us",
        benefitList: [
            "All Premium Care benefits",
            "Full vehicle inspection",
            "Suspension & alignment check",
            "Roadside assistance",
            "Priority customer support",
        ],
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Explore
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    Our{" "}
                </span>
                Services
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                These are the plans that we offer to our customers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingList.map((pricing: PricingProps) => (
                    <Card
                        key={pricing.title}
                        className={
                            pricing.popular === PopularPlanType.YES
                                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                                : ""
                        }
                    >
                        <CardHeader>
                            <CardTitle className="flex item-center justify-between">
                                {pricing.title}
                                {pricing.popular === PopularPlanType.YES ? (
                                    <Badge
                                        variant="secondary"
                                        className="text-sm text-primary"
                                    >
                                        Most popular
                                    </Badge>
                                ) : null}
                            </CardTitle>
                            <div>
                                <span className="text-3xl font-bold">
                                    ${pricing.price}
                                </span>
                                <span className="text-muted-foreground">
                                    {" "}
                                    /month
                                </span>
                            </div>

                            <CardDescription>
                                {pricing.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Button className="w-full">
                                {pricing.buttonText}
                            </Button>
                        </CardContent>

                        <hr className="w-4/5 m-auto mb-4" />

                        <CardFooter className="flex">
                            <div className="space-y-4">
                                {pricing.benefitList.map((benefit: string) => (
                                    <span key={benefit} className="flex">
                                        <Check className="text-green-500" />{" "}
                                        <h3 className="ml-2">{benefit}</h3>
                                    </span>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
