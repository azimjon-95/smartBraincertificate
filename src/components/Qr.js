import React, { useEffect, useState } from 'react'
import QRCode from "react-qr-code";

function Qr({ match }) {
    const [val, setVal] = useState("")
    useEffect(() => {
        setVal(prev => prev = "https://api.fastfind.uz/" + match.params.path)
    }, [match])
    return (
        <div>
            <div className="qr">
                <QRCode className='qrcode' value={val} />
            </div>
        </div>
    )
}

export default Qr
