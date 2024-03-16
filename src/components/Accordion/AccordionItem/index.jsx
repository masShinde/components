import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./styles.css"

const AccordionItem = (props) => {
    const {accordionIndex, accordionTitle, accordionDescription, onAccordionClick, show} = props
    
    const onClickHandler = () => {
        onAccordionClick(accordionIndex)
    }

    return (
        <>
            <div className="accordionItemWrapper">
                <div onClick={onClickHandler} className="accordionTitle">
                    {accordionTitle}
                </div>
                {<div className="accordionDescriptionstyle" style={{display : show ? "block" : "none" }}   >
                    {accordionDescription}
                </div>}
            </div>
        </>
    )
}


export default AccordionItem