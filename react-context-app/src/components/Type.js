import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Product from './Product';
import Option from './Option';
import ErrorBanner from './ErrorBanner';

const Type = ({ orderType }) => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchItems(orderType);

    }, [orderType]);

    const fetchItems = async () => { 
        try{
            const response = await axios.get(`http://localhost:4000/${orderType}`);
            setItems(response.data);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다"/>
    };

    const ItemComponent = orderType === 'products' ? Product : Option;

    const optionItems = items.map((item) => (
        <>
            <ItemComponent
                key={item.name}
                name={item.name}
                imagePath={item.imagePath}
            />
        </>

    ))

    return (
        <div>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격</p>
            <div style={{
                display: 'flex',
                flexDirection: orderType === "options" ? "column" : "row"
            }}>
                {optionItems}
            </div>
        </div>
    )
}

export default Type