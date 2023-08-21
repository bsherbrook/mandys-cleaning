import "./Home.css";
import WrapperBg from "../assets/cute-bg7.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import CouplePic from "../assets/senior-beach-couple-sam-williams.jpg";
import OceanCouplePic from "../assets/elderly-ocean-katarzyna-grabowska.jpg";
import Button from "@mui/material/Button";
import MobileWrapperBg from "../assets/cute-bg8.jpg";
import PhoneWrapperBg from "../assets/cute-bg10.jpg";

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
  let breakpoint=790;
  let mobileBreakpoint=500;
  let wrapperBgImg;
  if (props.width>breakpoint){wrapperBgImg=WrapperBg}
  if (props.width<=breakpoint){wrapperBgImg=MobileWrapperBg}
  if (props.width<=mobileBreakpoint){wrapperBgImg=PhoneWrapperBg}

  return (
    <>
      <div
        id="homeWrapper"
        style={{ backgroundImage: `url('${wrapperBgImg}')` }}
        className="flex items-center justify-end"
      >
        <div id="wrapperTextBox" className="">
          <h1 id="wrapperTitle" className="text-4xl font-extrabold mb-6">
            Helping Seniors Be Their Best Selves
          </h1>
          <p id="wrapperSubtitle" className="text-2xl mb-6">
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
          <div id="picSubtext" className="text-2xl text-fuchsia-700 mb-5">
            A Solution to Care and Cleaning
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-32 px-10" id="promiseWrapper">
        <img id="aboutPic" src={OceanCouplePic} alt="" />
        <div
          id="aboutPromise"
          className="flex flex-col justify-center items-center mb-10 p-5 rounded-lg"
        >
          <div id="aboutPromiseTitle" className="text-3xl mb-8">
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
        <div id="learnMore" className="mb-5">
          Learn More About Us Here
        </div>
        <Button onClick={goToAbout} variant="contained">
          Learn More
        </Button>
      </div>
    </>
  );
}
