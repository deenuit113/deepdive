import React from 'react'
import Type from '../../components/Type'

const OrderPage = ({ setStep }) => {
    return (
        <div>
            <h1>Travel Products</h1>
            <div>
                <Type orderType="products"/>
            </div>
            <div style={{display: 'flex', margin: '50px'}}>
                <div style={{ width: '50%'}}>
                    <Type orderType="packages"/>
                </div>
                <div style={{ width: '50%'}}>
                    <p>Total Price: </p>
                    <br/>
                    <button onClick={() => setStep(1)}>주문</button>
                </div>
            </div>
        </div>
    )
}

export default OrderPage