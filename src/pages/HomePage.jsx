import laptop from "../assets/lapsi.png"
import { ChevronDownIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';


const HomePage = () => {
    return (
        <div className="font-display min-w-[320px] max-w-[80%] min-h-screen m-0 flex items-center justify-center lg:justify-start mx-auto">


            <div className="fixed top-1/2 left-10 transform -translate-y-1/2 flex flex-col items-center justify-between h-1/2 italic z-10">
                <span className="text-sm md:text-base">2021</span>
                <div className="w-[2px] flex-grow bg-navbar my-2"></div>
                <span className="text-sm md:text-base">Present</span>
            </div>


            <div className="min-h-screen flex flex-col items-center justify-center relative">


                <div className="w-[90%] min-h-[51vh] flex flex-col justify-center p-4 md:p-8 gap-2 items-center">

                    <h2 className="font-light text-[1rem] md:text-[1.25rem] uppercase tracking-widest">
                        Welcome to my
                    </h2>

                    <h3 className="font-extralight text-[var(--color-portfolio)] leading-none
                                   text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] -tracking-tighter">
                        PORTFOLIO
                    </h3>

                    <h4 className="font-light text-[var(--color-welcome)] text-[1rem] md:text-[1.25rem] uppercase tracking-widest md:text-left">
                        by
                    </h4>

                    <h5
                        className="font-light text-[var(--color-welcome)] text-[1.75rem] md:text-[2.5rem] tracking-widest"
                        style={{ fontFamily: 'Parisienne, cursive' }}
                    >
                        Tijana
                    </h5>

                </div>
            </div>

            <div
                className="
                    fixed bottom-6 left-1/2 -translate-x-1/2 text-center
                    lg:left-auto lg:right-3 lg:bottom-20 lg:pr-4 lg:translate-x-0 lg:text-center
                "
            >


               {/* <svg
                    className="w-80 h-80 animate-draw hidden lg:block mb-2"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M200 0 C160 40, 180 100, 100 100 C20 100, 60 180, 30 190"
                        stroke="#5c5550"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <polygon
                        points="30,190 40,185 35,180"
                        stroke="#5c5550"
                        fill="none"
                        strokeWidth="2"
                    />
                </svg>*/}
                <p className="tracking-widest text-[var(--color-welcome)] text-sm ">
                    just a girl in a tech world
                </p>
                <p className="tracking-widest text-[var(--color-navbar)] text-sm fadeInUp">
                    scroll for more
                </p>


            </div>

            <div className='social flex flex-col flex-wrap  justify-evenly items-center  bg-background bg-opacity-5 backdrop-blur p-7 hidden lg:block mb-20'>
                <a href="https://www.github.com/tijanicica" className='flex items-center gap-3'>
                    <button  className='text-portfolio rounded-2xl px-10 text-sm py-5 my-3 bg-background bg-opacity-50 link-button hover:text-[var(--color-welcome)] w-25'>
                    <GitHubLogoIcon width="25px" height="25px" />
                        <span className='p-3 font-thin'>GitHub</span>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/tijana-petrovic-b8417a321/">
                    <button  className='text-portfolio rounded-2xl px-10 text-sm py-5 my-3 bg-background bg-opacity-50 link-button hover:text-[var(--color-welcome)] w-25'>

                    <LinkedInLogoIcon width="25px" height="25px" />
                        <span className='p-3 font-thin'>LinkedIn</span>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/tijana-petrovic-b8417a321/">
                    <button  className='text-portfolio rounded-2xl px-10 text-sm py-5 my-3 bg-background bg-opacity-50 link-button hover:text-[var(--color-welcome)] w-25'>
                        <EnvelopeClosedIcon width="25px" height="25px" />
                        <span className='p-3 font-thin'>Email</span>
                    </button>
                </a>

            </div>

        </div>
    );
};

export default HomePage;
