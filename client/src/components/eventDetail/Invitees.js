import React, { useState } from 'react'


const Invitees = () => {

    const [images] = useState(['https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg', 'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg', 'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg', 'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg', 'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg', 'https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg'])

    const InviteesContainer = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginRight: "25%",
    }
    const Image = {
        width: "80%",
        border: "2px solid grey"
    }


    return (
        <div style={InviteesContainer}>
            {images.map((image, index) => (
                <div>

                    <img src={image}
                        key={index}
                        alt="img"
                        style={Image}
                    ></img>
                    <p>Anu</p>
                </div>


            ))}
        </div>

    )
}
export default Invitees