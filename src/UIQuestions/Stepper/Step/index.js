import React, { forwardRef } from "react";
import "./styles.css"

const Step = forwardRef((props, ref) => {

    const {text} = props

    return (
        <div className={`step-container`}>
              <span ref={ref} className="text-wrapper">{text}</span>
        </div>
    )

})

export default Step