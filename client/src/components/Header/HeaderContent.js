import React from "react";
import Button from "@material-ui/core/Button";
import "../../styles/Header/HeaderContent.css";
import HeaderForm from "./HeaderForm";
import NavBar from "./NavBar";
function HeaderContent() {
  return (
    <>
      <NavBar />
      <div className="header">
        <div className="header-left">
          <h1> Sports Engagement Platform</h1>
          <h5>
            <div className="vl">
              Create or join event to build local community <br />
              for daily sport
            </div>
          </h5>

          <Button
            style={{
              fontSize: "15px",
              width: "200px",
              height: "40px",
              wordSpacing: "8px",
            }}
            variant="contained"
            color="secondary"
          >
            Create Group
          </Button>
        </div>
        <div className="header-img">
          <img
            src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
            alt="img"
          ></img>
        </div>
      </div>
      <HeaderForm />
    </>
  );
}
export default HeaderContent;
