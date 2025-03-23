import "../pages/leftframe.css"

export default function LeftFrame(){

    return(
    <div className="left-frame-container"> 
     <iframe
      src="https://www.youtube.com/embed/q19RtuCHt1Q"
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title="What is Slack?"
      style={{minWidth: "692px"}}
    />
        </div>
    )
}