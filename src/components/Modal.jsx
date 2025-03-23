import "../pages/modalcontainer.css"

export default function Modal(){



    function acceptCookies(){

    }

    return(
        <div className="modalcontainer"> 
         <p>This website uses cookies. By accepting you confirm that we can use your data for internal and external purposes.</p>
         <button onClick={acceptCookies} className="modalbutton">Accept Cookies</button>
        </div>
    )
}