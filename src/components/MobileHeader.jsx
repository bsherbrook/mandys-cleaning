import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Button from "@mui/material/Button";
import "./MobileHeader.css";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LogoPic from "../assets/logoHandRed.png";

export default function MobileHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function showContact() {
    props.setContactSwitch(true);
    props.setAboutSwitch(false);
    props.setHomeSwitch(false);
    props.setThankSwitch(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function showAbout() {
    props.setAboutSwitch(true);
    props.setHomeSwitch(false);
    props.setContactSwitch(false);
    props.setThankSwitch(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function showHome() {
    props.setHomeSwitch(true);
    props.setAboutSwitch(false);
    props.setContactSwitch(false);
    props.setThankSwitch(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div id="mobileHeader" className="text-white mb-32 bg-pink-300 flex justify-around shadow-md shadow-pink-400 items-center">
        <Button
          sx={{ ml: 0, mr: 2 }}
          id="button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
          color="secondary"
        >
          <MenuRoundedIcon />
        </Button>
        <div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                showHome();
                handleClose();
              }}
            >
              <HomeOutlinedIcon sx={{ marginRight: 2 }} />
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                showAbout();
                handleClose();
              }}
            >
              <InfoOutlinedIcon sx={{ marginRight: 2 }} />
              About Us
            </MenuItem>
            <MenuItem
              onClick={() => {
                showContact();
                handleClose();
              }}
            >
              <ContactSupportOutlinedIcon sx={{ marginRight: 2 }} />
              Contact
            </MenuItem>
          </Menu>
        </div>
        <div id="titleBox">
          <div id="titleText" className="text-white">
            Mandy's Compassionate
          </div>
          <div id="titleText">Care & Cleaning</div>
        </div>

        <img
          className="ml-3"
          src={LogoPic}
          alt="a hand holding a heart"
          id="logoPic"
        />
      </div>
    </>
  );
}
