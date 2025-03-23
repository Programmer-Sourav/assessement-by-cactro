import { useEffect } from "react"

export default function GoogleButtonDesign(){

    
    useEffect(()=>{
        console.log("Inside Google!")
        window.google?.accounts.id.initialize({
            client_id: "YOUR_GOOGLE_CLIENT_ID",
            callback: handleCredentialResponse,
          });
        window.google?.accounts.id.renderButton(
            document.getElementById("google-signin-btn"),
            { theme: "outline", size: "large" }
          );
    }, [])

    return(
        <div> 
             <div id="google-signin-btn"></div>
        </div>
    )
}