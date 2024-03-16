import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {

    const {isMultiSelect = false} = props
    
    const data = [
        {
            accordionIndex: 1,
            accordionTitle: "First Accordion",
            accordionDescription: `This is the first item's accordion body.It is shown by default`
        },
        {
            accordionIndex: 2,
            accordionTitle: "Second Accordion",
            accordionDescription: `This is the Second item's accordion body.It is shown by default`
        },
        {
            accordionIndex: 3,
            accordionTitle: "Third Accordion",
            accordionDescription: `This is the Third item's accordion body.It is shown by default`
        }
    ]
    
    const [selectedIndex, setSelectedIndex] = useState([-1])

    console.log(selectedIndex);

    const onAccordionClick = (index) => {
        if(isMultiSelect){
            console.log(selectedIndex);
            if(selectedIndex?.indexOf(index) > -1){
                const updatedIndices = selectedIndex?.filter(i => i != index)
                setSelectedIndex(updatedIndices)
            }
            else{
                setSelectedIndex([...selectedIndex, index])
            }
        }
        else{
            if(selectedIndex?.[0] == index)
                setSelectedIndex([-1])
            else
                setSelectedIndex([index])
        }
    }


    return (
        <div>
            {
                data?.map((accordionData) => (
                    <AccordionItem 
                        key={accordionData?.accordionIndex}
                        onAccordionClick={onAccordionClick} 
                        {...accordionData} 
                        show={selectedIndex?.indexOf(accordionData?.accordionIndex) > -1} 
                    />)
                )
            }
        </div>
    )

}

export default Accordion