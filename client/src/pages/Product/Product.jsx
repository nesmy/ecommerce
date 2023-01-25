import React from "react"
import { useState } from "react";
import "./Product.scss"

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0);

    const images = [
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span>$999</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat, doloribus nesciunt qui minus placeat id, 
                consectetur commodi quis corporis numquam incidunt? Corporis impedit necessitatibus nam laboriosam unde sint accusantium?</p>
                <div className="quantity">
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product