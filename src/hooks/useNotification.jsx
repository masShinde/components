import React, {useRef} from "react";

const useNotification = () => {
    const timerId = useRef(null)
    const toastRef = useRef(null)
  
    const removeToastNode = () => {
      if(toastRef?.current)
          document.body.removeChild(toastRef?.current)
      toastRef.current = null
    }
  
    const getColorByType = (type) => {
      switch(type){
        case "SUCCESS": return "success"
        case "WARNING": return "warning"
        case "ERROR": return "error"
        default : return "info"
      }
    }
  
    const createToast = (type, message) => {
      const toastMessage = document.createElement("div")
      toastMessage.classList.add("toast")
      toastMessage.classList.add(getColorByType(type))
      toastMessage.innerText = message
      toastRef.current = toastMessage
      document.body.appendChild(toastMessage)
      timerId.current = setTimeout(()=> {
        removeToastNode()
      },5000)
  
    }
  
    return {
      showNotification: ({ type, message }) => {
        console.log(type, message);
        if(timerId?.current){
          clearTimeout(timerId?.current)
          removeToastNode()
        }
         
        createToast(type, message)
      }
    }
  };

  export default useNotification