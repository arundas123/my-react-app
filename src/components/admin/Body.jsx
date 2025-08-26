import React, { useState } from "react";
import '../css/body.css'
import { FaProductHunt } from "react-icons/fa";
import CardArray from "./CardArray";

const Body = ()=> {

    const [card]= useState(CardArray)
    return(
        <>
                <div className="container-fluid">
                    <div className="row top-title">
                        <div className="col-12">
                            <h4> Dashboard</h4> <hr></hr>
                        </div>
                    </div>
                <div className="row">
                    {
                        card.map((item)=>{
                            return(
                               <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="home-card mt-3" style={{backgroundColor:`${item.bgcolor}`}}>
                        <div className="home-card-left">
                        <div className="card-num">
                            {item.qua}
                        </div>
                        <div className="card-title">
                         {item.name} 
                        </div>

                        </div>
                        <div className="home-card-right">
                            {item.icons}
                        </div>

                        </div>

                    </div> 
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )


}

export default Body;