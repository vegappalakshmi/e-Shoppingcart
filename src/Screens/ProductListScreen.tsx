import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import ProductCarousel from '../components/ProductCarousel';
import { ADD_TO_CART, INIT_CART_TOKEN } from '../graphql/mutation/AddToCart';
import { GET_DATA } from '../graphql/queries/ProductGetElements';
import { ProductData } from '../types';
import checkoutIcon from "./../images/checkoutIcon.png";
import { useNavigate } from "react-router-dom";

const ProductListScreen = () => {
    const { data } = useQuery(GET_DATA);
    const [mutateFunction, { data: initCartData }] = useMutation(INIT_CART_TOKEN)
    const [addItemToCart] = useMutation(ADD_TO_CART)
    const [cartItems, setCartItems] = useState<number>(0);
    const history = useNavigate();
    useEffect(() => {
        mutateFunction()
    }, [])

    const getProductData = () => {
        const { products: { edges } } = data
        const formattedData = edges.map((item: any) => {
            const highestPrice = item?.node?.pricing?.priceRange?.stop?.gross.amount ?? 0;
            return {
                id: item?.node?.id,
                name: item?.node?.name,
                price: highestPrice,
                image1: item?.node?.thumbnail.url,
                checkoutId: item?.node?.variants![0]!.id!
            }
        })
        return formattedData;

    }

    const addToCart = async (productToAdd: ProductData) => {
        const params = { variables: { checkoutToken: initCartData?.checkoutCreate?.checkout?.token, variantId: productToAdd.checkoutId } }
        await addItemToCart(params)
        setCartItems(cartItems + 1)
       
    }

    if (!data) {
        return null;
    }

    return (
        <>
       {cartItems ? <button onClick={() => history('/Checkout', { state: { checkoutToken: initCartData?.checkoutCreate?.checkout?.token } })}>
        <img src={checkoutIcon} style={{width: 24, height: 24}} />
        <span style={{color: 'red'}}>{cartItems}</span>
        </button> : null
}
            <ProductCarousel products={getProductData()} addToCart={addToCart} />
        </>
        // <div></div>
    )
}
export default ProductListScreen;
