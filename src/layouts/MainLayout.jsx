import Navbar from '../components/Navbar';
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import SkillsPage from "../pages/SkillsPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <HomePage></HomePage>
            <AboutPage></AboutPage>
            <SkillsPage></SkillsPage>
            <ProjectsPage></ProjectsPage>
            <ContactPage></ContactPage>


        </>
    );
};
export default MainLayout;