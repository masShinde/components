import React, { useRef } from "react"
import "./styles.css"
import Popup from "./Popup"


const Modal = () => {

    const popupRef = useRef()

    const onClickHandler = () => {
        if(popupRef?.current?.isPopupOpen()){
            popupRef?.current?.closePopup?.()
        }else{
            popupRef?.current?.showPopup?.()
        }
    }

    return (
        <div className="modal-container">
            <Popup ref={popupRef} />
            <button onClick={onClickHandler}>Click me</button>
        </div>
    )

}

export default Modal