import CloudBackground from "../components/CloudBackground.jsx";
import {Card} from "../ui/Card.jsx";
import {toast} from "react-toastify";

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

                <div className="flex flex-row items-start justify-start bg-[#ede5dd] opacity-90  backdrop-blur-lg flex-grow mt-10 mb-20 ml-10 mr-10 p-10 z-10 " style={{ fontFamily: "Montserrat" }}>
                    <div>
                        <h1 className="text-[#5c5550] text-xl " >Contact me</h1>
                        <br/>

                        <h2 className="text-[#5c5550] text-l  underline" >Email
                        </h2>

                        <a title="Copy address" className="text-[#736b66] text-sm opacity-80 cursor-pointer hover:text-[#b9aba9] " onClick={() => {
                            navigator.clipboard.writeText("tijanapetrovicns03@gmail.com");
                            toast.success("Email copied to clipboard!", {
                                icon: false,
                            })
                        }}>tijanapetrovicns03@gmail.com</a>

                        <br/>
                        <br/>

                        <h2 className="text-[#5c5550] text-l  underline" >Phone number
                        </h2>


                        <a title="Copy number" className="text-[#736b66] text-sm opacity-80 cursor-pointer hover:text-[#b9aba9] " onClick={() => {
                            navigator.clipboard.writeText("tijanapetrovicns03@gmail.com");
                            toast.success("Number copied to clipboard!", {
                                icon: false,
                            })
                        }}>+381654695389</a>

                        <br/>
                        <br/>

                        <h2 className="text-[#5c5550] text-l  underline" >Based in
                        </h2>


                        <a href="https://www.google.com/maps/place/Novi+Sad/@45.2713329,19.6846336,11z/data=!3m1!4b1!4m6!3m5!1s0x475b10613de93455:0xb6f7d683724fe28!8m2!3d45.2396085!4d19.8227056!16zL20vMHN3d24?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" className="text-[#736b66] hover:text-[#b9aba9] text-sm opacity-80 cursor-pointer"
                        >Novi Sad, Serbia</a>



                    </div>
                    </div>
                </div>

        </div>
    );
};

export default ContactPage;
