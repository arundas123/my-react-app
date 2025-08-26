import React from "react";
import '../css/lookingsection.css';

const LookingSection = () => {
    return(
        <>
                    <div className="looking-for-section container-lg">
                        <h3 className="fw-bold mb-4">People are also looking for</h3>
                            <div className="tag-list">
                    {[
                        "Blue diamon almonds",
                        "Angie’s Boomchickapop Corn",
                        "Salty kettle Corn",
                        "Chobani Greek Yogurt",
                        "Sweet Vanilla Yogurt",
                        "Foster Farms Takeout Crispy wings",
                        "Warrior Blend Organic",
                        "Chao Cheese Creamy",
                        "Chicken meatballs",
                        "Blue Diamon Almonds",
                        "Angie’s Boomchickapop Corn",
                        "Salty kettle Corn",
                        "Chobani Greek Yogurt",
                        "Sweet Vanilla Yogurt",
                        "Foster Farms Takeout Crispy wings",
                        "Warrior Blend Organic",
                        "Chao Cheese Creamy",
                        "Chicken meatballs"
                    ].map((item, index) => (
                        <span className="tag-item" key={index}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}
export default LookingSection;