import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
}

const testimonials: TestimonialProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "Michael Carter",
        userName: "@michael_c",
        comment:
            "Exceptional service! They repaired my car quickly and at a great price. Highly recommended!",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Sophia Lee",
        userName: "@sophia_lee",
        comment:
            "Finding genuine auto parts has never been easier. Their team helped me pick the perfect parts for my car!",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "James Anderson",
        userName: "@james_auto",
        comment:
            "The roadside assistance was a lifesaver! They arrived fast and got my car running in no time.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Emma Rodriguez",
        userName: "@emma_r",
        comment:
            "Great customer service! They explained everything clearly and didn’t try to upsell unnecessary repairs.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "David Wilson",
        userName: "@david_w",
        comment:
            "Top-notch customization services! My car looks and drives better than ever. Will definitely be back!",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Olivia Martin",
        userName: "@olivia_m",
        comment:
            "Honest pricing and expert mechanics! They genuinely care about their customers. A trusted auto service provider!",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold">
                Discover Why
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    People Love{" "}
                </span>
                Our Company
            </h2>

            <p className="text-xl text-muted-foreground pt-4 pb-8">
                Join us today and see what our customers have to say about us!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                {testimonials.map(
                    ({ image, name, userName, comment }: TestimonialProps) => (
                        <Card
                            key={userName}
                            className="max-w-md md:break-inside-avoid overflow-hidden"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar>
                                    <AvatarImage alt="" src={image} />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                    <CardTitle className="text-lg">
                                        {name}
                                    </CardTitle>
                                    <CardDescription>
                                        {userName}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent>{comment}</CardContent>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
