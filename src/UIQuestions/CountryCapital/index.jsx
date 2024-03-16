import DATA from './data';
import {useState, useEffect, useRef} from "react";
import "./styles.css"
import Congrats from './Congratulations';

//render all items
//select any two
//if they don't make red and reset
//if they matches make green and remove
//if no other pair exits say congratulations


export default function CountryCapital() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isMatched, setIsMatched] = useState(false);
  const [randomizedArray, setRandomizedArray] = useState([])
  const timerId = useRef()
 
  const getPairs = () => {
    let op = []
    Object.keys(DATA)?.map(key => {
      op.push(key, DATA[key])
    })
    return op
  }

  const waitForTime = (callback, timeout, ...args) => {
    timerId.current = setTimeout(() => {
        const arr = args?.splice(0,1)
        callback(arr?.[0])
    }, timeout)
  }

  useEffect(()=> {
    const randomizedArray = getPairs()?.map(item => ({
      val: item,
      random: Math.random()
    }))
      ?.sort((a, b) => (b.random - a.random))
      ?.map(element => element.val);
    setRandomizedArray(randomizedArray)
  }, [])

  const removeMatchedValues = (arr) => {
    const filteredArray = randomizedArray?.filter(el => !(arr?.indexOf(el) > -1))
    setIsMatched(false)
    setRandomizedArray([...filteredArray])
  }

  const resetStyles = () => {
    setSelectedValues([]);
  }

  const onOptionSelection = (key) => {
    if(selectedValues?.length == 2){
      if(timerId?.current)
        clearTimeout(timerId?.current)
      setSelectedValues([key])
      if(isMatched) 
        removeMatchedValues()
      setIsMatched(false)
      return 
    }
    if(selectedValues?.length){
      if (DATA[selectedValues[0]] == key || DATA[key] == selectedValues[0]){
        setIsMatched(true)
        waitForTime(removeMatchedValues, 1000, [...selectedValues, key])
      }
      else{
        setIsMatched(false)
        waitForTime(resetStyles, 1000)
      }
    }
    setSelectedValues([...selectedValues, key])
  }

  const setBorderColor = (currentValue) => {
    if(selectedValues?.length == 1){
      if(selectedValues?.indexOf(currentValue) > -1)
      return {borderColor: 'blue'}
    }
    if(selectedValues?.length == 2){
      if(isMatched){
        if(selectedValues?.indexOf(currentValue) > -1)
          return {borderColor: 'green'}
      }else{
        if (selectedValues?.indexOf(currentValue) > -1)
          return {borderColor: 'red'}
      }
    }
    return null
  }

  return (
    <div className='wrapper'>
      {randomizedArray?.length > 0 ? randomizedArray?.map(val => (
        <div 
          style={setBorderColor(val)}
          onClick={() => onOptionSelection(val)} 
          className="choice" 
          >
          {val}
        </div>
        )
        )
        : <Congrats />
      }
    </div>
  )
}
