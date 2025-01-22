import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/api";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Logo from '../../components/certificates/reactJs/SBLogo.png'
import './Draft.css';


function Draft() {
  const params = useParams();
  const [data, setData] = useState('');
  useEffect(() => {

    const getApi = async () => {
      await axios
        .post(`certificate/check/${(params?.id)?.toUpperCase()}`)
        .then((certificateDrafted) => {
          // console.log(certificateDrafted)
          setData(certificateDrafted?.data)

        })
        .catch(err => {
          console.log(err)
        })
    }
    getApi()

  }, [params]);


  return (
    <div className="pdf_Cont">
      <div className="darft_container">
        <div className="boxDarft">
          <Link to="/" className="main_pageLink">
            <FiArrowLeft /> Asosiy
          </Link>
          <i></i>
        </div>
        <div className="pdf_Box">
          <div className="pdf_banner">
            <div className="pdf_banner_img">
              <div className="pdf_bannerImgBox">
                <img src={Logo} alt="" />
              </div>
              <h1>SmartBrain <br /> IT Kompaniy</h1>
            </div>


            <div className="by">
              <i>The following details are confirmed by:</i> <br />
              <i><b>Smartbrain.uz</b></i>
            </div>
          </div>
          <div className="pdf_main">
            <p>Fullname</p>
            <b className={data?.name ? "" : "skeleton"}>
              {data?.name ? `${data.name} ${data.surname}` : ""}
            </b>
          </div>
          <div className="pdf_main">
            <p>Category</p>
            <b className={data?.courseName ? "" : "skeleton"}>
              {data?.courseName || ""}
            </b>
          </div>
          <div className="pdf_main">
            <p>ID</p>
            <b className={data?.id ? "" : "skeleton"}>
              {data?.id || ""}
            </b>
          </div>
          <div className="pdf_main">
            <p>Given date</p>
            <b className={data?.givenDate ? "" : "skeleton"}>
              {data?.givenDate || ""}
            </b>
          </div>
          <div className="pdf_main">
            <p>Teacher's name</p>
            <b className={data?.teachername ? "" : "skeleton"}>
              {data?.teachername || ""}
            </b>
          </div>

          <div className="pdf_main pdf-text">
            <p>© SmartBrain IT Kompaniy, 2025 All rights reserved.</p>
          </div>

        </div>
      </div >
    </div>
  );

}

export default Draft;
