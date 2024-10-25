import React from 'react'
import Type from '../../components/Type'

const OrderPage = () => {
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

                </div>
            </div>
        </div>
    )
}

export default OrderPage