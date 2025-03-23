import { useEffect } from "react"

export default function GoogleButtonDesign(){

    const clientId = import.meta.env.VITE_CLIENT_ID;
    console.log(123, clientId);
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
        console.log("Google Login Token:", response.credential);
      }

    return(
        <div> 
             <div id="google-signin-btn"></div>
        </div>
    )
}