import React, { useEffect, useRef, useState } from "react";
import "./styles.css"

const Carousel = () => {

    const images = [
        {index: 0, src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {index: 1, src: "https://c8.alamy.com/compfr/amak0n/plume-de-paon-amak0n.jpg"},
        {index: 2, src: "https://c8.alamy.com/compfr/twef3x/gros-plan-d-une-image-d-une-couleur-de-son-plumage-du-paon-twef3x.jpg"},
        {index: 3, src: "https://c8.alamy.com/compfr/e8fh0t/portrait-de-peacock-e8fh0t.jpg"},
        {index: 4, src: "https://c8.alamy.com/compfr/er8nn1/peacock-dans-une-foret-tropicale-avec-des-plumes-colorees-correction-tonale-degrade-filtre-photo-er8nn1.jpg"}
    ]

    const timerId = useRef()
    const [currentImage, setCurrentImage] = useState(0)
    const [updatedImage, setUpdatedImage] = useState(false)

    const updateCurrentImage = (next) => {
            setCurrentImage(prev => {
                if(next){
                    if(prev === images?.length - 1)
                    return 0
                    return prev + 1
                }else{
                    if(prev == 0)
                        return images?.length - 1
                    return prev - 1
                }
            })
        
    }

    useEffect(()=> {

        timerId.current = setInterval(()=> {
            updateCurrentImage(true)
        },3000)

        return  () => {
            if(timerId?.current)
                clearInterval(timerId?.current)
        }
    },[updatedImage])

    const handleButtonClick = (type) => {
        if(type == "left"){
            updateCurrentImage(false)
        }else{
            updateCurrentImage(true)
        }
        setUpdatedImage(!updatedImage)
    }


    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                    <button onClick={()=> handleButtonClick("left")} className="button button-left">&lt;</button>
                        <img src={images?.[currentImage]?.src} key={images?.[currentImage]?.index} className={`carousel-image`} />
                    <button onClick={()=> handleButtonClick("right")} className="button button-right">&gt;</button>
            </div>
        </div>
    )
}

export default Carousel

