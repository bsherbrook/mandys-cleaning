// import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
//import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import './Header.css'

export default function Header() {
  return (
    <>
      <div className="bg-pink-300 flex p-5 justify-around shadow-md shadow-pink-800">
        <div className="flex">
          <div id="logo" className="text-white pt-1 px-3 first-letter flex flex-row justify-center align-middle">
            <div className="flex flex-col items-center justify-evenly gap-10">
                <div id="titleText" className="text-white text-3xl">
                  Mandy's Compassionate Care & Cleaning Service
                </div>
                <ButtonGroup color="secondary" size="large" variant="outlined">
                    <Button id="button">Home</Button>
                    <Button id="button">About Us</Button>
                    <Button id="button">Contact</Button>
                </ButtonGroup>
            </div>
            <img src="./src/assets/logoHand.PNG" alt="a hand holding a heart" id="logoPic"/>
          </div>
        </div>
      </div>
    </>
  );
}
