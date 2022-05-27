import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import { auth } from '../../firebase';

const Navbar = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return ( <
        div className = "nav" >
        <
        Link to = "/" >
        <
        img className = "nav__logo"
        src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" /
        >
        <
        /Link> <
        div className = "nav__search" >
        <
        input className = "nav__searchInput"
        type = "text" / >
        <
        SearchIcon className = "nav__searchIcon" / >
        <
        /div> <
        div className = "nav__right" >
        <
        Link to = {!user && "/login" } >
        <
        div onClick = { handleAuthentication }
        className = "nav__right__option" >
        <
        span className = "nav__right__optionLineOne" >
        Hello, { user ? user.email : `Guest` } <
        /span> <
        span className = "nav__right__optionLineTwo" > {!user ? `Sign In` : `Sign Out` } < /span> <
        /div> <
        /Link>

        <
        div className = "nav__right__option" >
        <
        span className = "nav__right__optionLineOne" > Returns < /span> <
        span className = "nav__right__optionLineTwo" > & Orders < /span> <
        /div> <
        div className = "nav__right__option" >
        <
        span className = "nav__right__optionLineOne" > Your < /span> <
        span className = "nav__right__optionLineTwo" > Prime < /span> <
        /div> <
        Link to = "/checkout" >
        <
        div className = "nav__right__optionBasket" >
        <
        ShoppingBasketIcon / >
        <
        span className = "nav__right__optionLineTwo nav__right__basketCount" > { basket ? .length } <
        /span> <
        /div> <
        /Link> <
        /div> <
        /div>
    );
}
export default Navbar;