import "./Home.css";
import PhoneIcon from '@mui/icons-material/Phone';
import Button from "@mui/material/Button";

export default function HomePage(props) {
  function goToContact(){
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
    props.setContactSwitch(true);
    props.setHomeSwitch(false);
  }
  return (
    <>
      <div id="homeWrapper" className="flex items-center justify-end">
        <div id="wrapperTextBox" className="">
          <h1 className="text-4xl font-bold mb-6">Helping Seniors Be Their Best Selves</h1>
          <p className="text-xl mb-6">Compassionate in Home Care and Cleaning for the Treasure Coast</p>
          <p className="text-xl flex gap-4 "><Button onClick={goToContact} variant="outlined">Contact</Button><PhoneIcon /><a className="text-blue-500" href="tel:+5555551234">772-321-1328</a></p>
        </div>
        <div
          id="homePicBox"
          className="flex flex-col justify-center items-center"
        >
          <img
            id="homeNursePic"
            src="src/assets/senior-beach-couple-sam-williams.jpg"
            alt=""
            className="rounded-xl mb-5"
          />
          <div className="text-2xl text-white font-bold mb-5">
            A Solution to Care and Cleaning
          </div>
        </div>
      </div>
    </>
  );
}
