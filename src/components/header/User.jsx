//React & Routing
import React, { useRef, useState } from "react";
//css
import '../css/user.css';
//React Icons
import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo.svg'
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsBookmarkDash } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";
import { GrDeliver } from "react-icons/gr";
import { IoLeafSharp } from "react-icons/io5";
// Images - Banner & Categories
import Banner from '../../assets/images/banner-1.jpg';
import { FaChevronLeft , FaChevronRight } from "react-icons/fa6";
import Fruits from '../../assets/images/fruits.jpg';
import Buiscuit from '../../assets/images/buiscuit.jpg';
import Wine from '../../assets/images/wine.jpg';
import Oil from '../../assets/images/oil.jpg';
import Meat from '../../assets/images/meat.jpg';
import Leaf from '../../assets/images/leaf.jpg';
import Eggs from '../../assets/images/eggs.jpg';
import Cake from '../../assets/images/cake.jpg';
// Component
import SellingProducts from "./SellingProducts";
import FeatureProducts from "./FeatureProducts";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
//Images- Promotion Banner
import Banners from '../../assets/images/banner-2.jpg';
import BannerCombo from '../../assets/images/bannercombo.jpg'; 
import BannerCoupons from '../../assets/images/bannercoupons.jpg';
import Signup from  '../../assets/images/signup.jpg';
import Blog from "./BlogSection";
import BannerApp from  '../../assets/images/bannerapp.png';
//App Store Image
import App from '../../assets/images/app.png'; 
import Google from '../../assets/images/google.png'; 
import LookingSection from "./LookingSection";
import Footer from ".../footer/Footer.jsx";

    const User= ()=> {
        const scrollRef = useRef(null);
    
    const [categories] = useState([
        { name: "Fruits & Veges", img: Fruits },
        { name: "Breads & Sweets", img: Buiscuit },
        { name: "Fruits & Veges", img: Wine },
        { name: "Beverages", img: Oil },
        { name: "Meat Products", img: Meat },
        { name: "Breads", img: Leaf },
        { name: "Fruits & Veges", img: Eggs },
        { name: "Breads & Sweets", img: Cake },
        ]);

    
        const scrollLeft = () => {
             scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
         };
  
        const scrollRight = () => {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
         };

    return(
        <>
        {/* Header tag */}

            <div className="header d-flex align-items-center justify-content-between ">
                <div className="row d-flex align-items-center">

                {/* Logo */}

                    <div className="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center">
                        <img src={Logo} alt={Logo} height={'40px'} width={'80%'}/>
                        <span style={{marginRight:'15px', fontSize: '24px', fontweight: 'bold'}}><FiMenu id="icon"/></span>
                    </div>
            
                {/* Center-Searchbar */}

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="searchbar d-flex align-items-center">
                        <form>
                            <div className="inner-bar mb-3">
                                <input type="All Categories" class="form-control border-0 bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="All Categories">
                                </input>
                            </div>
                        </form>
                        <form>
                            <div className="inner-box mb-3">
                                <input type="search" class="form-control border-0 bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for more than 20,000 products">
                                </input>
                            </div>
                        </form>

                {/*Icons*/}

                        <div className="search-icon">
                            <span ><BsSearch  size={20}/> </span>
                        </div>

                {/* Right-Navigation Links */}

                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-12 menu">
                                        <nav>
                                            <ul className="d-flex justify-content-end list-unstyled mb-0 gap-4">
                                                <li>
                                                    <NavLink to="/" className="nav" style={{color:'green'}}>HOME</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/pages" className="nav">PAGES</NavLink>
                                                   
                                                </li>
                {/* Cart-icon */}                                 
                                                
                                                <div className="cart-icon d-flex justify-content-end list-unstyled mb-0 gap-4">
                                                
                                                        <span> <CgProfile size={24}/> </span>
                                                        <span> <BsBookmarkDash size={24}/> </span>
                                                        <span> <FaBasketShopping size={24}/> </span>
                                                </div>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* Banner-image */}

                            <div className="banner">
                                <img src={Banner} alt={Banner} width="100%" />
                            <div className="banner-content">
                                <h1>
                                    <span> Organic Foods </span> <br></br>at your <span> <br></br>Doorsteps</span>
                                        </h1>
                                            <p>Dignissim massa diam elementum.</p>
                                        <div className="banner-buttons">
                                    <button className="btn start">START SHOPPING</button>
                                <button className="btn join">JOIN NOW</button>
                                
                            </div>
                {/* Feature section */}

                            <div className="feature-section d-flex align-items-center mt-5">
                                <div>
                                    <h3>14k+</h3>
                                        <p>Product Varieties</p>
                                </div>
                                    <div>
                                        <h3>50k+</h3>
                                            <p>Happy Customers</p>
                                    </div>
                                <div>
                                    <h3>10+</h3>
                                        <p>Store Locations</p>
                                </div>
                         </div>
                {/* Service Cards Section */}          
                            
                            <div className="service-section d-flex justify-content-center mt-5">
                                <div className="row w-100">
                                    <div className="col-lg-4 col-md-4 col-sm-12 p-0 m-0">
                                        <div className="service-card fresh">
                                            <span><FiRefreshCw size={50}/></span>
                                                <h5>Fresh from farm</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="service-card organic">
                                            <span><IoLeafSharp size={50} /></span>
                                                <h5>100% Organic</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                        </div>
                                    </div>
                                        
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="service-card delivery ">
                                            <span><GrDeliver size={50} /></span>
                                                <h5>Free delivery</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                        </div>
                                    </div>
                {/* category-section */}
                                    <div className="category-header d-flex justify-content-between align-items-center">
                                        <h2>Category</h2>
                                            <div className="category-actions d-flex align-items-center gap-2">
                                                <button className="view-all">View All</button>
                                                <button className="arrow-btn" onClick={scrollLeft}><FaChevronLeft /></button>
                                                <button className="arrow-btn" onClick={scrollRight}><FaChevronRight /></button>
                                            </div>
                                        </div>
                                    <div className="category-items" ref={scrollRef}>
                                        {categories.map((item, index) => (
                                            <div className="category-card text-center" key={index}>
                                                <img src={item.img} alt={item.name} />
                                                    <p className="mt-2">{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                        <div className="selling-products d-flex justify-content-between align-items-center">
                                             <h2>Best Selling Products</h2>
                                                <div className="selling-actions d-flex align-items-center gap-2">
                                                    <button className="view-all">View All</button>
                                                </div>  
                                        </div>
                                            <div className="selling-items d-flex flex-wrap gap-5 mt-4">
                                                {SellingProducts.map((item,index) => (

                                                    <div className="selling-card text-center" key={index}>
                                                        <img src={item.img} alt={item.img}/>
                                                            <p className=" mt-2 product-name">{item.name}</p>
                                                        <div className="icons  d-flex justify-content-center gap-1">
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaRegStarHalfStroke size={18} id="icons" /></span>
                                                            <span> ({item.reviews})</span>
                                                        </div>
                                                        <div className="price-section mt-2">
                                                            <span className="text-muted text-decoration-line-through">${parseFloat(item.oldPrice) .toFixed(2)}</span>
                                                            <span> ${parseFloat(item.newPrice) .toFixed(2)}</span>
                                                            <span className="discount fw-bold">{item.discount}</span>
                                                        </div>
                                                        
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                {/* Promotion Banner-image */} 

                                        <div className="promotion-banner container mt-5">
                                            <div className="row">
                                                <div className="col-12 position-relative mb-4">
                                                    <img src={Banners} alt={Banners} width="120%" />
                                                <div className="promo-content position-absolute">
                                                    <h3>Items on SALE</h3>
                                                        <p>Discounts up to 30%</p>
                                                            <button className="shop-now">SHOP NOW</button>
                                                </div>
                                             </div>
                                             

                                         <div className="col-lg-6 col-md-6 col-sm-12 position-relative mb-4">
                                            <img src={BannerCombo} alt="Bannerss" style={{ width:'120%'}}/>
                                                <div className="promo-content-small position-absolute">
                                                    <h3>Combo Offers</h3>
                                                        <p>Discount Up to 50% </p>
                                                            <button className="shop-now">SHOP NOW</button>
                                                </div>
                                            </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 position-relative mb-4">
                                            <img src={BannerCoupons} alt="Bannersss" style={{width:'80%'}}/>
                                                <div className="promo-content-small position-absolute">
                                                    <h3>Discount Coupons</h3>
                                                        <p>Discount Up to 50% </p>
                                                            <button className="shop-now">SHOP NOW</button>
                                                </div>
                                            </div> 
                {/* Featured Products Section */}

                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="feature-header d-flex justify-content-between align-items-center mt-5">
                                                        <h2>Featured Products</h2>
                                                    <div className="feature-actions d-flex align-items-center gap-2">
                                                        <button className="view-all-btn">View All</button>
                                                        <button className="slider-btn" onClick={scrollLeft}><FaChevronLeft /></button>
                                                        <button className="slider-btn" onClick={scrollRight}><FaChevronRight /></button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        
                {/* Featured Product Items */}

                                            <div className="feature-items d-flex gap-5 mt-4" ref={scrollRef}>
                                                {FeatureProducts.map((item,index) => (

                                                    <div className="feature-card text-center" key={index}>
                                                        <img src={item.img} alt={item.img}/>
                                                            <p className=" mt-2 product-name">{item.name}</p>
                                                        <div className="icons  d-flex justify-content-center gap-1">
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaStar size={18} id="icons" /></span>
                                                            <span> <FaRegStarHalfStroke size={18} id="icons" /></span>
                                                            <span> ({item.reviews})</span>
                                                        </div>
                                                        <div className="price-section mt-2">
                                                            <span className="text-muted text-decoration-line-through">${parseFloat(item.oldPrice) .toFixed(2)}</span>
                                                            <span> ${parseFloat(item.newPrice) .toFixed(2)}</span>
                                                            <span className="discount fw-bold">{item.discount}</span>
                                                        </div>
                                                        
                                                </div>
                                            ))}
                                        </div>
                {/* Promo Section*/}
                                        <div className="signup-section container-fluid">
                                            <div className="signup-content-wrapper"> 
                                                <img src={Signup} alt="Discount Background" style={{ objectFit: "cover" }}/>
        
                                            <div className="signup-text"> 
                                                <h2>Get 25% Discount on your first purchase</h2>
                                                    <p> Just sign up & register now to become a member.</p>
                                                    <div className="form-wrapper">
                                                <form>
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" id="nameInput" placeholder="Name" />
                                                        <input type="email" className="form-control" id="emailInput" placeholder="Email Address" />
                                                    </div>
                                                        <button type="submit" className="btn btn-dark">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        </div>
                {/* Blog Section */}
                
                                        <div className="recent-blog d-flex justify-content-between align-items-center">
                                            <h2>Our Recent Blog</h2>
                                                <div className="recent-actions d-flex align-items-center gap-2">
                                                    <button className="view-all-btn">View All</button>
                                                </div>
                                            </div>
                                                
                                                <div className="row">
                                                    {Blog.map((item) => (
                                                <div className="col-lg-4 col-md-4 col-sm-12" key={item.id}>
                                                    <div className="card blog-card h-100 shadow-sm rounded-3">
                                                        <img src={item.image} alt={item.title} style={{ height: '150px', objectFit: 'cover', width:'50px' }} />
                                                    <div className="card-body">
                                                        <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
                                                            <span role="img" aria-label="calendar">📅</span> {item.date}
                                                            <span role="img" aria-label="tag">📂</span> {item.category}
                                                        </p>
                                                            <h5 className="card-title">{item.title}</h5>
                                                        <p className="card-text" style={{ fontSize: "14px" }}>{item.excerpt}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        ))}
                                    </div>
                                </div>
                {/* App Section */}

                                    <div className="app-section">
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                 <h2 className="fw-bold mb-3">Download Organic App</h2>
                                                <p className="text-secondary mb-4">Online Orders made easy, fast and reliable</p>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <img src={App} alt="App Store" style={{ height: "50px" ,marginRight:'200px' }} />
                                                <img src={Google} alt="Google Play" style={{ height: "50px" }} />
                                            </div>

                                        </div>
                                            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                                <img src={BannerApp} alt="Mobile App Preview" style={{ height: "400px", width: "auto" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <LookingSection />    
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            
            </>
        )
    }

export default User;