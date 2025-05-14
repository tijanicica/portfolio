import CloudBackground from "../components/CloudBackground.jsx";
import girl from "../assets/girl.png"
import {GitHubLogoIcon} from "@radix-ui/react-icons";

const AboutPage = () => {
    return (

        <div id="About"  className=" relative w-full h-screen">
            <CloudBackground />
            <div className="flex flex-col m-0 w-full min-h-screen px-10 sm:pt-20">
                <div className="flex flex-row items-center justify-start h-full gap-10">
                    <div className=" hidden lg:block md:block -mt-20" >
                        <img alt="girl" src={girl} className="w-[250px] max-w-[350px]" />
                    </div>

                    <div className="text-white mb-30 flex-col gap-10 mt-43 sm:mt-0">
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
                            I'm a final year student at the Faculty of Technical Sciences in Novi Sad, with a strong passion for working with data and understanding how things function under the hood. I enjoy exploring the intersection of mathematics, statistics, and data engineering, and I'm equally drawn to both backend and frontend development — building complete solutions from logic to interface.

                            I believe that progress comes from a mindset of continuous learning, so I actively engage in hands-on projects, self-study, and collaborative environments where I can learn from experienced peers and mentors.

                            Whether it's analyzing data to uncover insights, coding robust applications, or thinking outside the box to solve complex problems, I thrive in roles that challenge me and help me grow. I'm excited to keep learning, building, and contributing to meaningful projects that make an impact.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10 z-10">
                    <a
                        href="/TijanaPetrovicCV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex lg:w-1/8 text-center items-center text-welcome rounded-2xl cursor-pointer text-sm bg-button bg-opacity-50 link-button hover:text-[var(--color-portfolio)] pl-0 justify-center"
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