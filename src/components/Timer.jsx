import React, { useState, useEffect } from 'react'
import done_sound from '../done.mp3'
import QrCode from './QrCode';
import { default_time, default_breaktime_short, default_breaktime_long } from "../Defaults";

function Timer() {
    const [timerPlay, setTimerPlay] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(localStorage.getItem("micro_timer_time") ? localStorage.getItem("micro_timer_time") : default_time);
    const [choresDone, setChoresDone] = useState(0);
    const [breakTime, setBreakTime] = useState(false);
    const [secondsLeftBreak, setSecondsLeftBreak] = useState(localStorage.getItem("micro_timer_breaktime") ? localStorage.getItem("micro_timer_breaktime") : default_breaktime_short);
    const [runShortBreak, setRunShortBreak] = useState(false);

    const done_sound_effect = new Audio(done_sound);

    useEffect(() => {
        console.log(timerPlay)
        if (timerPlay) {
            console.log("PLAY")

            const intervalID = setInterval(() => {
                setSecondsLeft(secondsLeft => secondsLeft - 1);
                document.title = new Date(secondsLeft * 1000).toISOString().substring(14, 19) + " - Micro Chores"
            }, 1000)

            if (secondsLeft === 0) {
                clearInterval(intervalID);
                done_sound_effect.play();
                setTimerPlay(false);
                setChoresDone(choresDone + 1);
                setSecondsLeft(localStorage.getItem("micro_timer_time") ? localStorage.getItem("micro_timer_time") : default_time)
                console.log(choresDone);
                document.title = "Micro Chores"
                if (choresDone < 4) {
                    setSecondsLeftBreak(localStorage.getItem("micro_timer_breaktime_short") ? localStorage.getItem("micro_timer_breaktime_short") : default_breaktime_short);
                    setRunShortBreak(true);
                }
            }

            return () => {
                clearInterval(intervalID);
            }
        }

    }, [timerPlay, secondsLeft]);

    useEffect(() => {
        if (choresDone == 5) {
            const interval = runBreak();
            if (secondsLeftBreak === 0) {
                setChoresDone(0);
            }
            return () => {
                clearInterval(interval);
            }
        }
    }, [choresDone, secondsLeftBreak])

    useEffect(() => {
        if (runShortBreak) {
            const interval = runBreak();

            if (secondsLeftBreak === 0) {
                setRunShortBreak(false);
            }

            return () => {
                clearInterval(interval);
            }
        }
    }, [runShortBreak, secondsLeftBreak]);

    const runBreak = () => {
        setBreakTime(true);
        const breakIntervalID = setInterval(() => {
            setSecondsLeftBreak(secondsLeftBreak => secondsLeftBreak - 1);
            console.log("interval : " + secondsLeftBreak);
            document.title = "Break! " + new Date(secondsLeftBreak * 1000).toISOString().substring(14, 19) + " - Micro Chores"
        }, 1000)

        if (secondsLeftBreak === 0) {
            console.log("0 SECONDS LEFT!")
            clearInterval(breakIntervalID);
            setBreakTime(false);
            setSecondsLeftBreak(localStorage.getItem("micro_timer_breaktime") ? localStorage.getItem("micro_timer_breaktime") : default_breaktime_long)
            document.title = "Micro Chores"
        }
        return breakIntervalID;
    };


    return (
        <div className="flex h-screen">
            <div className='m-auto '>
                {!timerPlay && !breakTime &&
                    <button onClick={() => setTimerPlay(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-64 h-64 hover:fill-current">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </button >
                }
                {timerPlay && !breakTime &&
                    <button onClick={() => setTimerPlay(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-64 h-64 animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    </button >
                }

                {breakTime &&
                    <>
                        <p className="text-6xl font-bold">Time for a break!</p>
                        <p className="text-xl">{new Date(secondsLeftBreak * 1000).toISOString().substring(14, 19)}</p>
                        <div className="hidden absolute md:block bottom-0 right-0 ">
                            <QrCode time={secondsLeftBreak} />
                        </div>
                    </>
                }
                {!breakTime &&
                    <>
                        <p className="text-xl pb-8">{new Date(secondsLeft * 1000).toISOString().substring(14, 19)}</p>
                        <div className="flex flex-row justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={choresDone >= 1 ? "fill-current w-8 h-8" : "w-8 h-8"}>
                                <circle cx="12" cy="12" r="6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={choresDone >= 2 ? "fill-current w-8 h-8" : "w-8 h-8"}>
                                <circle cx="12" cy="12" r="6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={choresDone >= 3 ? "fill-current w-8 h-8" : "w-8 h-8"}>
                                <circle cx="12" cy="12" r="6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={choresDone >= 4 ? "fill-current w-8 h-8" : "w-8 h-8"}>
                                <circle cx="12" cy="12" r="6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={choresDone >= 5 ? "fill-current w-8 h-8" : "w-8 h-8"}>
                                <circle cx="12" cy="12" r="6" />
                            </svg>
                        </div>
                    </>
                }
            </div>
        </div >
    )
}

export default Timer