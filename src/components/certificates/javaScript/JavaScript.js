import React, { useContext, useEffect, useState } from "react";
import './style.css'
import Logo from './logo.png'
import QRCode from "react-qr-code";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
// import { useIdJs } from "../../../hooks/useIdJs";
import { AuthContext } from "../../../context/AuthContext";
import axios from "../../../api/api";

const JavaScriptCertificat = React.forwardRef((props, ref) => {
  const [jsId, setJsID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/certificate/checkaddindex/js`);
        setJsID(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const { URL } = useContext(AuthContext)
  const [zoom, setZoom] = useState(0.5);
  const {
    name,
    surname,
    pdf_class,
    id
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
        <div className="Js_Container">
          <>
            <div className="Jsbox-1"></div>
            <div className="Jsbox-2"></div>
            <div className="Jsbox-3"></div>
            <div className="Jsbox-4"></div>
            <div className="boxTopJs-5">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

          </>

          <div className="certificat_BoxJs">
            <h1 className="Title_Js">Certificate</h1>
            <h3 className="NoIdjs">№: {loading ? <span>Data is coming ...</span> : (id ? id : jsId)}</h3>
            <h3 className="Nogiven">Ushbu sertifikat</h3>
            <h1 className="NameJs">{surname}<br />{name}</h1>
            <p className="textjs">"Web dasturlash: JavaScript kursini <br /> muvaffaqiyatli tamomlagani uchun <br /> berildi.</p>
            <div className="JsFooter">

              <div className="signatureBoxJs">
                <h4>Director</h4>
                <p>Sh Usmanov</p>
              </div>

              <div className="QRCodejs">
                <QRCode
                  value={`${URL}/check/${jsId}`}
                />
              </div>
              <div className="stampjs">
                Stamp
              </div>
            </div>


          </div>


          <>
            <div className="JsboxBottom-1"></div>
            <div className="JsboxBottom-2"></div>
            <div className="JsboxBottom-3"></div>
            <div className="JsboxBottom-4"></div>
            <div className="JsboxBottom-5"></div>
            <div className="boxBottomJs-5">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <>
              <img className="LogoNode" src={Logo} alt="" />
            </>
          </>
        </div>
      </div>
    </div>
  );
});

export default JavaScriptCertificat;
