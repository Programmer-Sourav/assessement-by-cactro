import { useNavigate } from "react-router"
import "../pages/topbar.css"
export default function TopBar(){

    const navigate = useNavigate();

    function showPage(value){
       
    }
    return(
        <header className="top-bar">
        <div className="logo">Slack</div>
        <nav>
            <ul>
                <li><a onClick={()=>{showPage("products")}}>Product</a></li>
                <li><a onClick={()=>{showPage("enterprise")}}>Enterprise</a></li>
                <li><a onClick={()=>{showPage("resource")}}>Resources</a></li>
                <li><a onClick={()=>{showPage("pricing")}}>Pricing</a></li>
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