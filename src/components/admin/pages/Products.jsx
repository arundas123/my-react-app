import React from "react";
import Sidebar from "../Sidebar";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import '../../css/products.css'
import { NavLink } from "react-router-dom";

const Products = () =>{
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
                                        <h4> Dashboard <span style={{float:'right', textTransform:'capitalize', fontSize:'15px', lineHeight:'20px'}}> Products</span></h4> <hr></hr>
                                    </div>
                                </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="product-card d-flex justify-content-between">
                                                <h5> Products Details</h5>
                                                <NavLink to={'/pages/AddProduct'} className={'product-btn'}><button>Add New Record</button></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="product-table">
                                            <div className="row">
                                            <div className="col-12">
                                            <div className="searchbox">
                                                <form>
                                                    <div class="mb-3">
    
                                                        <input type="search" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search..."/>
    
                                                    </div>
                                                </form>

                                            </div>

                                        </div>
                                    </div>
                                            <div className="table-responsive">
                                                <table className="table table-bordered w-100">
                                            <thead>
                                                <tr>
                                                    <th> Sno</th>
                                                    <th> Product Name</th>
                                                    <th> Cost Price</th>
                                                    <th> Selling Price</th>
                                                    <th> Image </th>
                                                    <th> Status</th>
                                                    <th style={{width:'150px'}}> Action</th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1</td>
                                                        <td> Rice</td>
                                                        <td> 40/kg </td>
                                                        <td> 35/kg </td>
                                                        <td> </td>
                                                        <td> <span class="badge text-bg-success">In-stock</span> </td>
                                                        <td>
                                                            <NavLink to={''}><span class="badge text-bg-primary">Edit</span></NavLink>
                                                            <NavLink to={''}><span class="badge text-bg-danger" style={{marginLeft:"5px"}}>Delete</span></NavLink>
                                                        </td>

                                                    </tr>
                                                </tbody>

                                        </table>

                                    </div>
                                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
export default Products;