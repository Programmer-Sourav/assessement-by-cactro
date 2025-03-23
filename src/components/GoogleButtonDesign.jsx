import { useEffect } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function GoogleButtonDesign(){

    const clientId = import.meta.env.VITE_CLIENT_ID;
    const dispatch = useDispatch()
    const googleToken = useSelector((state)=>state.googleToken)
    console.log(123, clientId, googleToken);
    useEffect(()=>{
        console.log("Inside Google!")
        window.google?.accounts.id.initialize({
            client_id: import.meta.env.VITE_CLIENT_ID,
            callback: handleCredentialResponse,
          });
        window.google?.accounts.id.renderButton(
            document.getElementById("google-signin-btn"),
            { theme: "outline", size: "large" }
          );
    }, [])

    function handleCredentialResponse(response) {
        dispatch({type: "SOME_VALUE", payload: response.credential})
      }
      
      //console.log(2222, googleToken.googleToken)
    return(
        <div> 
             <div id="google-signin-btn"></div>
        </div>
    )
}