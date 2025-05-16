import MainLayout from "../layouts/MainLayout.jsx";
import CloudBackground from "../components/CloudBackground.jsx";
import { Card } from "../ui/Card.jsx";
import bunny from "../assets/bunny.jpeg"
import travel from "../assets/travel2.jpeg"
import diabetes from "../assets/diabetes.jpeg"
import goodreads from "../assets/books.jpeg"

const projects = [
    {
        id: 1,
        name: "OnlyBuns",
        image: bunny,
        technologies: ["Vue.js", "Spring Boot", "PostgreSQL"],
        description: "Social network for bunny lovers to share posts, follow users and chat.",
        link: "https://github.com/tijanicica/only-buns"
    },
    {
        id: 2,
        name: "Wandery - travel app",
        image: travel,
        technologies: [".NET", "WPF"],
        description: "Booking-like desktop application for tourists and tour guides.",
        link: "https://github.com/tijanicica/travelapplication",
    },
    {
        id: 3,
        name: "Diabetes prediction using ML algorithms",
        image: diabetes,
        technologies: ["Python", "pandas", "numpy", "scikit-learn", "tensorflow", "matplotlib", "seaborn"],
        description: "Predicted diabetes outcome based on a dataset using logistic and linear regression, random forest, decision tree, SVM algorithms, evaluation\n" +
            "metrics, data preprocessing and data analytics using charts.\n",
        link: "https://github.com/tijanicica/diabetes_prediction"
    },
    {
        id: 4,
        name: "Goodreads clone",
        image: goodreads,
        technologies: ["Spring Boot", "Vue.js", "H2 database"],
        description: "Goodreads clone website for renting, buying books, making reading schedules etc.",
        link: "https://github.com/tijanicica/goodreads"
    },

];

const ProjectsPage = () => {
    return (
        <>
            <div
                id="Projects"
                className="relative w-full min-h-screen -mt-20 xs:-mt-50 sm:-mb-45 -mb-25"
            >
                <CloudBackground />
                <div className="flex flex-col m-0 w-full min-h-screen px-10 sm:pt-20 z-10 bg-[#dec5ba] ">
                    <div className="flex flex-row items-center justify-start h-full gap-10">
                        <div className="text-white  flex-col gap-10 mb-5 mt-30  sm:mt-10 lg:ml-[270px] ml-0">
                            <h1
                                className="font-medium tracking-wide text-4xl lowercase"
                                style={{ fontFamily: "Parisienne, cursive" }}
                            >
                                my projects
                            </h1>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 lg:w-[70%] mx-auto mb-30">
                        {projects.map((project) => (


                            <a href = {project.link} key={project.id}>
                            <Card key={project.id} className="flex flex-col md:flex-row p-4 bg-white/80 backdrop-blur-lg cursor-pointer hover:scale-108 hover:border-white z-10" style={{ fontFamily: "Montserrat" }}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full sm:w-48 h-48 object-cover rounded-xl"
                                />
                                <div className="flex flex-col justify-between ml-0 md:ml-6 mt-4 md:mt-0 w-full ">
                                    <div>
                                        <h2 className="text-xl font-bold text-[#5c5550] hover:text-amber-50">{project.name}</h2>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-white text-[#5c5550] text-xs font-medium px-2.5 py-0.5 rounded-full"
                                                >
                                {tech}
                            </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-4 text-[#5c5550]">{project.description}</p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                    <p> </p>
                                </div>
                            </Card>
                            </a>
                        ))}
                    </div>



                </div>
            </div>
        </>
    );
};

export default ProjectsPage;
