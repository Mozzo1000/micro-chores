import React, { useState, useEffect } from 'react'

function Settings() {
    const [timerTime, setTimerTime] = useState(5); //seconds
    const [breakTime, setBreakTime] = useState(5); //seconds
    const [breakTimeShort, setBreakTimeShort] = useState(2); //seconds


    const saveTimerTimeSetting = (e) => {
        e.preventDefault();
        localStorage.setItem("micro_timer_time", timerTime)
        localStorage.setItem("micro_timer_breaktime", breakTime)
        localStorage.setItem("micro_timer_breaktime_short", breakTimeShort)
    }

    useEffect(() => {
        const stored_time_pref = localStorage.getItem("micro_timer_time")
        if (stored_time_pref) {
            setTimerTime(stored_time_pref);
        }

        const stored_breaktime_pref = localStorage.getItem("micro_timer_breaktime")
        if (stored_breaktime_pref) {
            setBreakTime(stored_breaktime_pref);
        }

        const stored_breaktime_short_pref = localStorage.getItem("micro_timer_breaktime_short")
        if (stored_breaktime_short_pref) {
            setBreakTimeShort(stored_breaktime_short_pref);
        }
    }, [])

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
                    <input type="submit" value="Save" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                </div>
            </form>
        </>

    )
}

export default Settings