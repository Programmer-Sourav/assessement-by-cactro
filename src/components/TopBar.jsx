import { useNavigate } from "react-router"
import "../pages/topbar.css"
export default function TopBar(){

    const navigate = useNavigate();

    function showPage(value){
        navigate(`/${value}`);
    }
    return(
        <header className="top-bar">
        <div className="logo">Slack</div>
        <nav>
            <ul>
                <li><button onClick={()=>{showPage("products")}} className="btnbg">Product</button></li>
                <li><button onClick={()=>{showPage("enterprise")}} className="btnbg">Enterprise</button></li>
                <li><button onClick={()=>{showPage("resource")}} className="btnbg">Resources</button></li>
                <li><button onClick={()=>{showPage("pricing")}} className="btnbg">Pricing</button></li>
            </ul>
        </nav>
        <div className="actions">
            <button>Sign In</button>
            <button className="btn-outline">Talk To Sales</button>
            <button className="btn-primary">Try for Free</button>
        </div>
    </header>
    )
}