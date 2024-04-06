import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import "./styles.css"

const AnalogClock = () => {

    const [handPos, setHandPos] = useState({sec: 0, hour: 0, min: 0})

    const intervalRef = useRef(null)

    const calculateHandMovement = (handType, prevValue) => {
        if(handType == 'hour'){
            return prevValue + 0.00833
        }else if(handType == 'min'){
            return prevValue + 0.1
        }else{
            return prevValue + 1
        }
    }

    const updateHandsPosition = () => {       
        setHandPos(prev => {
            const newPos = {
                min: calculateHandMovement('min', prev.min),
                hour: calculateHandMovement('hour', prev.hour),
                sec: calculateHandMovement('sec', prev.sec)
            }
            return newPos
        })
    }


     useEffect(() => {
       intervalRef.current = setInterval(()=> {
        updateHandsPosition()
       }, 1000)

       return ()=> {
         clearInterval(intervalRef.current)
       }
    }, [])

    return <div className="clock-container">
        <div className="clock-wrapper">
            <div style={{transform: ` translate(-50%, -100%) rotate(${handPos.hour}deg)`}} className="clock-hand hour-hand" ></div>
            <div style={{transform: ` translate(-50%, -100%) rotate(${handPos.min}deg)`}} className="clock-hand min-hand"></div>
            <div style={{transform: ` translate(-50%, -100%) rotate(${handPos.sec}deg)`}} className="clock-hand sec-hand"></div>
        </div>
    </div>

}

export default AnalogClock