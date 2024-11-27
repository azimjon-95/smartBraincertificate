import React, { useContext, useEffect, useState } from "react";
import './style.css'
import Logo from './SBLogo.png'
import QRCode from "react-qr-code";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
// import { useIdNode } from "../../../hooks/useIdNode";
import { AuthContext } from "../../../context/AuthContext";
import axios from "../../../api/api";

const NodejsCertificat = React.forwardRef((props, ref) => {
  // const [uniqueId] = useIdNode("FullStack");
  const [nodejsId, setNodejsID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post(`/certificate/checkaddindex/node`);
        setNodejsID(response.data);
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
    idD,
    id,
    pdf_class,
    givenDate,
    teacherName
  } = props.obj;
  console.log("idss=> ", id)
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
        <div className="Node_Container">
          <>
            <div className="Nodebox-1"></div>
            <div className="Nodebox-2"></div>
            <div className="Nodebox-2_1"></div>
            <div className="Nodebox-3"></div>
            <div className="Nodebox-4"></div>
            <div className="Nodebox-4_1"></div>
            <div className="Nodebox-4_2"></div>
            <div className="Nodebox-4_text">
              <br />
              "SmartBrain IT Academy" is a private education center.
              This certificate confirms that the following student has successfully completed the 12-month Web Programming training course.
            </div>
          </>

          <div className="certificat_BoxNode">
            <h1 className="Title_Node">Certificate</h1>
            <h1 className="item_Node">of Completion</h1>
            <h3 className="NoId">
              №: {loading ? <span>Loading data...</span> : (id ? id : nodejsId)}
            </h3>
            <h3 className="Nogiven">Awarded to</h3>
            <h1 className="Namenode">
              {surname} <br /> {name}
            </h1>
            <p className="textnode">
              For successfully completing the "Web Programming: <br /> Front-end and Back-end" course.
            </p>
            <p className="listnode">
              This certificate acknowledges expertise in professional Web Development, including:
              <br />
              Front-end Technologies: HTML, CSS, JavaScript, React.js
              <br />
              Back-end Technologies: Node.js, Express.js, MongoDB
            </p>

            <div className="nodeFooter">
              <div className="signat">
                <div className="signatureBoxNo">
                  <h4>Software Engineer</h4>
                  <p>{teacherName}</p>
                </div>
              </div>

              <div style={{ marginLeft: "120px" }} className="QRCode">
                <QRCode
                  value={`${URL}/check/${id ? id : nodejsId}`}
                />
              </div>
              <div className="stamp">
                Stamp
              </div>
            </div>



          </div>


          <>
            <div className="boxBottomNode-1"></div>
            <div className="boxBottomNode-2"></div>
            <div className="boxBottomNode-2_1"></div>
            <div className="boxBottomNode-3"></div>
            <div className="boxBottomNode-4"></div>
            <div className="boxBottomNode-4_1"></div>
            <div className="boxBottomNode-4_2">
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
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <>
              <img className="LogoNode" src={Logo} alt="" />
            </>

            <div className="boxBottomNode-5"></div>
            <div className="boxBottomNode-6"></div>
          </>
        </div>
      </div>
    </div>
  );
});

export default NodejsCertificat;
