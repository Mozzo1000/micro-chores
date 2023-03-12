import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

function BreakPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("time"))
    const [time, setTime] = useState(searchParams.get("time"))
    const [breakText, setBreakText] = useState("Time for a break!");
    const [bgColor, setBgColor] = useState("bg-yellow-500")

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(time => time - 1);
            document.title = new Date(time * 1000).toISOString().substring(14, 19) + " - Micro Chores"
        }, 1000)

        if (time === 0) {
            clearInterval(intervalID);
            document.title = "Micro Chores"
            setBreakText("Breaks over!")
            setBgColor("bg-green-500")
        }

        return () => {
            clearInterval(intervalID);
        }

    }, [time]);

    return (
        <div className={"flex h-screen " + bgColor}>
            <div className="m-auto">
                <p className="text-6xl font-bold">{breakText}</p>
                <p className="text-xl">{new Date(time * 1000).toISOString().substring(14, 19)}</p>
            </div>
        </div>
    )
}

export default BreakPage