import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './MobileHeader.css'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function MobileHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <div className="bg-pink-300 flex justify-around shadow-md shadow-pink-400">
        <div className="flex">
          <div id="logo" className="text-white flex flex-row justify-center align-middle">
            <div className="flex items-center justify-evenly gap-10">
                <MenuRoundedIcon 
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className='hover:cursor-pointer hover:bg-purple-300 hover:bg-opacity-20'
                  />
                  <div>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelled by': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={()=>{
                        showHome();
                        handleClose();
                        }}>Home</MenuItem>
                      <MenuItem onClick={()=>{
                        showAbout();
                        handleClose();
                        }}>About Us</MenuItem>
                      <MenuItem onClick={()=>{
                        showContact();
                        handleClose();
                        }}>Contact</MenuItem>
                    </Menu>
                  </div>
                <div id="titleText" className="text-white">
                  Mandy's Care & Cleaning
                </div>
            </div>
            <img className='ml-3' src="./src/assets/logoHand.PNG" alt="a hand holding a heart" id="logoPic"/>
          </div>
        </div>
      </div>
    </>
  );
}
