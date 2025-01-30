// import { LogoIcon } from "./Icons";
// import logo from "../assets/logo.svg";
// export const Footer = () => {
//     return (
//         <footer id="footer">
//             <hr className="w-11/12 mx-auto" />

//             <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
//                 <div className="col-span-full  xl:col-span-2">
//                     <a
//                         rel="noreferrer noopener"
//                         href="/"
//                         className="font-bold text-xl flex"
//                     >
//                         <img
//                             className="w-30 mr-4 h-20 bg-transparent hidden sm:block"
//                             src={logo}
//                         ></img>
//                         <p className="mt-5 text-2xl">Jyoti Automobiles </p>
//                     </a>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                     <h3 className="font-bold text-lg">Follow US</h3>
//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Github
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Twitter
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Dribbble
//                         </a>
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                     <h3 className="font-bold text-lg">Platforms</h3>
//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Web
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Mobile
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Desktop
//                         </a>
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                     <h3 className="font-bold text-lg">About</h3>
//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Features
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Pricing
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             FAQ
//                         </a>
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                     <h3 className="font-bold text-lg">Community</h3>
//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Youtube
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Discord
//                         </a>
//                     </div>

//                     <div>
//                         <a
//                             rel="noreferrer noopener"
//                             href="#"
//                             className="opacity-60 hover:opacity-100"
//                         >
//                             Twitch
//                         </a>
//                     </div>
//                 </div>
//             </section>
//         </footer>
//     );
// };

// import div from "./animation-container";
import { Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
const footerLink = [
    {
        name: "About",
        link: "#",
    },
    {
        name: "Contact",
        link: "3",
    },
    {
        name: "FAQ",
        link: "#",
    },
    {
        name: "Privacy Policy",
        link: "#",
    },
    {
        name: "Terms and Conditions",
        link: "#",
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative border-t border-border pt-6 pb-8 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div> */}

            <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
                <div className="mt-8 md:mt-0">
                    <a href="/" className="flex items-center gap-2">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <img src={logo} alt="" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <p
                                className="text-xl font-semibold  text-primary tracking-wide"
                                style={{ fontVariationSettings: '"opsz" 32' }}
                            >
                                Jyoti Automobiles
                            </p>
                        </div>
                    </a>
                </div>

                <div className="w-full md:w-auto">
                    <nav className="flex flex-wrap justify-center gap-4 text-center md:justify-end">
                        {footerLink.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="text-xs leading-5 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://youtube.com/@zenityteam?si=3FIrYQTbgh0m3UKA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Youtube</span>
                            <Youtube className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>

            <div className="mt-8 border-t border-border/40 pt-4 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <p className="text-xs leading-5 text-muted-foreground text-center">
                        &copy; {currentYear} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
