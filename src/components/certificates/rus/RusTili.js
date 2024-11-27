import React, { useState, useContext, useEffect } from "react";
import './style.css'
import logo from './logo.png'
import QRCode from "react-qr-code";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthContext";
import axios from "../../../api/api";



const RusTiliCertificat = React.forwardRef((props, ref) => {
  // const [uniqueId] = useIdRus("Rus");
  const { URL } = useContext(AuthContext)

  const [rusId, setRusID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/certificate/checkaddindex/rus`);
        setRusID(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [zoom, setZoom] = useState(0.44);
  const {
    name,
    surname,
    idD,
    id,
    pdf_class,
    courseName,
    catigory,
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
        style={pdf_class && { transform: `scale(${zoom}) translate(-25%) ${zoom > 0.5 ? "translateY(0)" : "translateY(-53%)"}` }}
        ref={ref}
      >
        <div className="certificat_ContainerRus">
          <div className="decoration">
            <div className="boxru"></div>
            <div className="boxru"></div>
            <div className="boxru"></div>
            <div className="boxru"></div>
            <div className="boxru"></div>
            <div className="boxru"></div>
            <div className="boxru"></div>
            <div className="boxru"></div>
            <div className="boxru1"></div>
            <div className="boxru2"></div>
            <img className="ruLOG" src={logo} alt="" />

          </div>
          <div className="texts">

            <h1 className="serRu">ПОХВАЛЬНЫЙ <br /> ЛИСТ</h1>
            <h3 className="engID">№:   {loading ? <span>Data is coming ...</span> : (id ? id : rusId)}</h3>

            <p>Выдан:</p>


            <div className="contentru">
              <h1>{name} {surname}</h1>
            </div>
            <p className="titleru">За активное посещение занятий и достижение уроке русского <br /> языка в течение {catigory}-х месяцев  в учебном центре<br /> "ALGORITM   TA'LIM"</p>
            <div className="boxEngQr">
              <div className="line2">
                <b>Director</b>
                <p className="p6">Sh.Usmanov</p>
              </div>
              <div className="QRCoderu">
                <QRCode
                  value={`${URL}/check/${id ? id : rusId}`}
                />
              </div>

            </div>





          </div>
        </div>
      </div>
    </div>

  )
})

export default RusTiliCertificat;
