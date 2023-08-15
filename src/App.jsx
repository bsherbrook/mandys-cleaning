import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import MobileHeader from "./components/MobileHeader";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import ThankYou from "./components/ThankYou";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const [contactSwitch, setContactSwitch] = useState(false);
  const [homeSwitch, setHomeSwitch] = useState(true);
  const [aboutSwitch, setAboutSwitch] = useState(false);
  const [thankSwitch, setThankSwitch] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 600;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div className="flex justify-center items-center ">
        <img id="bgPic" src="src/assets/cute-bg3.jpg" alt="" />
      </div>
      <div className="h-screen">
        {width > breakpoint ? (
          <Header
            setContactSwitch={setContactSwitch}
            setHomeSwitch={setHomeSwitch}
            setAboutSwitch={setAboutSwitch}
            setThankSwitch={setThankSwitch}
          />
        ) : (
          <MobileHeader
            setContactSwitch={setContactSwitch}
            setHomeSwitch={setHomeSwitch}
            setAboutSwitch={setAboutSwitch}
            setThankSwitch={setThankSwitch}
          />
        )}
        <div id="aboutBg"></div>
        <div id="content" className="">
          {homeSwitch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomePage 
               setContactSwitch={setContactSwitch}
               setHomeSwitch={setHomeSwitch}
              />
            </motion.div>
          )}
          {aboutSwitch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <AboutUs 
                setAboutSwitch={setAboutSwitch}
                setContactSwitch={setContactSwitch}
              />
            </motion.div>
          )}
          {contactSwitch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <Contact
                setContactSwitch={setContactSwitch}
                setHomeSwitch={setHomeSwitch}
                setThankSwitch={setThankSwitch}
                setName={setName}
                setEmail={setEmail}
                setMessage={setMessage}
                name={name}
                message={message}
                email={email}
              />
            </motion.div>
          )}
          {thankSwitch && <ThankYou />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
