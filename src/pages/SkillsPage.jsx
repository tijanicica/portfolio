import MainLayout from "../layouts/MainLayout.jsx";
import CloudBackground from "../components/CloudBackground.jsx";
import { Card } from "../ui/Card.jsx";


const SkillsPage = () => {
    return (
        <>
            <div id="Skills"  className=" relative w-full min-h-screen mt-[55vh] xs:mt-0 ">
                <CloudBackground />
                <div className="flex flex-col m-0 w-full min-h-screen px-10 sm:pt-20 z-10">
                    <div className="flex flex-row items-center justify-start h-full gap-10">

                        <div className="text-white flex-col gap-10 mt-40 sm:mt-20 lg:ml-[270px] ml-0">
                            <h1 className="font-medium tracking-wide  text-4xl lowercase " style={{ fontFamily: "Parisienne, cursive" }}>my skills</h1>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center items-center mb-20 mt-10 lg:ml-40 flex-wrap sm:w-3/4 w-4/5 mx-10'>
                        <Card className='p-7 max-w-[800px] m-5'>
                            <div className='images flex flex-row'></div>
                            <div className='type text-white tracking-wide'>Data</div>
                            <div className='technologies text-neutral-500 text-wrap'>
                                Data Analytics / Data Processing /
                                <br/>
                                Oracle / PostgreSQL /
                                <br/>
                                Statistics / MS Excel
                            </div>
                        </Card>
                        <Card className='p-7 max-w-[800px] m-5'>
                            <div className='images flex flex-row'></div>
                            <div className='type text-white tracking-wide'>Languages</div>
                            <div className='technologies text-neutral-500 text-wrap'>
                                Python / Java / C / C++ / C# / SQL / JavaScript / HTML / CSS
                            </div>
                        </Card>
                    </div>

                    <div className='flex flex-row justify-center items-center mb-20 -mt-20 lg:ml-40 flex-wrap sm:w-3/4 w-4/5 mx-10'>



                        <Card className='p-7 max-w-[800px] m-5'>
                            <div className='images flex flex-row'></div>
                            <div className='type text-white tracking-wide'>Frameworks</div>
                            <div className='technologies text-neutral-500 text-wrap'>
                                React / Vue / .NET / SpringBoot / WPF
                            </div>
                        </Card>
                        <Card className='p-10 max-w-[800px] m-5 ease-in'>
                            <div className='images flex flex-row'></div>
                            <div className='type text-white tracking-wide'>And more</div>
                            <div className='technologies text-neutral-500 text-wrap'>
                                Git / Github /
                                <br/>
                                English (C2 level)
                            </div>
                        </Card>
                    </div>


                </div>


            </div>
        </>
    );
}
export default SkillsPage;