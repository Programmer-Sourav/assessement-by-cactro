import "../pages/chatcard.css"

export default function RightHero(){

    const userData = [{id: 1, src: "https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-apis.s3.amazonaws.com%2F76f357af-5961-43d2-8dd8-15683986f748.jpg&w=3840&q=75", username: "Ms. XYZ", currentStatus: "Looks like we are on track to launch next week!", height: "48px", width: "48px"},
        {id: 2, src: "data:image/jpeg;base64,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", username: "Mr. ABC", currentStatus: "Project Status Meeting today from 01:30–02:00 IST", height: "48px", width: "48px"},
        {id: 3, src: "https://xsgames.co/randomusers/assets/avatars/male/31.jpg", username: "Christoper", currentStatus: "Kindly check today's work. I have created the tasks.", height: "48px", width: "48px"}
    ]
    return(
     
        <div className="chat-container">
     
        <div className="sidebar">
          <h2>A1 Company Ltd.</h2>
          <ul>
            <li># announcements</li>
            <li className="active"># project-gizmo</li>
            <li># team-marketing</li>
          </ul>
      
    
          <div className="user-section">
            <img src="user-avatar.jpg" alt="User"/>
            <span>+3</span>
          </div>
        </div>
      
    
        <div className="chat-card">
          <div className="chat-header">
            <h2># project-gizmo</h2>
            <div className="user-avatars">
              {userData.map((userItem)=>(
                <img key={userItem.id} src={userItem.src} width={userItem.width} height={userItem.height} alt="user" className="user-avatar"/>
              ))}
            </div>
          </div>
      
          <div className="chat-messages">
            <div className="message">
             
                {userData.map((userItem)=>(
                <div className="message-content">
                <img key={userItem.id} src={userItem.src} width={userItem.width} height={userItem.height} alt="user"/>
                <h4>{userItem.username}</h4>
                <p>{userItem.currentStatus}</p>
                </div>    
            ))}
             
            </div>
          </div>
        </div>
      </div>   
   
    )
}