import React from "react";
import '../css/footer.css';
import Logo from '../../assets/images/logo.svg'
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiAmazonLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
                <div className="footer-section container mt-5 pt-5">
                    <div className="row gx-5">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                        <img src={Logo} alt={Logo} height={'60px'}/>
                            <div className="social-icons">
                                
                                <span  className="icon-gap" ><TiSocialFacebook   size={20}/> </span>
                                <span  className="icon-gap"> <CiTwitter    size={20}/> </span>
                                <span  className="icon-gap"> <FaYoutube     size={20}/> </span>
                                <span  className="icon-gap"> <FaInstagram      size={20}/> </span>
                                <span  className="icon-gap"> <RiAmazonLine      size={20}/> </span>

                            </div>
                        </div>
                                <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="footer-menu-organic">
                                
                                    <h5 className="mb-3">Organic</h5>
                                        <ul className="list-unstyled ">
                                            <li>About us</li>
                                            <li>Conditions</li>
                                            <li>Our Journals</li>
                                            <li>Careers</li>
                                            <li>Affiliate Programme</li>
                                            <li>Ultras Press</li>
                                        </ul>
                                </div>
                                </div>

                                <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="footer-menu-quicklinks">
                                    
                                    <h5 className="fw-bold mb-3">Quick Links</h5>
                                        <ul className="list-unstyled ">
                                            <li>Offers</li>
                                            <li>Discount Coupons</li>
                                            <li>Stores</li>
                                            <li>Track Order</li>
                                            <li>Shop</li>
                                            <li>Info</li>
                                        </ul>
                                </div>
                                </div>

                                <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="footer-menu-customer">
                                
                                    <h5 className="fw-bold mb-3">Customer Service</h5>
                                        <ul className="list-unstyled ">
                                            <li>FAQ</li>
                                            <li>Contact</li>
                                            <li>Privacy Policy</li>
                                            <li>Returns & Refunds</li>
                                            <li>Cookie Guidelines</li>
                                            <li>Delivery Information</li>
                                        </ul>
                                </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="footer-menu-subscribe">
                                
                                    <h5 className="fw-bold mb-3 ">Subscribe Us</h5>
                                        <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                                    <form>
                                        <div className="inner-box mb-3">
                                            <input type="email" class="form-control border-0 bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
                                            <button className="btn btn-dark">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                                </div>
                                </div>
                            
                                <div className="copyright-section">
                                    <p className="mb-0 copyright-text">© 2024 Organic.All rights reserved. </p>
                                    <p className="mb-0 template-info"> HTML Template by <a href="#">TemplatesJungle</a> Distributed by <a href="#">ThemeWagon</a></p>
                                </div>
                            </div>

                        </>
                    )
                }
export default Footer;































