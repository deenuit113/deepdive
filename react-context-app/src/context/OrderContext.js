import { createContext, useState, useMemo, useEffect } from "react";

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


        return [{ ...orderCounts }, updateItemCount]
    }, [orderCounts])


    return <OrderContext.Provider value={value} {...props}/>
    // return <OrderContext.Provider value={}>
    //     {props.children}
    // </OrderContext.Provider>
}