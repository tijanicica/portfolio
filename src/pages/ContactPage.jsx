import CloudBackground from "../components/CloudBackground.jsx";
import {Card} from "../ui/Card.jsx";

const ContactPage = () => {
    return (
        <div id="Contact" className="relative w-full min-h-screen mt-20">
            <div className="absolute inset-0 z-0">
                <CloudBackground />
            </div>

            <div className="flex flex-col w-full min-h-screen px-10 sm:pt-20 relative z-10">
                {/* Top Heading Section */}
                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="text-white flex flex-col gap-10 mt-20 xs:mt-30">
                        <h1
                            className="font-extralight tracking-wide text-5xl lowercase"
                            style={{ fontFamily: "Parisienne, cursive" }}
                        >
                            let's work together
                        </h1>
                    </div>
                </div>

                <Card className="flex flex-row items-start justify-start   backdrop-blur-lg flex-grow mt-10 mb-20 ml-10 mr-10 p-10 z-10 ">
                    <div>

                    </div>
                    </Card>
                </div>

        </div>
    );
};

export default ContactPage;
