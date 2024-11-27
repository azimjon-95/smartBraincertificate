import React, { useEffect, useState, useRef, useContext } from 'react'
import './style.css'
import axios from '../../api/api'
import ReactToPrint from 'react-to-print';
import { FiDownload } from 'react-icons/fi';
import { BsFillTrashFill } from 'react-icons/bs';
import LoadingTruck from '../loading/LoadingTruck';
import NodejsCertificat from '../certificates/nodeJs/nodejsCertificat';
import ReactJsCertificat from '../certificates/reactJs/ReactJs';
import JavaScriptCertificat from '../certificates/javaScript/JavaScript';
import CssCertificat from '../certificates/css/cssCertificat';
import RusTiliCertificat from '../certificates/rus/RusTili';
import Level from '../certificates/engLevel/Level';
import LevelKids from '../certificates/engKids/LevelKids';
import { AuthContext } from '../../context/AuthContext';
import Foundation from '../certificates/foundation/Foundation';


function History() {
    const { setIsLoading } = useContext(AuthContext)
    const componentRef = useRef();
    const [idD, setidD] = useState("S0001")
    const [modal, setModal] = useState(false)
    const [deleteCertId, setDeleteCertId] = useState(null);
    const [deletedItem, setDeletedItem] = useState(null);
    const checkID = (id) => {
        setidD(id)
    }
    const [data, setData] = useState([]);

    const filteredData = data?.filter(el => el.courseName);
    console.log("filteredData-> ", filteredData)


    // console.log("idD -> ", idD)
    useEffect(() => {
        axios
            .get("/certificate/all")
            .then((response) => setData(response?.data))
            .catch((err) => console.log(err));
    }, [deletedItem])
    // console.log(data);

    const deleteCertificate = (id) => {

        if (id) {
            setIsLoading(true)
            axios
                .patch(`/certificate/delete/${id}`)
                .then((response) => {
                    console.log("ochirildi-> ", response.data)
                    setDeletedItem(response?.data)
                    setIsLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setIsLoading(false)
                });
        }
        setModal(false);
    }



    const TableFilterCertificate = (props, ref) => {
        const {
            name,
            surname,
            teachername,
            givenDate,
            courseName,
            level,
            _id,
            id,
        } = props.obj;

        if (courseName === "nodejs" && _id === idD) {
            return <NodejsCertificat
                ref={componentRef}
                obj={{
                    idD: _id,
                    id: id,
                    name: name,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                }} />
        } else if (courseName === "react" && _id === idD) {
            return <ReactJsCertificat
                ref={componentRef}
                obj={{
                    idD: idD,
                    id: id,
                    name: name,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                }} />
        } else if (courseName === "javascript" && _id === idD) {
            return <JavaScriptCertificat
                ref={componentRef}
                obj={{
                    idD: idD,
                    name: name,
                    id: _id,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                }} />
        }
        else if (courseName === "css" && _id === idD) {
            return <CssCertificat
                ref={componentRef}
                obj={{
                    idD: idD,
                    id: id,
                    name: name,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                }} />
        }
        else if (courseName === "rus" && _id === idD) {
            return <RusTiliCertificat
                ref={componentRef}
                obj={{
                    idD: idD,
                    id: id,
                    name: name,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                    catigory: level,
                }} />
        }
        else if (courseName === "level" && _id === idD) {
            return <Level
                ref={componentRef}
                obj={{
                    idD: idD,
                    id: id,
                    name: name,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                    catigory: level,

                }} />
        }
        else if (courseName === "eng" && _id === idD) {
            return <LevelKids
                ref={componentRef}
                obj={{
                    idD: idD,
                    id: id,
                    name: name,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                    catigory: level,

                }} />
        }
        else if (courseName === "foundation" && _id === idD) {
            return <Foundation
                ref={componentRef}
                obj={{
                    idD: idD,
                    id: id,
                    name: name,
                    surname: surname,
                    courseName: courseName,
                    teacherName: teachername,
                    givenDate: givenDate,
                    catigory: level,

                }} />
        }
    }

    return (
        <div className='allLicense'>
            <div className="allLicenseContainer">
                <h1 className='allLicenseTitle'>O'quvchining Sertifikatlar Ro'yhati</h1>
                <div className='driverTableContainer'>
                    {
                        data ?
                            <>
                                <table className='driverTable'>
                                    <thead className='driverTableHead'>
                                        <tr>
                                            <th>ID</th>
                                            <th>FISH</th>
                                            <th>Catigory</th>
                                            <th>Teacher name</th>
                                            <th>PDF chiqarish</th>
                                            <th>O'chirish</th>
                                        </tr>

                                    </thead>
                                    <tbody className='driverTableBody'>
                                        {

                                            filteredData?.reverse().map(({ _id, id, name, surname, courseName, teachername, level }) => {
                                                return !name.includes("Mavjud") ? <tr key={_id}>
                                                    <td>{id}</td>
                                                    <td>{name} {surname} </td>
                                                    <td>{courseName}</td>
                                                    <td>{teachername}</td>
                                                    <td>

                                                        <ReactToPrint
                                                            trigger={() => <button
                                                                onFocus={() => checkID(_id)}
                                                                className="driverTableBodyDelBtn driverTableBodyPDFBtn"
                                                            > <FiDownload /><span>PDF</span></button>
                                                            }
                                                            content={() => componentRef.current}
                                                        />
                                                    </td>
                                                    <td><button onClick={() => {
                                                        setModal(true)
                                                        setDeleteCertId(_id)
                                                    }} className='driverTableBodyDelBtn'><BsFillTrashFill /><span> O'chirish</span></button></td>
                                                    <td style={{ display: "none" }}>
                                                        {
                                                            <TableFilterCertificate obj={{
                                                                idD,
                                                                _id,
                                                                id,
                                                                name,
                                                                surname,
                                                                courseName,
                                                                teachername,
                                                                level,

                                                            }} />



                                                        }

                                                    </td>
                                                </tr> : <></>


                                            })

                                        }


                                    </tbody>
                                </table>
                                <div style={modal ? { display: "flex" } : { display: "none" }} className='driverModalMain'>
                                    <div className="driverModalContainer">
                                        <BsFillTrashFill />
                                        <h3>Ishinchingiz komilmi?</h3>
                                        <div>
                                            <button onClick={() => deleteCertificate(deleteCertId)}>Ha</button>
                                            <button onClick={() => setModal(false)}>Yo'q</button>
                                        </div>
                                    </div>
                                    <div onClick={() => setModal(false)} className="driverModalHide"></div>
                                </div>
                            </> :
                            <LoadingTruck />
                    }
                </div>
            </div>
        </div>

    )
}


export default History
