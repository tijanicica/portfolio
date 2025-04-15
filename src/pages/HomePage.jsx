const HomePage = () => {
    return (
        <body className=" font-display text-[rgba(236,228,217,0.87)] min-w-[320px] min-h-screen m-0">
        <div className="flex min-h-screen flex-row min-w-[320px]">
            <div className="flex flex-col items-center justify-between pt-12 pr-8 pb-8 pl-16 mt-28 mb-20 italic text-textMain">
                <span>2021</span>
                <div  className="flex-grow-[0.9] w-[2px] bg-accent"></div>
                <span>Present</span>
            </div>
            <div className="absolute left-40 top-[208px] w-1/2 bg-timelineLine p-4 px-8 min-h-[51vh] animate-fadeInLeft">
                <h2 className="font-display font-light text-white ml-52 text-[1.5rem]">welcome to my</h2>
                <h3 className="text-[7rem] font-light text-textMain">PORTFOLIO</h3>
            </div>
        </div>
       </body>

    );
};

export default HomePage;