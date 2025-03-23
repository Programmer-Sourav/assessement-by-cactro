import "../pages/topbar.css"
export default function TopBar(){


    return(
        <header className="top-bar">
        <div className="logo">Slack</div>
        <nav>
            <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
        </nav>
        <div className="actions">
            <button className="btn-outline">Sign In</button>
            <button className="btn-outline">Talk To Sales</button>
            <button className="btn-primary">Try for Free</button>
        </div>
    </header>
    )
}