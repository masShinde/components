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
  
    const createToast = (type, message, time = 5000) => {
      const toastMessage = document.createElement("div")
      toastMessage.classList.add("toast")
      toastMessage.classList.add(getColorByType(type))
      toastMessage.innerText = message
      toastRef.current = toastMessage
      document.body.appendChild(toastMessage)
      timerId.current = setTimeout(()=> {
        removeToastNode()
      },time)
  
    }
  
    const showNotification = ({ type, message, time }) => {
      if(timerId?.current){
        clearTimeout(timerId?.current)
        removeToastNode()
      }
       
      createToast(type, message, time)
    }

    return {
      showNotification: showNotification
    }
  };

  export default useNotification