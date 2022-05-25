import React from 'react';
import './Checkout.css';
import Subtotal from '../../components/Subtotal';
import CheckoutProduct from '../../components/CheckoutProduct';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/dex/2020/PrimeDelivery/DEX_2020_PrimeDelivery_LP_CA_0407_Header_Desktop_3000x600.jpg"
                    alt="Currency Converter ad banner"
                />

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    <CheckoutProduct />
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}
export default Checkout;