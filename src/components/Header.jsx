import Button from "@mui/material/Button";
import './Header.css'

export default function Header(props) {
  function showModal(){
    props.setContactSwitch(true);
    console.log(props.contactSwitch);
  }
  return (
    <>
      <div className="bg-pink-300 flex p-5 justify-around shadow-md shadow-pink-800">
        <div className="flex">
          <div id="logo" className="text-white pt-1 px-3 first-letter flex flex-row justify-center align-middle">
            <div className="flex flex-col items-center justify-evenly gap-10">
                <div id="titleText" className="text-white">
                  Mandy's Compassionate Care & Cleaning Service
                </div>
                  <div className="flex">
                    <Button id="button" color="secondary" size="large" variant="outlined">Home</Button>
                    <Button id="button" color="secondary" size="large" variant="outlined">About Us</Button>
                    <Button id="button" color="secondary" size="large" variant="outlined" onClick={showModal}>Contact</Button>
                  </div>
            </div>
            <img src="./src/assets/logoHand.PNG" alt="a hand holding a heart" id="logoPic"/>
          </div>
        </div>
      </div>
    </>
  );
}
