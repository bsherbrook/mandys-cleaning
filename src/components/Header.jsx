import Button from "@mui/material/Button";
import './Header.css'
import LogoPic from "../assets/logoHandRed.png"
export default function Header(props) {

  function showContact(){
    props.setContactSwitch(true);
    props.setAboutSwitch(false);
    props.setHomeSwitch(false);
    props.setThankSwitch(false);
  }
  function showAbout(){
    props.setAboutSwitch(true);
    props.setHomeSwitch(false);
    props.setContactSwitch(false);
    props.setThankSwitch(false);
  }
  function showHome(){
    props.setHomeSwitch(true);
    props.setAboutSwitch(false);
    props.setContactSwitch(false);
    props.setThankSwitch(false);
  }
  return (
    <>
      <div id='headerBox' className="mb-32 flex p-5 justify-around shadow-md shadow-pink-800">
        <div className="flex">
          <div id="logo" className="text-white pt-1 px-3 first-letter flex flex-row justify-center align-middle">
            <div className="flex flex-col items-center justify-evenly gap-10">
                <div id="titleText" className="text-white">
                  Mandy's Compassionate Care & Cleaning Service
                </div>
                  <div className="flex">
                    <Button id="button" color="secondary" size="large" variant="outlined" onClick={showHome}>Home</Button>
                    <Button id="button" color="secondary" size="large" variant="outlined" onClick={showAbout}>About Us</Button>
                    <Button id="button" color="secondary" size="large" variant="outlined" onClick={showContact}>Contact</Button>
                  </div>
            </div>
            <img src={LogoPic} alt="a hand holding a heart" id="logoPic"/>
          </div>
        </div>
      </div>
    </>
  );
}
