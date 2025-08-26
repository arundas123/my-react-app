import React from "react";
import Sidebar from "../Sidebar";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import '../../css/products.css';
import { FaArrowRight } from "react-icons/fa6";
import ProductForm from "./ProductForm";


const AddProduct = () =>{
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
            {/* Body section */}
                            <div className="container-fluid">
                                <div className="row top-title">
                                    <div className="col-12">
                                        <h4> Dashboard <span style={{float:'right', textTransform:'capitalize', fontSize:'15px', lineHeight:'20px'}}> Products <span> <FaArrowRight /> Add Product</span></span></h4> <hr></hr>
                                    </div>
                                </div>
                               <ProductForm/>     
                        </div>
                    </div>
                </div>
            </div>
        
    </>

    )
}
export default AddProduct;