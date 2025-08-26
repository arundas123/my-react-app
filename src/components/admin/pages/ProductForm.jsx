import React, { useState } from "react";
import '../../css/products.css';
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const ProductForm = () => {

    const [product, setProduct] =useState({
        pname: '',
        cprice: '',
        sprice: '',
        feature: '',
        offer: '',
        image: ''
    })
        const onValueChange = (e) =>{
            setProduct({
               ...product,
                [e.target.name] : e.target.value
            })
            console.log(product)
        }
            const filedata =(e) =>{
                setProduct({...product , image : e.target.files[e]})
            }
            const pname= useRef(null)
            const submitData = async (e) => {
                e.preventDefault()
                if (!product.pname){
                    alert("Please Enter Product Name !")
                    pname.current.focus() 
                } else if(!product.cprice){
                    alert("Enter Cost Price")
                }else if(!product.cprice){
                    alert("Enter Selling Price")
                }else if(!product.feature){
                    alert("Enter Feature of Product")
                }else if(!product.image){
                    alert("Please Upload Image")
                }else{
                    const formData= new formData()
                    formData.append('image', product.image, product.image.name)
                    formData.append('pname', product.pname)
                    formData.append('cprice', product.cprice)
                    formData.append('sprice', product.sprice)
                    formData.append('feature', product.feature)
                    formData.append('offer', product.offer)
                }

            }
    return(
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <div className="product-form">
                    <NavLink to={'/pages/Products'}> <button> Back </button></NavLink>
                </div>

                </div>
            </div>
                    <div className="row mt-3">
                <div className="col-12">
                <div className="product-form">
                     <h5> Fill Product Details </h5> <hr></hr>
                     <form>
                        <div className="row">
                        <div className="col-lg-6 c0l-md-6 col-sm-12">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Product Name <sup> <span style={{color:'red'}}> * </span></sup></label>
                            <input type="text" name="pname" class="form-control" onChange={onValueChange} ref={pname} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name "/>
    
                            </div>

                        </div>
                        <div className="col-lg-6 c0l-md-6 col-sm-12">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Cost Price <sup> <span style={{color:'red'}}> * </span></sup></label>
                            <input type="text" name="cprice" class="form-control" onChange={onValueChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Cost Price "/>
    
                            </div>

                        </div>
                        <div className="col-lg-6 c0l-md-6 col-sm-12">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Selling Price <sup> <span style={{color:'red'}}> * </span></sup></label>
                            <input type="text" name="sprice" class="form-control" onChange={onValueChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Selling price"/>
    
                            </div>

                        </div>
                        <div className="col-lg-6 c0l-md-6 col-sm-12">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Feature <sup> <span style={{color:'red'}}> * </span></sup></label>
                            <input type="text" name="feature" class="form-control" onChange={onValueChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Feature "/>
    
                            </div>

                        </div>
                        <div className="col-lg-6 c0l-md-6 col-sm-12">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Offer <sup> <span style={{color:'red'}}> * </span></sup></label>
                            <input type="text" name="offer" class="form-control" onChange={onValueChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Offer "/>
    
                            </div>

                        </div>
                        <div className="col-lg-6 c0l-md-6 col-sm-12">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Image <sup> <span style={{color:'red'}}> * </span></sup></label>
                            <input type="file" name="iamge" class="form-control" onChange={filedata} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
                            </div>

                        </div>

                        </div>
                        <div className="row">
                        <div className="col-12">
                        <div className="submit-btn" style={{display:'block', float:'right'}}>
                                <button> Reset </button>
                                <button style={{backgroundColor:'#67AE6E'}} onClick={submitData}> Submit </button>
                        </div>

                        </div>

                        </div>
                     </form>
                </div>

                </div>
            </div>


            </div>
        </>
    )
}
export default ProductForm;