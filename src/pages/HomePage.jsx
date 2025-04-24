import plane from "../assets/plane.jpeg"

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
                    lg:left-auto lg:right-20 lg:bottom-25 lg:pr-4 lg:translate-x-0 lg:text-center
                "
            >
                <p className="tracking-widest text-[var(--color-welcome)] text-sm ">
                    just a girl in a tech world
                </p>
                <p className="tracking-widest text-[var(--color-navbar)] text-sm">
                    scroll for more
                </p>
            </div>


        </div>
    );
};

export default HomePage;
