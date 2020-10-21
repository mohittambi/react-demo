import React from "react";

import Input from "../atoms/input/InputField";
import RadioButtonsGroup from "./RadioButton";
import CheckboxesGroup from "./checkbox";
import Button from "../atoms/button/Button";
import Typography from "../atoms/typography/Typography";
import Invitees from "./Invitees";

import { BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { RiShareForwardLine, RiTimerLine } from "react-icons/ri";
import { HiOutlinePlus } from "react-icons/hi"

const Container = {
	display: "flex",
	flexDirection: "row",
	margin: "2%"
}

const LeftContainer = {
	width: "70%"
}

const StyledTypography = {

	fontSize: "1.5rem",
	marginTop: "5%"
}

const DetailContainer = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	flexWrap: "wrap"
}

const SecondCheckbox = {
	marginLeft: "30%"
}
const ThirdCheckbox = {
	marginLeft: "33%"
}
const FourthCheckbox = {
	marginTop: "2%"
}
const FifthCheckbox = {
	marginLeft: "30%",
	marginTop: "2%"
}

const SixCheckbox = {
	marginLeft: "36%",
	marginTop: "2%"
}

const RightContainer = {
	marginLeft: "1%"
}
const HostingContainer = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "300px",
	backgroundColor: "transparent",
	marginTop: "7%"
}


const ButtonContainer = {
	marginLeft: "68%",
	display: "flex",
	flexDirection: "row",
	width: "80%"
}

const ShareButton = {
	width: "40%",
	marginTop: "10%",
	color: "grey",
	fontSize: "1rem"
}

const ShareIcon = {
	marginRight: "10%"
}
const LocationContainer = {
	marginTop: "5%"
}
const HostingTypography = {
	fontSize: "1rem",
	fontWeight: "700"
}

const StyledDescription = {
	fontSize: "1rem"
}
const Select = {
	border: "none",
	width: "100%",
	height: "30px",
	marginTop: "4%",
	backgroundColor: "#F5F5F5",
	marginBottom: "8%"
}

const InviteButton = {
	marginLeft: "70%",
	width: "15%",
	height: "5vh",
	fontSize: "1.5rem",
	color: "white  ",
	backgroundColor: "#C9082A",
	border: "none",
}

const PlusIcon = {
	marginRight: "4%",

}

const EventDetail = () => {
	const tempDate = new Date();
	const date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();

	return (
		<div style={Container}>
			<div style={LeftContainer}>
				<div>
					<img
						src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
						alt="img"
						width="50%"
					/>
				</div>

				<div>
					<Typography style={StyledTypography} text="Descripition" />
					<hr />
					<Typography style={StyledDescription} text="lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " />
				</div>
				<div>
					<Typography style={StyledTypography} text="Details" />
					<div style={DetailContainer}>
						<p style={{ width: "50%" }}>Category of sport : football </p>
						<p style={{ width: "50%", textAlign: "end" }}>Max no. of players: 25</p>
						<p style={{ width: "50%", marginTop: "0px" }}>Frequency: Weekend Event</p>
						<p style={{ width: "50%", textAlign: "end", marginTop: "0px" }}>Registered players: 20</p>
					</div>
				</div>
				<div >
					<Typography style={StyledTypography} text="Privileges" />
					<div>
						<Input type="checkbox" ></Input>
						<label >Equipments Provided</label>
						<Input type="checkbox" style={SecondCheckbox}></Input>
						<label>Drinking Water</label>
						<Input type="checkbox" style={ThirdCheckbox}></Input>
						<label >Medical Aid</label>
						<Input type="checkbox" style={FourthCheckbox}></Input>
						<label>Food And Beverages</label>
						<Input type="checkbox" style={FifthCheckbox}></Input>
						<label>Pull-Overs</label>
						<Input type="checkbox" style={SixCheckbox}></Input>
						<label>Rewards</label>
					</div>
				</div>
				<div>

					<Typography style={StyledTypography} text="Type" />
					<RadioButtonsGroup />
					<CheckboxesGroup />

					<div >
						<Typography style={StyledTypography} text="Invitees" />

						<Invitees />
						<Button style={InviteButton
						}><HiOutlinePlus style={PlusIcon} />Invite</Button>
					</div>

				</div>
			</div>
			<div style={RightContainer}>
				<div >
					<h2>Football Club</h2>
					<div><BiCalendar style={{ color: "red" }} /> <span>{date}</span></div>
					<div style={LocationContainer}><GoLocation style={{ color: "red" }} /> <span>Location</span></div>
					<div style={HostingContainer}>
						<Typography style={HostingTypography} text="Hosted By" />
						<Typography style={HostingTypography} text="Co-Hosted By" />
					</div>
					<div style={ButtonContainer}>
						<Button style={ShareButton}><RiShareForwardLine style={ShareIcon} /><span>share</span></Button>
					</div>
					<div style={{ marginTop: "20%" }}>
						<div><BiCalendar style={{ marginRight: "2%" }} /> <span>{date}</span>
						</div>
						<div style={{ marginTop: "5%" }}>
							<RiTimerLine style={{ marginRight: "2%" }} /><span>Set Interval</span>

							<div>
								<select style={Select}>
									<option value="text" />
								</select>
							</div>
						</div>
						<div>
							<GoLocation /> <span>Location</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventDetail;
