import "./Home.css";
import WrapperBg from '../assets/cute-bg7.jpg';
import PhoneIcon from "@mui/icons-material/Phone";
import CouplePic from "../assets/senior-beach-couple-sam-williams.jpg";
import OceanCouplePic from "../assets/elderly-ocean-katarzyna-grabowska.jpg"
import Button from "@mui/material/Button";

export default function HomePage(props) {
  function goToContact() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    props.setContactSwitch(true);
    props.setHomeSwitch(false);
  }
  function goToAbout() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    props.setAboutSwitch(true);
    props.setHomeSwitch(false);
  }
  return (
    <>
      <div id="homeWrapper" style={{backgroundImage: `url('${WrapperBg}')`}} className="flex items-center justify-end">
        <div id="wrapperTextBox" className="">
          <h1 className="text-4xl font-bold mb-6">
            Helping Seniors Be Their Best Selves
          </h1>
          <p className="text-xl mb-6">
            Compassionate in Home Care and Cleaning for the Treasure Coast
          </p>
          <p className="text-xl flex gap-4 ">
            <Button onClick={goToContact} variant="outlined">
              Contact
            </Button>
            <PhoneIcon />
            <a className="text-blue-500" href="tel:+7723217821">
              772-321-7821
            </a>
          </p>
        </div>
        <div
          id="homePicBox"
          className="flex flex-col justify-center items-center"
        >
          <img
            id="homeNursePic"
            src={CouplePic}
            alt=""
            className="rounded-xl mb-5"
          />
          <div className="text-2xl text-white font-bold mb-5">
            A Solution to Care and Cleaning
          </div>
        </div>
      </div>
      <div
        className="flex justify-around mt-32 px-10"
        id="promiseWrapper"
      >
        <img
          id="aboutPic"
          src={OceanCouplePic}
          alt=""
        />
        <div
          id="aboutPromise"
          className="flex flex-col justify-center items-center p-5 rounded-lg"
        >
          <div id="aboutPromiseTitle" className="text-3xl">
            Our Promise:
          </div>
          At Compassionate Care Services, we treat every client as an extension
          of our own family. With a heart full of love and empathy, we are
          dedicated to enhancing the quality of life for seniors and their
          families. Our commitment to excellence, compassion, and integrity sets
          us apart as a trusted partner in care.
        </div>
      </div>
      <div className="bg-rose-200 p-10 flex justify-center items-center flex-col text-xl">
        <div id="learnMore" className="mb-6">Learn More About Us Here</div>
        <Button onClick={goToAbout} variant="contained">Learn More</Button>
      </div>
    </>
  );
}
