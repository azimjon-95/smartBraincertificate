import React, { useContext, useEffect, useState } from "react";
import './style.css'
import Logo from './logo.png'
import Logoreact from './logo512.png'
import Logoreact1 from './logo512.png'
import Logoreact2 from './logo512.png'
import QRCode from "react-qr-code";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
// import { useIdReact } from "../../../hooks/useIdReact";
import { AuthContext } from "../../../context/AuthContext";
import axios from "../../../api/api";

const ReactJsCertificat = React.forwardRef((props, ref) => {
  // const [uniqueId] = useIdReact("Frontend");
  const { URL } = useContext(AuthContext)


  const [reactId, setreactID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/certificate/checkaddindex/react`);
        setreactID(response.data);
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
    teacherName,
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
        style={pdf_class && { transform: `scale(${zoom}) translate(-25%) ${zoom > 0.5 ? "translateY(0)" : "translateY(-53%)"}` }}
        ref={ref}
      >
        <div className="React_Container">
          <>
            <div className="Reactbox-1"></div>
            <div className="Reactbox-2"></div>
            <div className="Reactbox-3"></div>
            <div className="Reactbox-4"></div>
            <div className="Reactbox-5"></div>
            <div className="Reactbox-4_text">
              React: "ALGORITHM TALIM" is a private
              education institution. This certificate is
              valid and certifies that the following
              student has fully completed the 9-month
              Web Programming training course.
            </div>
          </>

          <div className="certificat_BoxReact">
            <h1 className="Title_React">Certificate <br /> of completion</h1>
            <h3 className="ReId">ID:   {loading ? <span>Data is coming ...</span> : (id ? id : reactId)}</h3>
            <h3 className="Regiven">is given to</h3>
            <h1 className="NameRe">{surname} <br /> {name}</h1>
            <p className="textRe">for successfully completing the "Web programming" <br /> course
            </p>
            <p className="listnode">He/she can work professionally with Web-develpment <br /> strategies. Functional Frontend: Html, Css,<br />  JavaScript, React.Js
            </p>
            <div className="reFooter">
              <div className="signatRe">
                <div className="signatureReact-1">
                  <h4>Director</h4>
                  <p>Sh Usmanov</p>
                </div>

                <div className="signatureReact-2">
                  <h4>Software Engineer</h4>
                  <p>{teacherName}</p>
                </div>
              </div>

              <div className="QRCode">
                <QRCode
                  value={`${URL}/check/${id ? id : reactId}`}
                />
              </div>
              <div className="stamp">
                Stamp
              </div>
            </div>


          </div>


          <>
            <div className="ReactboxBottom-1"></div>
            <div className="ReactboxBottom-2"></div>
            <div className="ReactboxBottom-3"></div>
            <div className="ReactboxBottom-4"></div>
            <div className="ReactboxBottom-5"></div>
            <div className="ReactboxBottom-6"></div>


            <>
              <img className="LogoNode" src={Logo} alt="" />
              <img className="LogoLogo" src={Logoreact} alt="" />
              <img className="LogoLogo1" src={Logoreact1} alt="" />
              <img className="LogoLogo2" src={Logoreact2} alt="" />
            </>

          </>
        </div >
      </div >
    </div>
  );
});

export default ReactJsCertificat;
