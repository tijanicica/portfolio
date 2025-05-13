import { useEffect, useState } from "react";

export default function CloudBackground() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 500);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden  pointer-events-none z-10">
            <div
                className={`absolute w-[150px] h-[70px] sm:w-[300px] sm:h-[150px] bg-white rounded-full blur-3xl animate-cloud1 top-[10%] left-[-20%] ${
                    show ? "opacity-30" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
            <div
                className={`absolute w-[180px] h-[90px] sm:w-[400px] sm:h-[200px] bg-white rounded-full blur-3xl animate-cloud2 top-[50%] right-[-30%] ${
                    show ? "opacity-25" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
            <div
                className={`absolute w-[150px] h-[70px] sm:w-[350px] sm:h-[180px] bg-white rounded-full blur-3xl animate-cloud1 bottom-[20%] left-[-25%] ${
                    show ? "opacity-25" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
            <div
                className={`absolute w-[150px] h-[70px] sm:w-[250px] sm:h-[120px] bg-white rounded-full blur-3xl animate-cloud2 bottom-[40%] right-[-20%] ${
                    show ? "opacity-25" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
        </div>
    );
}
