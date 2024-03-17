import React, {useEffect, useState} from 'react'
import QRCode from "react-qr-code";

function QrCode(props) {
    const [futureTime, setFutureTime] = useState(); // unix epoch

    useEffect(() => {
        var nowDate = new Date();
        nowDate.setSeconds(nowDate.getSeconds() + props.time)
        console.log(Math.floor(nowDate.getTime() / 1000))
        setFutureTime(Math.floor(nowDate.getTime() / 1000))
    }, [])
    

    return (
        <div className="bg-white p-2 transition ease-in-out delay-200 origin-bottom-right hover:scale-[4] duration-300">
            <QRCode value={window.location + "break?time=" + futureTime} size={64} />
        </div>
    )
}

export default QrCode