import "../pages/topbar.css"
import "../pages/main.css"
import RightHero from "./RightHero"
import LeftFrame from "./LeftFrame"
import { useRef } from "react"
import Modal from "./Modal"
import GoogleButtonDesign from "./GoogleButtonDesign"
import DummyGoogleButtonDesign from "./DummyGoogleButtonDesign"
import { useNavigate } from "react-router"

export default function MainCard(){

    const navigate = useNavigate();

    const bottomRef = useRef(null);
    
    const partnerImages = [{id: 1, src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Fox_Broadcasting_Company_logo_%282019%29.svg", width: "72px", height:"56px", alt: "fox"},
        {id: 2, src: "https://www.logo.wine/a/logo/Lonely_Planet/Lonely_Planet-Logo.wine.svg", width: "92px", height:"56px", alt: "loney_planet"},
        {id: 3, src: "https://www.intuit.com/oidam/intuit/ic/en_us/logos/intuit-2line-ecosystem-logo-icom-20230324-500x230.png", width: "92px", height:"56px", alt: "intuit"},
        {id: 4, src: "https://brandlogos.net/wp-content/uploads/2022/04/carvana-logo.png", width: "92px", height:"56px", alt: "carvana"},
        {id: 5, src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Kiva_logo_classic.png", width: "92px", height:"56px", alt: "kiva"},
        {id: 6, src: "https://www.logodesign.org/wp-content/uploads/2023/08/current-target-logo.png", width: "92px", height:"56px", alt: "target"},
        {id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VyIIHJq01Xcr_dfFjGEZw6J6jXAjVQvl_Q&s", width: "92px", height:"56px", alt: "deva"}
    ]
    

    function watchVideo(){
         navigate("https://www.youtube.com/watch?v=q19RtuCHt1Q")
    }
    
    return(

<main>
        <div className="hero">
            <div className="hero-text">
              <h1>Slack is where the future works</h1>
              <p>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
              <div className="hero-buttons">
                <button className="try-free">TRY FOR FREE</button>
                {/* <button className="google-signup">SIGN UP WITH GOOGLE</button> */}
                <DummyGoogleButtonDesign/>
              </div>
            </div>
          
            <div className="hero-image">
              <RightHero/>
            </div>
          </div>
          <section className="partners">
            {partnerImages.map((partner)=>(
          <img src={partner.src} alt={partner.alt} width={partner.width} height={partner.height} key={partner.id} className="imgsrc"/>
            ))}
        </section>
        <div className="hero">
        <div className="hero-left-below">
              <LeftFrame/>
        </div>
            <div className="right-below-container">
              <h3>Now is your moment to build a better tomorrow</h3>
              <p>We have seen what the future can be. Now it's time to decide what it will be.</p>
              <div className="hero-buttons">
                <button className="try-free" onClick={watchVideo}>WATCH VIDEO</button>
              </div>
            </div>
          
          </div>
          <div ref={bottomRef}>
                <Modal/>
            </div>
    </main>

    )
}