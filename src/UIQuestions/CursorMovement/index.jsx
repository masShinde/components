import React, {useEffect, useRef, useState} from "react";
import "./styles.css"

const CursorMove = () => {

    const compRef = useRef()

    const [cursorPosition, setCursorPosition] = useState({left: 0, right: 0})

    const updateCursorPositions = (e) => {
        setTimeout(()=> {
            setCursorPosition({
                left: e?.pageX,
                top: e?.pageY
            })
        },150)
    }

    useEffect(()=> {
        compRef?.current?.addEventListener('mousemove', updateCursorPositions)
        return ()=> {
            compRef?.current?.removeEventListener('mousemove', updateCursorPositions)
        }
    }, [])


    return <div ref={ref => compRef.current = ref } className="wrapper">
                <div className="cursor" style={{left: cursorPosition?.left, top: cursorPosition?.top}}>
            </div>
    </div>
}

export default CursorMove