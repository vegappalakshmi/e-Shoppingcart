import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { GET_CHECKOUT_DATA } from '../graphql/queries/ProductGetElements';
import { useMutation, useQuery } from '@apollo/client';
import ShoppingCartPage from '../components/ShoppingCartPage';
import { REMOVE_FROM_CART } from '../graphql/mutation/AddToCart';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CheckoutPage = () => {
    const { state } = useLocation();
    const { checkoutToken } = state;
    const { data } = useQuery(GET_CHECKOUT_DATA, { variables: { checkoutToken: checkoutToken } });
    const [removeItemFromCart] = useMutation(REMOVE_FROM_CART)
    const [ids, setIds] = useState<string[]>([])

    const convertData = () => {
        const { checkout: { lines } } = data;
        const newData = lines.map((item: any) => {
            return {
                id: item?.id,
                name: item?.variant?.product.name,
                price: item?.totalPrice?.gross.amount,
                image1: item?.variant?.product.thumbnail.url
            }
        })
        return newData.filter((item: any) => !ids.includes(item.id) );
    }

    const removeFromCart = async (id: string) => {
        // const params = { variables: { token: checkoutToken, lineId: id } }
        // await removeItemFromCart(params)
        if(!ids.includes(id)) {
            setIds(ids.concat(id))
        }
    }

    const handleSearch = (searchTerm: string) => {
        // Implement your search logic here
        console.log('Search ter:', searchTerm);
    };
    if (!data) {
        return null;
    }
    return (
        <>
        <Header onSearch={handleSearch} />
        <div>
            <ShoppingCartPage
                cartItems={convertData()}
                removeFromCart={removeFromCart}
            />
        </div>
        <Footer />
        </>
    )
}

export default CheckoutPage;