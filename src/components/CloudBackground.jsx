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
                className={`absolute w-[130px] h-[70px] xs:w-[300px] xs:h-[150px] bg-white rounded-full blur-3xl animate-cloud1 top-[10%] left-[20%] ${
                    show ? "opacity-15" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
            <div
                className={`absolute w-[150px] h-[90px] xs:w-[400px] xs:h-[200px] bg-white rounded-full blur-3xl animate-cloud2 top-[20%] right-[-10%] ${
                    show ? "opacity-10" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
            <div
                className={`absolute w-[150px] h-[70px] xs:w-[350px] xs:h-[180px] bg-white rounded-full blur-3xl animate-cloud1 bottom-[10%] left-[-10%] ${
                    show ? "opacity-10" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
            <div
                className={`absolute w-[120px] h-[70px] xs:w-[250px] xs:h-[120px] bg-white rounded-full blur-3xl animate-cloud2 bottom-[20%] right-[-20%] ${
                    show ? "opacity-15" : "opacity-0"
                } transition-all duration-[3000ms]`}
            />
        </div>
    );
}
