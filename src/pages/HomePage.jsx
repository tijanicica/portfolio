import {
    ChevronDownIcon,
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import CloudBackground from "../components/CloudBackground.jsx";

const HomePage = () => {
    return (
        <div className="relative w-full h-screen">
            <CloudBackground />
        <div className="flex flex-col m-0 min-w-[320px] max-w-[80%] min-h-screen mx-auto justify-center items-center mt-25 sm:mt-20 relative">


            <div className="hidden sm:block absolute top-[10%] left-0 flex flex-col items-center z-10">
                <span className="text-sm md:text-base italic " style={{ fontFamily: "Montserrat" }}>2021</span>
                <div className="w-[2px] flex-grow bg-navbar my-2" style={{ height: '50vh' }}></div>
                <span className="text-sm md:text-base italic" style={{ fontFamily: "Montserrat" }}>Present</span>
            </div>


            <div className="w-[90%] min-h-[51vh] flex flex-col justify-center p-4 md:p-8 gap-2 items-center">
                <h2 className="font-light text-[1rem] md:text-[1.25rem] uppercase tracking-widest" style={{ fontFamily: "Montserrat" }}>
                    Welcome to my
                </h2>

                <h3
                    className="font-extralight text-[var(--color-portfolio)] leading-none
                        text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] -tracking-tighter" style={{ fontFamily: "Montserrat" }}
                >
                    PORTFOLIO
                </h3>

                <h4 className="font-light text-[var(--color-welcome)] text-[1rem] md:text-[1.25rem] uppercase tracking-widest md:text-left" style={{ fontFamily: "Montserrat" }}>
                    by
                </h4>

                <h5
                    className="font-light text-[var(--color-welcome)] text-[1.75rem] md:text-[2.5rem] tracking-widest"
                    style={{ fontFamily: "Parisienne, cursive" }}
                >
                    Tijana
                </h5>
            </div>



            <div className="flex flex-col sm:flex-row self-start justify-between w-full items-center sm:items-end pt-20">
                <div className="order-2 sm:order-1 flex flex-col sm:flex-row items-center text-center sm:items-start gap-10 bg-opacity-5 backdrop-blur w-full sm:w-auto justify-center lg:ml-0 md:ml-0 lg:pl-0 md:pl-0 pt-20 ">
                    <a href="https://www.github.com/tijanicica">
                        <button className="flex items-center text-welcome rounded-2xl cursor-pointer  text-sm  bg-background bg-opacity-50 link-button hover:text-[var(--color-portfolio)] pl-0  justify-center sm:justify-start sm:w-auto">
                            <GitHubLogoIcon width="25px" height="25px"  />
                            <span className="p-3 font-thin" style={{ fontFamily: "Montserrat" }}>GitHub</span>
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/tijana-petrovic-b8417a321/">
                        <button className="flex items-center text-welcome rounded-2xl cursor-pointer  text-sm   bg-background bg-opacity-50 link-button hover:text-[var(--color-portfolio)] pl-0  justify-center sm:justify-start sm:w-auto ">
                            <LinkedInLogoIcon width="25px" height="25px" />
                            <span className="p-3 font-thin" style={{ fontFamily: "Montserrat" }}>LinkedIn</span>
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/tijana-petrovic-b8417a321/">
                        <button className="flex items-center text-welcome rounded-2xl cursor-pointer  text-sm   bg-background bg-opacity-50 link-button hover:text-[var(--color-portfolio)] pl-0  justify-center sm:justify-start sm:w-auto ">
                            <EnvelopeClosedIcon width="25px" height="25px" />
                            <span className="p-3 font-thin" style={{ fontFamily: "Montserrat" }}>Email</span>
                        </button>
                    </a>
                </div>

                <div
                    className=" order-1 sm:order-2
                    text-center
                    lg:left-auto lg:pr-4  lg:translate-x-0 sm:w-auto pt-20
                "
                >
                    <p className="tracking-widest text-[var(--color-welcome)] text-sm " style={{ fontFamily: "Montserrat" }}>
                        just a girl in a tech world
                    </p>
                    <p className="tracking-widest text-[var(--color-navbar)] text-sm fadeInUp" style={{ fontFamily: "Montserrat" }}>
                        scroll for more
                    </p>
                </div>
            </div>
        </div>
            </div>
    );
};

export default HomePage;