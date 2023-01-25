import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate asperiores corrupti, 
                        dolore veritatis voluptates enim velit esse? Obcaecati reiciendis laborum porro doloremque 
                        eius exercitationem libero vel perferendis maiores nihil?
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis autem aliquid deleniti similique expedita reiciendis 
                        aperiam voluptates asperiores quam id, commodi inventore delectus dolor vero! Similique illo natus possimus impedit!
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Ecommerce</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer