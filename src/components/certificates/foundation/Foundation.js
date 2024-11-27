import React, { useState, useEffect, useContext } from "react";
import './style.css';
import Iconca from './img/1.png'
import alg from './img/alg.jpg'
import QRCode from "react-qr-code";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthContext";
import axios from "../../../api/api";


const Foundation = React.forwardRef((props, ref) => {
    const [cssId, setCssID] = useState(null);
    const [realID, setRealID] = useState(null);
    const [loading, setLoading] = useState(true);
    const [zoom, setZoom] = useState(0.5);

    const {
        name,
        surname,
        id,
        idD,
        pdf_class,
        givenDate
    } = props.obj;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/certificate/checkaddindex/foundation`);
                setCssID(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        if (loading) {
            fetchData();
        }
    }, [loading]);

    useEffect(() => {
        setRealID(id ? id : cssId)
    }, [cssId, id]);
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
                style={pdf_class && { transform: `scale(${zoom}) translate(-25%) ${zoom > 0.5 ? "translateY(0)" : "translateY(-53%)"}` }}
                ref={ref}
            >
                <div className='Container_Foun'>
                    <div className='Container_Box'>
                        <h1>CERTIFICATE</h1>
                        <h3>OF APRECIATION</h3>
                        <h4>ID: {loading ? <span>Data is coming ...</span> : (realID)}</h4>
                        <div className='founText'>This certificate proudly present:</div>

                        <div className="Foun_NameBox">
                            <h1>{surname} {name}</h1>
                        </div>
                        <p>For successfully completing the course <br />Foundations of Functional Programming in Algoritm</p>
                        <div className="QrFoun">
                            <div className="QRCodeFoun">
                                <QRCode
                                    value={`${URL}/check/${realID}`}
                                />
                            </div>
                        </div>

                        <b>Director Sh.Usmanov _____________</b>
                    </div>
                    <div className="Foun_1"></div>
                    <div className="Foun_2"></div>
                    <div className="Foun_3"></div>
                    <div className="Foun_4"></div>
                    <div className="Foun_5"></div>
                    <div className="Foun_6"></div>
                    <img className='Iconca' src={Iconca} alt="" />
                    <img className='alg' src={alg} alt="" />
                </div>
            </div>
        </div>
    );
});

export default Foundation;
