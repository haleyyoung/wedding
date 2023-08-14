import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import useUser from './hooks/useUser';

export default function YosemiteRules() {
  const ref = useRef();
  const user = useUser();

  return (
    <div className="wedding-party page">
      <Box>
        <div className="page-title">Important Dates</div>
        {user?.isBridesmaid && (
          <div className="event">
            <div className="title">Wedding Dress Shopping</div>
            <p className="note"> (bridesmaids only)</p>
            <div className="date">
              Saturday and Sunday November 18-19, 2023<br/>
              San Diego or Temecula (undecided)
            </div>
          </div>
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
            Yosemite - Tenaya Lake<br/><br/>
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
      <img src={process.env.PUBLIC_URL + "/mountains.png"}/>
      <Box>
        <div className="page-title">Lodging</div>
        <div className="content-2-columns">
          <img src={process.env.PUBLIC_URL + "/airbnb.png"}/>
          <Box className="airbnb-text">
            <p>The wedding party and immediate family will be staying in a couple AirBnbs
            we've reserved in June Lake, so no need to worry about lodging for Friday/Saturday nights July 12/13.</p>
            <p>Each couple will have their own bedroom (definitely) and bathroom (likely).</p>
            <p>No pets, unfortunately.</p>
          </Box>
        </div>
      </Box>
    </div>
  );
};