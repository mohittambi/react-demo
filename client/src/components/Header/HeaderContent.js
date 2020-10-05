import React from "react"
import Button from '@material-ui/core/Button';

function HeaderContent (){
    return(
        <div className = "header" style= {{display: "flex", flexDirection: "row"}}>
            <div className = "header-left">
            <h1> Sports Engagement Platform</h1>    
            <h5>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </h5>
            
            <Button variant="contained" color="secondary" style = {{borderRadius: "0",color: "white",fontFamily : "Lora, serif"
,fontSize: "20px", width: "200px", height: "55px", marginTop: "50px"}}>
        Create Group
      </Button>
      </div>
      <div className = "header-img">
          <img src ="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg" alt = "img"></img>
      </div>
        </div>
    )
}
export default HeaderContent
