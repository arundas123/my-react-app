import React from "react";
import Sidebar from "./Sidebar";
import Body from "./body";
import '../css/body.css';
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Admin = ()=> {
    return(
        <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12 p-0 m-0">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12 p-0 m-0">
                            <div className="top-header">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="icons">
                                                <span> <FaBell /></span>
                                                <span> <FaEnvelope />  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        <Body/>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Admin;