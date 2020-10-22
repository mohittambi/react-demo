import React from 'react'
import Input from "../atoms/input/InputField"
import Typography from "../atoms/typography/Typography"
import Button from "../atoms/button/Button"
import RadioButtonsGroup from "./RadioButton"
import DynamicCSS from "./Toggle"
import "./style.css"

import TextField from "@material-ui/core/TextField"


import { GrLinkNext } from "react-icons/gr"
import { HiOutlinePlus } from "react-icons/hi"
import { BsPlusSquare } from "react-icons/bs"



const OuterContainer = {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    backgroundColor: "#F5F5F5",
}


const CreateEventHeading = {
    textAlign: "left",
    letterSpacing: "0px",
    color: "#000000",
    fontSize: "2rem",
    margin: "10% 0 10% 5%",
    fontWeight: "500"

}

const TitleContainer = {
    marginLeft: "6%"
}


const StyledHeading = {
    textAlign: "left",
    letterSpacing: "0px",
    color: "#000000",
    fontSize: "1.3rem",
    marginTop: "3%"

}

const StyledInput = {
    width: "70%",
    height: "40px",
    border: "none",
}



const StyledButton = {
    height: "40px",
    border: "1px solid red",
    backgroundColor: "white",
    padding: "10px",
    color: "red",

}

const StyledSelect = {
    width: "100%",
    height: "40px",
    border: "none",
    color: "#7D7D7D",
    fontSize: "1rem",
    padding: "10px",
}




const ContainerActivity = {
    marginLeft: "5%",
    display: "flex",
    flexDirection: "row",
    jusitfyContent: "space-between",

}


const InnerBox = {


    width: "42%",
    padding: "8px"
}

const StyledFrequency = {
    width: "86%",
    height: "40px",
    border: "none",
    color: "#7D7D7D",
    fontSize: "1rem",
    padding: "10px",


}

const LastContainer = {
    display: "flex",
    flexDirection: "row",
    jusitfyContent: "space-between",
    width: "100%",
    backgroundColor: "white",
    height: "40px",
}

const ContainerRight = {
    width: "40%",
    backgroundColor: "transparent",
    marginTop: "4%"
}

const AddmemberHeading = {
    textAlign: "left",
    letterSpacing: "0px",
    color: "#000000",
    marginTop: "26%",
    fontSize: "1.3rem",

}
const AddCohostHeading = {
    textAlign: "left",
    letterSpacing: "0px",
    color: "#000000",
    fontSize: "1.3rem",
    marginTop: "3%"
}

const AddInput = {
    marginTop: "0px",
    width: "50%",
    height: "40px",
    border: "none"
}

const InviteButton = {
    width: "20%",
    height: "40px",
    marginTop: "1.5%",
    border: "1px solid red",
    background: "white",
    fontSize: "0.9rem",
    letterSpacing: "0px",
    color: "red",
    opacity: "1",


}
const StartedButton = {
    width: "45%",
    marginTop: "7%",
    fontSize: "1.5rem",
    textAlign: "center",
    height: "6vh",
    background: "#c9082a 0% 0% no-repeat padding-box",
    fontSize: "20px",
    letterSpacing: "0px",
    color: "white",
    opacity: "1",
    border: "none"
}


const PlayButton = {
    fontSize: "1rem",
    margin: "2% 0 0 4%",
}
const PlusButton = {
    fontSize: "2rem",
    backgroundColor: "#F5F5F5",
    color: "grey"

}

const StyledTextField = {

    marginLeft: "10%",
    width: "50%",
    opacity: "0.3"
}



const CreateEvent = () => {

    const handleChange = () => {
        console.log("hiii Anu")
    }

    return (
        <div >
            <form>
                <div style={OuterContainer}>
                    <div style={{ width: "60%" }}>
                        <Typography style={CreateEventHeading} text="Create Event" />
                        <div style={TitleContainer}>
                            <Typography text="Title" style={StyledHeading} />
                            <Input style={StyledInput} placeholder="Enter name of Event"
                            ></Input>
                            <Button style={StyledButton} text="Add Description" icon={<HiOutlinePlus />}>  </Button >

                        </div>
                        <div style={ContainerActivity}>
                            <div style={InnerBox}>
                                <Typography text="Activity" style={StyledHeading} />

                                <select style={StyledSelect} >
                                    <option value="disabled" >Select the type of Sport</option>

                                    <option value="text" />
                                </select>
                            </div>
                            <div style={InnerBox}>
                                <Typography text="Location" style={StyledHeading} />
                                <select style={StyledSelect} >
                                    <option value="" disabled selected hidden >Location</option>
                                    <option value="text" />
                                </select>
                            </div>
                        </div>
                        <div style={TitleContainer}>
                            <Typography text="Frequency" style={StyledHeading} />
                            <select style={StyledFrequency}>
                                <option value="" disabled selected hidden >Single Day Event</option>

                                <option value="text" /></select>
                        </div>
                        <div style={ContainerActivity}>
                            <div style={InnerBox}>
                                <Typography text="Start" style={StyledHeading} />
                                <div style={LastContainer}>
                                    <TextField type="Date" style={{ opacity: 0.3 }} />
                                    <TextField type="Time" style={StyledTextField} />

                                </div>
                            </div>
                            <div style={InnerBox}>
                                <Typography text="End" style={StyledHeading} />
                                <div style={LastContainer}>
                                    <TextField type="Date" style={{ opacity: "0.3" }} />
                                    <TextField type="Time" style={StyledTextField} />
                                </div>
                            </div>
                        </div>
                    </div >



                    <div style={ContainerRight}>
                        <Typography text="Add Members" style={AddmemberHeading} />
                        <BsPlusSquare style={PlusButton} onClick={handleChange} />
                        <div>
                            <Input style={AddInput} placeholder="Enter Email Id (Non Menbers)"></Input><Button style={InviteButton} text="Send Invite"></Button>
                        </div>

                        <DynamicCSS />
                        <div>
                            <Typography text="Add Co-Host" style={AddCohostHeading} />
                            <Input style={AddInput} placeholder="Enter Email Id / Name"></Input><Button style={InviteButton} text="Request"></Button>

                        </div>

                        <div >
                            <RadioButtonsGroup style={{ marginTop: "4%" }} />
                        </div>
                        <div style={{ textAlign: "right", marginRight: "29%" }}>
                            <Button style={StartedButton} text="Let's Get Started" icon={<GrLinkNext style={PlayButton} />
                            }>
                            </Button>
                        </div>
                    </div>

                </div>

            </form>
        </div >
    )
}

export default CreateEvent

