import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Header() {

    return (
      <>
        <div className="bg-pink-300 flex p-5">
            <div id='logo' className="text-white pt-1 px-3">
                <CleaningServicesIcon />
            </div>
            <div className='text-white text-3xl'>Mandy's Compassionate Care & Cleaning Service</div>
            <div>
                <ButtonGroup color="secondary"
                             size="large"
                             variant="outlined"
                             >
                    <Button
                    >Home
                    </Button>
                    <Button
                    >About Us
                    </Button>
                    <Button
                    >Contact
                    </Button>
                </ButtonGroup> 
            </div>
        </div>
      </>
    )
  }