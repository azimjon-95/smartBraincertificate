import React, { useEffect, useState, useRef } from "react";
import "./HeroBanner.css";
import { FiSearch } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import axios from '../../api/api'
import hero_banner from "../../assets/main/BLogo.jpg";
import Header from "../header/Header";

const HeroBanner = () => {


  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length) {
      axios
        .get(`https://certificate-backend.onrender.com/certificate/all`)
        .then(response => setData(response?.data))
        .catch((err) => console.log(err));
      return;
    } else {
      return;
    }
  }, [value]);
  let searchedData = data.filter(i => i?.id?.toLowerCase() === value?.toLowerCase());
  sessionStorage.setItem("data", JSON.stringify(searchedData))

  return (
    <>
      <Header />

      <div className="heroBanner">
        <div className="heroBanner-left">
          <h1 className="heroBanner-title">Official certificates SmartBrain IT Academy</h1>
          <div className="imgBanerMobile">
            <img
              src={hero_banner}
              alt="heroBanner-images"
            />
          </div>
          <div className="checker_wrapper">
            <input
              id="certificate_number"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="ID raqamingizni kiriting"
              className="check_certificate-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            // onBlur={() => setSearch(true)}

            />
            <FiSearch />
          </div>
          {value ?
            <div className="studentResult">

              {searchedData.length ? searchedData?.map(i =>
                <Link key={i} to={`/single/${i?.id}`}>{i?.id} - Certificate is available ↗️</Link>
              ) : <div className="Loadin">
                <h3 className="Load">Loading</h3>
                <h1 className="Load_1">.</h1>
                <h1 className="Load_2">.</h1>
                <h1 className="Load_3">.</h1>
              </div>}

            </div>
            :
            <div className="imgBox">
              <img src="https://media2.giphy.com/media/IzWnWcZHgGVaR3vglp/giphy.gif?cid=ecf05e47nya1o7uxhopxiaahv84cb3dphxwifktoy8ut9tci&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
            </div>
          }
        </div>

        <div className="imgBaner">
          <img
            src={hero_banner}
            alt="heroBanner-images"
          />
        </div>

      </div >

      <Outlet />
    </>

  );
};
export default HeroBanner;
