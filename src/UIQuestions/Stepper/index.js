import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import "./styles.css"
import Step from "./Step"
import Circle from "./Circle"

const Stepper = () => {

    const refs = useRef({})

    const [ lineSpacing, setLineSpacing] = useState({})
    const [ spacings, setSpacings ] = useState([])

    const data = [
        'first',
        'second',
        'third',
        'fourth'
    ]

    const getLineWidth = () => {
        const firstPos = refs?.current?.['0']?.getBoundingClientRect()?.x
        const lastPos = refs?.current?.[`${data?.length - 1}`]?.getBoundingClientRect()?.x;
        return ( lastPos - firstPos )+ "px"
    }
 
    const getLeftSpace = () => {
        const firstPos = refs?.current?.['0']?.getBoundingClientRect()?.left + (refs?.current?.['0']?.getBoundingClientRect()?.width / 2)
        return (firstPos )+ "px"
    }
    
    useLayoutEffect(()=> {
        setLineSpacing({
            width: getLineWidth(),
            left: getLeftSpace()
        })
        const spacing = [] 
        Object.keys(refs?.current)?.map((val, i) => {
            const leftSpacing = (refs?.current?.[`${i}`]?.getBoundingClientRect()?.left) + (refs?.current?.['0']?.getBoundingClientRect()?.width / 2)
            spacing.push(leftSpacing)
        })
        setSpacings(spacing)
    }, [refs.current])

    
    return (
        <>
            <div >
                <div className={`wrapper`}>
                    <div className="line" style={{width: lineSpacing?.width, left: lineSpacing?.left}}>
                    </div>
                    {data?.map?.((_, i)=> <Circle key={i} index={i} style={{left: spacings[i]}}  />)}
                </div>
                <div className={`wrapper text-container`}>
                {data?.map?.((val, index) => <Step key={index} ref={ref => refs.current[index] = ref} text= {val} index={index} />)}
                </div>
            </div>
        </>
    )
}

export default Stepper