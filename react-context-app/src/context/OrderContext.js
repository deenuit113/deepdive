import { createContext, useState, useMemo, useEffect } from "react";


const pricePerItem = {
    products: 1000,
    options: 500,
}

function calculateSubTotal(orderType, orderCounts) {
    let optionCount = 0;
    for(const count of orderCounts[orderType].values()){
        optionCount += count;
    }
    return optionCount * pricePerItem[orderType];
}

export const OrderContext = createContext();

export function OrderContextProvider(props) {

    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map(),
    });

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        totals: 0,
    });

    useEffect(() => {
        const productsTotal = calculateSubTotal("products", orderCounts);
        const optionsTotal = calculateSubTotal("options", orderCounts);
        const total = productsTotal + optionsTotal;
        setTotals({
            products: productsTotal,
            options: optionsTotal,
            totals: total,
        });
    },[orderCounts]);

    const value = useMemo(() => {

        function updateItemCount(itemName, newItemCount, optionType) {
            const oldOrderMap = orderCounts[optionType];
            const newOrderMap = new Map(oldOrderMap);

            newOrderMap.set(itemName, parseInt(newItemCount));

            orderCounts[optionType] = newOrderMap;

            const newOrderCounts = {...orderCounts};
            newOrderCounts[optionType] = newOrderMap;
            setOrderCounts(newOrderCounts);
        }


        return [{ ...orderCounts, totals }, updateItemCount]
    }, [orderCounts, totals])


    return <OrderContext.Provider value={value} {...props}/>
    // return <OrderContext.Provider value={}>
    //     {props.children}
    // </OrderContext.Provider>
}