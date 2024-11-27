import React, { useState, useContext, useEffect } from "react";
import './style.css'
import logo from './logo.png'
import QRCode from "react-qr-code";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthContext";
import axios from "../../../api/api";
// import { useIdEng } from "../../../hooks/useIdEng";



const AdultCertificat = React.forwardRef((props, ref) => {
  // const [uniqueId] = useIdEng("Eng");
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
  // console.log(uniqueId)

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
        <div className="certificat_ContainerEng">
          <div className="containerEng">
            <h1 className="cert">CERTIFICATE</h1>
            <p className="p1">OF ACHIEVEMENT</p>
            <h3 className="engID">№: {loading ? <span>Data is coming ...</span> : (id ? id : engId)}</h3>
            <p className="p2">This certificate is proundly presented to</p>
            <div className="line">
              <h3>{name} {surname}</h3>
            </div>

            <p className="p3">For active attendance in the lessons and achieving high resultin {catigory}-month</p>


            <div className="boxEngQr">

              <div className="QRCodeEn">
                <QRCode
                  value={`${URL}/check/${(id ? id : engId)}`}
                />
              </div>

              <div className="line2">
                <b>Director</b>
                <p className="p6">Sh.Usmanov</p>
              </div>

            </div>

          </div>
          <>
            <img className="engLOG" src={logo} alt="" />
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
            <div className="box5"></div>

            <div className="box6"></div>
            <div className="box7"></div>
            <div className="box8"></div>
            <div className="box9"></div>
            <div className="box10"></div>
            <div className="box11"></div>
            <div className="box12"></div>
            <div className="box13"></div>
            <div className="box14"></div>


            <div className="box15"></div>
            <div className="box16"></div>

            <div className="box17"></div>
            <div className="box18"></div>
          </>
        </div>

      </div>
    </div>
  );
});

export default AdultCertificat;
