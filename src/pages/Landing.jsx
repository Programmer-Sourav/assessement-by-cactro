import { useRef } from "react"
import MainCard from "../components/MainCard"
import TopBar from "../components/TopBar"
import "../pages/main.css"
import "../pages/topbar.css"

export default function Landing(){

    return(
        <div> 
        <TopBar/>
        <MainCard/>

        </div>
    )
}