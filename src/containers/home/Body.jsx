import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
    return (
        <div>
            <div className="container">
        <section className="main">
            <div className="introduction"> 
                <h3>Welcome to Gamecart!!</h3>
                <h1 className="doc-para">This is where the FUN BEGINS..</h1>
                <Link to="products" className="main-btn primary-btn" onClick={()=>console.log("click")}>Get Started</Link>
            </div>
        </section>
        <h1 className="text-center">Products</h1>
        <section className="products">
            <div className="product games">
                <h1>Explore Games</h1>
            </div>
            <div className="product accessories">
                <h1>Accessories</h1>
            </div>
            <div className="product console">
                <h1>Consoles</h1>
            </div>
        </section>
        <h1 className="text-center">Connect us through social media</h1>
        <section className="social-media">
            <a href="#" className="link social-link" target="_blank"><i className="fab fa-facebook-f social-icon"></i></a>
            <a href="#" className="link social-link" target="_blank"><i className="fab fa-twitter social-icon"></i></a>
            <a href="#" className="link social-link" target="_blank"><i className="fab fa-instagram social-icon"></i></a>
            <a href="#" className="link social-link" target="_blank"><i className="fab fa-youtube social-icon"></i></a>
        </section>
    </div>
        </div>
    )
}

export default Body
