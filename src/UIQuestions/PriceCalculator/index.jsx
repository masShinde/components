import React, { useState } from "react";
import "./styles.css"
import PriceRow from "./components/PriceRow";
import DATA from "./data";

const PriceCalculator = () => {

    const [priceData, setPriceData] = useState(DATA)
    const [total, setTotal] = useState(0)

    const handleAddRow = () => {
        const newIndex = priceData[priceData?.length -1]?.index + 1
        setPriceData([
            ...priceData,
            {index: newIndex, price: 0, quantity: 0, itemTotal: 0}
        ])
    }

    const onPriceChangeHandler = (updatedData) => {
        let total = 0
        const data = priceData?.map(priceObj => {
            if(priceObj?.index === updatedData?.index){
                total += updatedData?.itemTotal
                return updatedData
            }
            total += priceObj?.itemTotal
            return priceObj
        })
        setTotal(total)
        setPriceData([...data])
    }

    return (
        <div className="container">
            <h1>Price Calculator</h1>
            <table>
                <tbody>
                {priceData?.map(data => <PriceRow key={data?.index} {...data} onChange={onPriceChangeHandler} />)}
                </tbody>
            </table>
            <div className="total-div">{total}</div>
            <button onClick={handleAddRow}>Add Row</button>
        </div>
    )
}

export default PriceCalculator