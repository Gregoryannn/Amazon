import React from 'react';
import Product from '../../components/Product';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/Movie/Store/WatchToGiveBackPride/4284_DESKTOP_TALL_HERO_1X_1500x600_EN._CB667166599_.jpg"
                    alt="prime video ad banner"
                />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Cracking the Coding Interview: 189 Programming Questions and Solutions Paperback – Illustrated, July 1 2015"
                        price={42.55}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="B07V6ZSHF4"
                        title="VIVO Electric 60 x 24 inch Stand Up Desk, Black Solid One-Piece Table Top, Black Frame, Height Adjustable Standing Workstation with Memory Preset Controller, DESK-KIT-1B6B"
                        price={499.0}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71PdiWTquRL._AC_SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Ninja BN801 Professional Plus Kitchen System with Auto-iQ, and 64 oz. max liquid capacity Total Crushing Pitcher, in a Black and Stainless Steel Finish"
                        price={267.81}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81W%2BZH79QRL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
                        price={79.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61nNGJH14kL._AC_SL1000_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="2021 Apple 11-inch iPad Pro (Wi-Fi + Cellular, 128GB) - Space Grey"
                        price={1199.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61-HhtLrcaS._AC_SL1000_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;