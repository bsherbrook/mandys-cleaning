import "./Contact.css";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

export default function ContactForm(props) {
  const handleNameChange = (e) => {
    props.setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    props.setMessage(e.target.value);
  };
  let inputValidation;
  let emailValidation;
  function handleValidation() {
    let formName = document.getElementById("nameInput").value;
    let formEmail = document.getElementById("emailInput").value;
    let formMessage = document.getElementById("messageInput").value;
    let atPos = formEmail.indexOf("@");
    let dotPos = formEmail.lastIndexOf(".");
    if (atPos > 0 && dotPos > atPos + 1 && dotPos < formEmail.length - 1) {
      emailValidation = true;
    } else {
      alert("Please enter a valid email address ex. john123@gmail.com");
    }
    if (formName && formMessage) {
      inputValidation = true;
    } else {
      alert("Please fill out all required fields before submitting");
    }
  }
  const handleSubmit = (e) => {
    handleValidation();
    if (inputValidation && emailValidation) {
      e.preventDefault();
      const templateName = props.name;
      const templateEmail = props.email;
      const templateMessage = props.message;
      const serviceId = "service_fwwapgi";
      const templateId = "template_iovwzbb";
      const publicKey = "rlCbtS2_2joMn9HJx";
      const templateParams = {
        templateName,
        templateEmail,
        templateMessage,
      };

      // emailjs
      //   .send(serviceId, templateId, templateParams, publicKey)
      //   .then((response) => console.log(response))
      //   .then((error) => console.log(error));

      props.setName("");
      props.setEmail("");
      props.setMessage("");
      props.setContactSwitch(false);
      props.setThankSwitch(true);
      inputValidation = false;
      emailValidation = false;
    }
  };
  return (
    <div id="contactBody" className="flex justify-center items-center">
      <div id="formBoxBox" className="flex justify-center items-center p-20">
        <div
          id="formBox"
          className="bg-rose-100 flex flex-col justify-center items-center shadow-lg shadow-black-300 border-purple-200 border-2"
        >
          <h1 id="formTitle" className="text-3xl p-5">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="">
            <div>
              <label>Name:</label>
              <br />
              <input
                className="rounded-lg pl-1"
                id="nameInput"
                type="text"
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                className="rounded-lg pl-1"
                id="emailInput"
                type="email"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <br />
              <textarea
                className="rounded-lg pl-1"
                id="messageInput"
                onChange={handleMessageChange}
                rows="4"
              />
            </div>
            <div className="flex justify-end">
              <Button
                id="contactButton"
                variant="outlined"
                color="secondary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div id="contactRight">
        <div className="text-center text-2xl -mt-10 mb-10" id="contactText">
          Please get in touch to let us know how we can help!
        </div>
        <div id="contactBox" className="flex justify-center gap-10">
          <div className="text-xl">
            <span className="text-xl mr-1">Phone:</span> <a className="text-blue-500" href="tel:+7723217821">772-321-7821</a>
            <br />
            <span className="mr-1">Email:</span><a className="text-blue-500" href="mailto:Mandyscompassionatecare@yahoo.com">Mandyscompassionatecare@yahoo.com</a>
          </div>
          <div className="text-xl">
            Phone Hours:
            <br /> Mon-Sun 9am-5pm
          </div>
        </div>
      </div>
    </div>
  );
}
