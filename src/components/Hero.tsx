import { Button } from "./ui/button";
import hero2 from "../assets/hero2.png";
export const Hero = () => {
    return (
        <section className="container -mb-10 grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                            Welcome
                        </span>{" "}
                        to<br></br>
                    </h1>
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                            Jyoti
                        </span>{" "}
                        Automobiles
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Build your React landing page effortlessly with the required
                    sections to your project.
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-1/3">Get Started</Button>

                    {/* <a
                        rel="noreferrer noopener"
                        href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        Github Repository
                        <GitHubLogoIcon className="ml-2 w-5 h-5" />
                    </a> */}
                </div>
            </div>

            {/* Hero cards sections */}
            {/* <div className="z-10">
        <HeroCards />
      </div> */}
            <img src={hero2} className=""></img>

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};
