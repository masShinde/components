import React from "react"
import "./styles.css"

const Circle = ({index, style}) => {


    return (
        <div className="circle" style={style} >
            {index}
        </div>
    )


}

export default Circle