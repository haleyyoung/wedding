import { useState } from 'react';
import {Box, Link} from '@mui/material';
import useUser from './hooks/useUser';
import DressShopping from './weddingParty/DressShopping.jsx';

export default function WeddingParty() {
  const user = useUser();
  const [showDressShopping, setShowDressShopping] = useState(false);

  return (
    <div className="wedding-party page">
      <Box>
        <div className="page-title">Important Dates</div>
        {user?.isBridesmaid && (
          <>
            <div className="event">
              <div className="title">Wedding Dress Shopping</div>
              <p className="note">(bridesmaids only)</p>
              <div className="date">
                Saturday November 18, 2023<br/>
                <Link onClick={() => setShowDressShopping(!showDressShopping)} color="primary" underline="none">Details</Link>
              </div>
            </div>
            {showDressShopping && (
              <DressShopping handleClose={() => setShowDressShopping(false)} />
            )}
          </>
        )}
        <div className="event">
          <div className="title">Rehearsal Dinner</div>
          <div className="date">
            Friday July 12, 2024 - 4pm<br/>
            June Lake
          </div>
        </div>
        <div className="event">
          <div className="title">Wedding!</div>
          <div className="date">
            Saturday July 13, 2024 - 5am - 11am<br/>
            Yosemite - Tenaya Lake<br/>
          </div>
          <br/>
          <div className="date">
            7pm - 10pm<br/>
            June Lake
          </div>
        </div>
        <div className="event">
          <div className="title">Breakfast</div>
          <div className="date">
            Sunday July 14, 2024 - 9am<br/>
            June Lake
          </div>
        </div>
      </Box>
      <img src={process.env.PUBLIC_URL + "/mountains.png"} alt="mountains" />
      <Box>
        <div className="page-title">Lodging</div>
        <div className="content-2-columns">
          <img src={process.env.PUBLIC_URL + "/airbnb.jpg"} alt="airbnb" />
          <Box className="airbnb-text">
            <p>The wedding party and immediate family will be staying in a couple AirBnbs
            we've reserved in June Lake, so no need to worry about lodging for Friday/Saturday nights July 12/13.</p>
            <p>Each couple will have their own bedroom (definitely) and bathroom (likely).</p>
            <p>No pets, unfortunately.</p>
            <p>Your airbnb: <Link href="https://maps.app.goo.gl/g55Zn1EMuSB2VXkJ9" color="primary" underline="none" target="_blank">27 Carson View Drive, June Lake, CA</Link></p>
          </Box>
        </div>
      </Box>
    </div>
  );
};
