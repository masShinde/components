import React from "react";
import "./styles.css";

const PriceRow = (props) => {
  const { quantity = 0, price = 0, itemTotal = 0, onChange } = props || {};

  const handleOnChange = (e) => {
    const type = e?.target?.name
    const value = e?.target?.value

    if(type === 'quantity')
        onChange({...props, quantity: e.target.value, itemTotal: price * value } )
    else
        onChange({...props, price: e.target.value, itemTotal : quantity * value})
  }

  return (
    <tr className="price-row">
      <td><input type="number" placeholder={"Enter the Quantity"}  name="quantity" value={undefined} onChange={handleOnChange} /></td>
      <td><input type="number" placeholder={"Enter the Price"} name="price" value={undefined} onChange={handleOnChange} /></td>
      <td>{itemTotal}</td>
    </tr>
  );
};

export default PriceRow;
