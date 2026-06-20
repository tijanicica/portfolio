import CloudBackground from "../components/CloudBackground.jsx";
import girl from "../assets/girl.png"
import {GitHubLogoIcon} from "@radix-ui/react-icons";

const AboutPage = () => {
    return (

        <div id="About"  className=" relative w-full h-screen">
            <div className="bg-[#dec5ba]">
                <CloudBackground />
            </div>

            <div className="flex flex-col m-0 w-full min-h-screen px-10  sm:pt-20 bg-[#dec5ba]">
                <div className="flex flex-row items-center justify-start h-full gap-10">
                    <div className=" hidden lg:block md:block -mt-20" >
                        <img alt="girl" src={girl} className="w-[250px] max-w-[350px]" />
                    </div>

                    <div className="text-white mb-30 flex-col gap-10 mt-20 sm:mt-0">
                        <h1 className="font-thin tracking-wide  text-4xl lowercase " style={{ fontFamily: "Parisienne, cursive" }}>hello,</h1>
                        <h2 className="font-thin tracking-wides text-2xl"  >
                            I'm Tijana.
                        </h2>
                        <h3 className="font-thin tracking-wides text-xl italic" style={{ fontFamily: "Montserrat" }}>
                            Information engineering student and creative mind in a technical world.
                        </h3>
                    </div>
                </div>
                <div className="flex justify-center items-center px-1 sm:px-6 md:px-10">
                    <div className="flex justify-center text-[var(--color-about)] p-6 sm:p-10 lg:p-20 -mt-20 lg:-mt-40 w-full sm:w-[95%] max-w-5xl rounded-[30px] sm:rounded-[50px] lg:rounded-[70px] opacity-90 cloud-shape ">
                        <p className="text-sm sm:text-base md:text-base tracking-wide font-medium leading-relaxed" style={{ fontFamily: "Montserrat" }}>
                            Master’s student at the Faculty of Technical Sciences, University of Novi Sad, with Bachelor’s degree in Information Engineering,
                            currently specializing in the Signal Processing module. My academic focus centers on data science, data processing, analytics,
                            machine learning, and artificial intelligence. My approach to technical challenges relies on critical analysis and logical
                            problem-solving.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10 z-10">
                    <a
                        href="/TijanaPetrovicCV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex lg:w-1/8 text-center items-center text-welcome rounded-2xl cursor-pointer text-sm bg-button bg-opacity-50 link-button hover:text-[var(--color-portfolio)] pl-0 justify-center mb-10"
                    >
                        <span className="p-3 font-thin" style={{ fontFamily: 'Montserrat' }}>
                        Download my CV
                        </span>
                    </a>
                </div>

            </div>
        </div>

















    );
}
export default AboutPage;