import "./AboutUs.css";
import Nurse from "../assets/nurse-patient-topsphere-media.jpg";
import Button from "@mui/material/Button";

export default function AboutUs(props) {
  function goToContact() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    props.setContactSwitch(true);
    props.setAboutSwitch(false);
  }
  return (
    <>
      <div className=" flex justify-around">
        <div
          id="aboutTitleBox"
          className="flex flex-col justify-center items-center"
        >
          <div id="aboutTitle" className="text-3xl mb-5 font-extrabold">
            About Us
          </div>
          <div id="aboutTitleText" className="text-xl first-letter:text-4xl">
            Welcome to Compassionate Care Services, where the heart of a mother
            and the expertise of a nurse's assistant come together to provide
            exceptional cleaning and elderly care solutions. Founded by a
            dedicated and nurturing mother of three, our mission is to extend a
            loving and helping hand to those in need, ensuring a clean and
            comfortable environment for seniors to thrive.
          </div>
        </div>
        <img id="nurseMandy" src={Nurse} alt="Nurse Mandy" className="z-50" />
      </div>
      <div id="aboutCard" className="my-32">
        <div
          id="aboutCardLeft"
          className="bg-rose-50 rounded-lg p-10 flex flex-col justify-center items-center"
        >
          <div className="text-3xl mb-3">Our Approach:</div>
          <div className="text-lg mb-6">
            What sets Compassionate Care Services apart is our unique blend of
            organized living space contributes to both physical and mental
            nurturing care and meticulous cleaning. We understand that a clean
            and well-being. Our team not only maintains the highest standards of
            cleanliness but also goes the extra mile to create a warm and
            welcoming environment for seniors.
          </div>
          <Button onClick={goToContact} variant="contained" color="secondary">
            Get Care Now
          </Button>
        </div>
        <div
          id="aboutCardRight"
          className="bg-rose-50 rounded-lg p-10 flex flex-col justify-center items-center"
        >
          <div className="text-3xl mb-3">Services We Offer:</div>
          <ul className="list-disc">
            <li>
              <span className="text-lg underline">Elderly Companionship:</span>{" "}
              Caring professionals that are friends and listen
            </li>
            <li>
              <span className="text-lg underline">Cleaning Excellence:</span> A
              healthy environment to promote health and wellbeing
            </li>
            <li>
              <span className="text-lg underline">
                Personalized Care Plans:
              </span>{" "}
              Every individual has unique needs, and we tailor our services to
              match them.
            </li>
            <li>
              <span className="text-lg underline">Medication Reminders:</span>{" "}
              Our caregivers provide gentle reminders and assistance with
              medications
            </li>
          </ul>
        </div>
      </div>
      <div
        id="aboutWrapper"
        className="mt-32 p-5 flex flex-col justify-center items-center"
      >
        <img
          id="aboutFounder"
          className="mb-10"
          src="src/assets/nurse-home-humberto-chavez.jpg"
          alt=""
        />
        <div className="text-3xl mb-6">Meet Our Founder:</div>
        <div id="founderText" className="text-xl">
          At the heart of Compassionate Care Services is Amanda Sherbrook, a
          compassionate mother of three and a dedicated nurse's assistant with a
          genuine passion for caregiving. Drawing from her experience in
          healthcare and her nurturing nature as a mother, Amanda saw the need for
          a service that offers both cleanliness and companionship to the
          elderly. With unwavering commitment and a loving spirit, she embarked
          on this journey to create a service that reflects her values and
          dedication.
        </div>
      </div>
      {/* <div>
        <span className="">Get in Touch:</span> If you're seeking a caring and
        experienced team to provide top-notch cleaning and elderly care
        services, reach out to us at [contact information]. We look forward to
        the privilege of caring for your loved ones and making a positive impact
        on their lives.
        <div>
          Experience the warmth of a mother's touch and the professionalism of a
          nurse's assistant at Compassionate Care Services. Together, we create
          a home that radiates comfort, cleanliness, and companionship.
        </div>
      </div> */}
    </>
  );
}
