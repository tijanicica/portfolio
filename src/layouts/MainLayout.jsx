import Navbar from '../components/Navbar';
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import SkillsPage from "../pages/SkillsPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <HomePage></HomePage>
            <AboutPage></AboutPage>
            <SkillsPage></SkillsPage>
            <ProjectsPage></ProjectsPage>
            <ContactPage></ContactPage>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                draggable
                toastClassName="custom-toast"
                bodyClassName="custom-toast-body"

            />


        </>
    );
};
export default MainLayout;