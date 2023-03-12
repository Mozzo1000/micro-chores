import React from 'react'
import QRCode from "react-qr-code";

function QrCode(props) {
    return (
        <div className="bg-white p-2 transition ease-in-out delay-200 origin-bottom-right hover:scale-[4] duration-300">
            <QRCode value={"http://localhost/break?time=" + props.time} size={64} />
        </div>
    )
}

export default QrCode