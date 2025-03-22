import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function TopCards(){
   const { somevalue } = useSelector((state)=>state.somevalue)
   const [currentState, setCurrentState] = useState([])

   const dispatch = useDispatch();


   function performOnBtnClick () {
       dispatch({type: "SOME_ARRAY", payload: currentState})
   }
    return(
        <div> 
            
         <button onClick={performOnBtnClick}>Done</button>
        </div>
    )
}