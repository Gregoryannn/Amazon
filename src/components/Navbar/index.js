import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
    return (
        <div className="nav">
            <img
                className="nav__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className="nav__search">
                <input className="nav__searchInput" type="text" />
                <SearchIcon className="nav__searchIcon" />
            </div>

            <div className="nav__right">
                <div className="nav__right__option">
                    <span className="nav__right__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="nav__right__optionLineTwo">Sign In</span>
                </div>

                <div className="nav__right__option">
                    <span className="nav__right__optionLineOne">Returns</span>
                    <span className="nav__right__optionLineTwo">& Orders</span>
                </div>

                <div className="nav__right__option">
                    <span className="nav__right__optionLineOne">Your</span>
                    <span className="nav__right__optionLineTwo">Prime</span>
                </div>

                <div className="nav__right__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="nav__right__optionLineTwo nav__right__basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;