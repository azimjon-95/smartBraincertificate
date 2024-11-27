import React, { useState, useContext, useEffect } from "react";
import './style.css';
import img from './img/translucent-image.png'
import QRCode from "react-qr-code";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthContext";
import axios from "../../../api/api";

const LevelKids = React.forwardRef((props, ref) => {

    const [engId, setEngID] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/certificate/checkaddindex/eng`);
                setEngID(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);



    const { URL } = useContext(AuthContext)
    const [zoom, setZoom] = useState(0.44);
    const {
        name,
        surname,
        catigory,
        idD,
        id,
        pdf_class,
        givenDate
    } = props.obj;
    return (

        <div className="pdf_driver">
            <div className="zoom_btns">
                <button onClick={() => setZoom((prev) => prev + 0.05)}>
                    <AiOutlineZoomIn />
                </button>
                <p className="pdf_foiz"> {Math.floor(228 * zoom)}%</p>
                <button onClick={() => setZoom((prev) => prev - 0.05)}>
                    <AiOutlineZoomOut />
                </button>
            </div>

            <div
                className={pdf_class}
                style={pdf_class && { transform: `scale(${zoom}) translate(-50%)` }}
                ref={ref}
            >

                <div className="containerLev">
                    <div className="rama1">
                        <span>
                            <div></div>
                            <div></div>
                        </span>
                        <span>
                            <div></div>
                            <div></div>
                        </span>
                    </div>
                    <div className="rama2">
                        <span>
                            <div></div>
                            <div></div>
                        </span>
                        <span>
                            <div></div>
                            <div></div>
                        </span>
                    </div>

                    <div className="line"></div>

                    <div className="poa" style={{ position: "absolute" }}>
                        <div className="TextLev">

                            <span style={{ textAlign: "center" }}>
                                <h1 className='TitleLev'>CERTIFICATE</h1>
                                <i id="i">OF EXELLENCE</i>
                                <h3 className="engID">№:  {loading ? <span>Data is coming ...</span> : (id ? id : engId)}</h3>

                                <p>This certificate is proudly awarded to</p>
                            </span>
                            <div className="LevBox">
                                <h1>{name} {surname}</h1>
                                <div className="lineLev">
                                    <i>for successfully completing  <b> KIDS {catigory}rd level </b> of <br /> english  course at "ALGORITM TA'LIM"</i>
                                </div>
                            </div>
                            <div className="boxEngLevQr">

                                <div className="QRCodeEnLev">
                                    <QRCode
                                        value={`${URL}/check/${id ? id : engId}`}
                                    />
                                </div>

                                <div className="line2Lev">
                                    <b>Director</b>
                                    <p className="p6Lev">Sh.Usmanov</p>
                                </div>

                            </div>


                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
})

export default LevelKids