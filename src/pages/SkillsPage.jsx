import MainLayout from "../layouts/MainLayout.jsx";
import CloudBackground from "../components/CloudBackground.jsx";
import { Card } from "../ui/Card.jsx";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const cards = [
    {
        title: "Data",
        skills: (
            <>
                Data Analytics / Data Processing /
                <br />
                Oracle / PostgreSQL /
                <br />
                Statistics / MS Excel
            </>
        ),
    },
    {
        title: "Languages",
        skills: "Python / Java / C / C++ / C# / SQL / JavaScript / HTML / CSS",
    },
    {
        title: "Frameworks",
        skills: "React / Vue / .NET / SpringBoot / WPF",
    },
    {
        title: "And more",
        skills: (
            <>
                Git / Github /
                <br />
                English (C2 level)
            </>
        ),
    },
];

const SkillsPage = () => {
    return (
        <>
            <div
                id="Skills"
                className="relative w-full min-h-screen mt-[55vh] xs:mt-0 -mb-40 xs:-mb-0 "
            >
                <CloudBackground />
                <div className="flex flex-col m-0 w-full min-h-screen px-10 sm:pt-20 z-10">
                    <div className="flex flex-row items-center justify-start h-full gap-10">
                        <div className="text-white flex-col gap-10 mt-40 sm:mt-20 lg:ml-[270px] ml-0">
                            <h1
                                className="font-medium tracking-wide text-4xl lowercase"
                                style={{ fontFamily: "Parisienne, cursive" }}
                            >
                                my skills
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center flex-wrap sm:w-3/4 w-4/5 mx-10 mb-60 mt-10 lg:ml-40" style={{ fontFamily: "Montserrat" }}>
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                                variants={cardVariants}
                            >
                                <Card className="p-7 max-w-[800px] m-5">
                                    <div className="images flex flex-row"></div>
                                    <div className="type text-white tracking-wide">
                                        {card.title}
                                    </div>
                                    <div className="technologies text-neutral-500 text-wrap">
                                        {card.skills}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsPage;
