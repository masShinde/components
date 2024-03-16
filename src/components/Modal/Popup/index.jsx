import React, { forwardRef, useImperativeHandle, useRef, useState} from "react";
import "./styles.css"


const Popup = forwardRef((props, ref) => {

    const popRef = useRef()

    const [show, setShow] = useState(false)

    useImperativeHandle(ref, ()=> {
        return {
            showPopup(){
                setShow(true)
            },
            closePopup(){
                setShow(false)
            },
            isPopupOpen(){
                return show
            }
        }
    })

    const onCloseHandler = () => {
        ref?.current?.closePopup?.()
    }

    return (
        <>
        {show && ( 
            <div ref={popRef} className="popup-container">

                <button onClick={onCloseHandler} >Close me</button>
            </div>
        )}
        </>
    )
})

export default Popup