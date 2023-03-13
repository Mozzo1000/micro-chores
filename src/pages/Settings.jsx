import React, { useState, useEffect } from 'react'
import { default_time, default_breaktime_short, default_breaktime_long } from "../Defaults";
function Settings() {
    const [timerTime, setTimerTime] = useState(default_time); //seconds
    const [breakTime, setBreakTime] = useState(default_breaktime_long); //seconds
    const [breakTimeShort, setBreakTimeShort] = useState(default_breaktime_short); //seconds

    const saveTimerTimeSetting = (e) => {
        e.preventDefault();
        localStorage.setItem("micro_timer_time", timerTime)
        localStorage.setItem("micro_timer_breaktime", breakTime)
        localStorage.setItem("micro_timer_breaktime_short", breakTimeShort)
    }

    const resetSettings = () => {
        setTimerTime(default_time);
        setBreakTime(default_breaktime_long);
        setBreakTimeShort(default_breaktime_short);
        localStorage.setItem("micro_timer_time", default_time)
        localStorage.setItem("micro_timer_breaktime", default_breaktime_long)
        localStorage.setItem("micro_timer_breaktime_short", default_breaktime_short)
    };

    useEffect(() => {
        setStateFromStorage("micro_timer_time", setTimerTime)

        setStateFromStorage("micro_timer_breaktime", setBreakTime)

        setStateFromStorage("micro_timer_breaktime_short", setBreakTimeShort)
    }, [])

    const setStateFromStorage = (storage, state) => {
        const pref = localStorage.getItem(storage)
        if (pref) {
            state(pref);
        }
    };

    return (
        <>
            <h1 className="text-4xl font-bold mb-6">Settings</h1>
            <form onSubmit={saveTimerTimeSetting}>
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2" for="timer_setting">Timer length (s)</label>
                    <input className="text-black" id="timer_setting" type="number" value={timerTime} onChange={(e) => setTimerTime(e.target.value)} />

                    <label className="block text-gray-400 text-sm font-bold mb-2" for="breaktime_short_setting">Short break length (s)</label>
                    <input className="text-black" id="breaktime_short_setting" type="number" value={breakTimeShort} onChange={(e) => setBreakTimeShort(e.target.value)} />

                    <label className="block text-gray-400 text-sm font-bold mb-2" for="breaktime_setting">Long break length (s)</label>
                    <input className="text-black" id="breaktime_setting" type="number" value={breakTime} onChange={(e) => setBreakTime(e.target.value)} />

                </div>
                <div className="mb-6">
                    <input type="submit" value="Save" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" /><br />
                    <input type="button" onClick={resetSettings} value="Reset settings" className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" />
                </div>
            </form>
        </>

    )
}

export default Settings