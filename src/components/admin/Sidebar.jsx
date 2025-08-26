import React from "react";
import '../css/sidebar.css'
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaFirstOrder } from "react-icons/fa";
import { MdOutlineSignalWifiStatusbar4Bar } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
const Sidebar = ()=> {
    return(
        <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0 m-0">
                            <div className="sidebar">
                            <div className="sidebar-top">
                                <h4> Admin panel</h4>

                            </div>
                            <div className="sidebar-bottom">
                            <nav>
                                <NavLink to={'/'} className={'nav'}> <MdDashboard/> Dashboard </NavLink>
                                <NavLink to={'/pages/Products'} className={'nav'}> <FaProductHunt /> Product <FaAngleRight id="drop"/> </NavLink>
                                <NavLink to={'/'} className={'nav'}> <FaFirstOrder /> Order <FaAngleRight id="drop"/> </NavLink>
                                <NavLink to={'/'} className={'nav'}> <MdOutlineSignalWifiStatusbar4Bar/> Status <FaAngleRight id="drop"/> </NavLink>
                                <NavLink to={'/'} className={'nav'}> <FaUserCircle /> Customer <FaAngleRight id="drop" /></NavLink>
                                <NavLink to={'/'} className={'nav'}> <FaRupeeSign /> Transaction <FaAngleRight id="drop"/> </NavLink>
                                <NavLink to={'/'} className={'nav'}> <FaRegBookmark /> Contact  </NavLink>
                                <NavLink to={'/'} className={'nav'}> <FiLogOut /> Logout  </NavLink>
                                
                            </nav>

                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Sidebar;



