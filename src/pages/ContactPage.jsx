import CloudBackground from "../components/CloudBackground.jsx";
import {Card} from "../ui/Card.jsx";
import {toast} from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";

const ContactPage = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const email = formData.get("from_email")?.trim();
        const name = formData.get("name")?.trim();
        const subject = formData.get("subject")?.trim();
        const message = formData.get("message")?.trim();

        if (!email || !name || !subject || !message) {
            toast.error("All fields are required.");
            return;
        }

        emailjs
            .sendForm(
                'service_mysu06o',
                'template_evx9rug',
                form.current,
                'nOyBIZKhQKgNx2lLu'
            )
            .then(
                (result) => {
                    toast.success("Message sent successfully!", {
                        icon: false,
                    });
                    console.log(result.text);
                },
                (error) => {
                    toast.error("Failed to send message.");
                    console.log(error.text);
                }
            );
    };



    return (
        <div id="Contact" className="relative w-full min-h-screen mt-20">
            <div className="absolute inset-0 z-0">
                <CloudBackground/>
            </div>

            <div className="flex flex-col w-full min-h-screen px-10 sm:pt-20 relative z-10">
                {/* Top Heading Section */}
                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="text-white flex flex-col gap-10 mt-20 xs:mt-30">
                        <h1
                            className="font-extralight tracking-wide text-5xl lowercase"
                            style={{fontFamily: "Parisienne, cursive"}}
                        >
                            let's work together
                        </h1>
                    </div>
                </div>

                <div
                    className="flex flex-row sm:items-start items-center  xs:justify-start justify-center  bg-[#ede5dd] opacity-90  backdrop-blur-lg flex-grow mt-10 mb-20 sm:ml-10 sm:mr-10 p-10 z-10 "
                    style={{fontFamily: "Montserrat"}}>

                    <div className="w-full sm:w-1/2 pr-10 -ml-10  xs:-ml-0">

                        <div>
                            <h1 className="text-[#3d3a38] text-xl ">Contact me</h1>
                            <br/>

                            <h2 className="text-[#3d3a38] text-l  underline">Email
                            </h2>

                            <a title="Copy address"
                               className="text-[#736b66] text-sm  cursor-pointer hover:text-[#b9aba9] " onClick={() => {
                                navigator.clipboard.writeText("tijanapetrovicns03@gmail.com");
                                toast.success("Email copied to clipboard!", {
                                    icon: false,
                                })
                            }}>tijanapetrovicns03@gmail.com</a>

                            <br/>
                            <br/>

                            <h2 className="text-[#3d3a38] text-l  underline">Phone number
                            </h2>


                            <a title="Copy number"
                               className="text-[#736b66] text-sm cursor-pointer hover:text-[#b9aba9] " onClick={() => {
                                navigator.clipboard.writeText("tijanapetrovicns03@gmail.com");
                                toast.success("Number copied to clipboard!", {
                                    icon: false,
                                })
                            }}>+381654695389</a>

                            <br/>
                            <br/>

                            <h2 className="text-[#3d3a38] text-l  underline">Based in
                            </h2>


                            <a href="https://www.google.com/maps/place/Novi+Sad/@45.2713329,19.6846336,11z/data=!3m1!4b1!4m6!3m5!1s0x475b10613de93455:0xb6f7d683724fe28!8m2!3d45.2396085!4d19.8227056!16zL20vMHN3d24?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
                               className="text-[#736b66] hover:text-[#b9aba9] text-sm cursor-pointer"
                            >Novi Sad, Serbia</a>


                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <div
                                className=" flex flex-row sm:flex-row items-center sm:items-start gap-10  w-full sm:w-auto justify-start lg:ml-0 md:ml-0 lg:pl-0 md:pl-0 pt-20 z-10">

                                <a href="https://www.github.com/tijanicica">
                                    <button
                                        className="flex items-center text-[#5c5550] rounded-2xl cursor-pointer  text-sm  link-button hover:text-[#b9aba9] pl-0  justify-center sm:justify-start sm:w-auto">
                                        <GitHubLogoIcon width="25px" height="25px"/>
                                    </button>
                                </a>

                                <a href="https://www.linkedin.com/in/tijana-petrovic-b8417a321/">
                                    <button
                                        className="flex items-center text-[#5c5550] rounded-2xl cursor-pointer  text-sm   link-button hover:text-[#b9aba9]   justify-center sm:justify-start sm:w-auto ">
                                        <LinkedInLogoIcon width="25px" height="25px"/>
                                    </button>
                                </a>

                                <a href="mailto:tijanapetrovicns03@gmail.com">
                                    <button
                                        className="flex items-center text-[#5c5550] rounded-2xl cursor-pointer  text-sm  link-button hover:text-[#b9aba9]  justify-center sm:justify-start sm:w-auto p-0.5 ">
                                        <EnvelopeClosedIcon width="25px" height="25px"/>
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-col w-full sm:w-1/2 pl-10">
                        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="text-[#3d3a38] text-md font-medium">E-mail</label>
                                <br/>
                                <input type="email" name="from_email" placeholder=""
                                       className="border-b border-[#3d3a38] bg-transparent focus:outline-none py-1 w-3/4"/>
                            </div>
                            <div>
                                <label className="text-[#3d3a38] text-md font-medium">Full Name</label>
                                <br/>
                                <input type="text" name="name" placeholder=""
                                       className="border-b border-[#3d3a38] bg-transparent focus:outline-none py-1 w-3/4"/>
                            </div>
                            <div>
                                <label className="text-[#3d3a38] text-md font-medium">Subject</label>
                                <br/>
                                <input type="text" name="subject" placeholder=""
                                       className="border-b border-[#3d3a38] bg-transparent focus:outline-none py-1 w-3/4"/>
                            </div>
                            <div>
                                <label className="text-[#3d3a38] text-md font-medium">Message</label>
                                <br/>
                                <textarea name="message" placeholder=""
                                          className="border-b border-[#3d3a38] bg-transparent focus:outline-none py-1 mt-5 h-24 resize-none w-3/4"></textarea>
                            </div>
                            <br/>

                            <button
                                type="submit"
                                className="bg-[#262525] text-white rounded-full py-2 px-6 mt-4 hover:opacity-80 transition-opacity w-3/4 cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ContactPage;
