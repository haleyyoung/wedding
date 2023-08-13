import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import useUser from './hooks/useUser';

export default function Planning() {
  const ref = useRef();
  const theme = useTheme();
  const user = useUser();
  return (
    <div className="planning day-of page">
      <Box className="agenda-item">
        <div className="time">
          Lodging
          <div className="text">
            (Those marked with an * are within a 15 minute walk to our AirBnb!)
          </div>
        </div>
        <div className="title">
          Hotels/Cabins
        </div>
        <div className="text">
          {(user.isFamily || user.isWeddingParty) && (
            <div className="alert-stamp">
              {user.isWeddingParty && (
                <div className="group"><span>Wedding party,</span></div>
              )}
              {!user.isWeddingParty && user.isFamily && (
                <div className="group"><span>Family,</span></div>
              )}
              <span>we gotchu July 12-14</span>
            </div>
          )}
          <b>Lodging is <i>extremely</i> limited in the small town of June Lake, so you'll want to book ASAP. </b>
          <img src={process.env.PUBLIC_URL + "/lodging.jpg"}/>
          <div>Here are a few places we'd recommend.</div>
          <br/>
          <Link href="https://www.heidelberginnresort.com/" target="_blank" color="secondary" underline="none">
            Heidelberg Inn
          </Link>* (call to book)
          <br/>
          <Link href="https://www.lakefrontcabins.co/" target="_blank" color="secondary" underline="none">
            Lake Front Cabins
          </Link>*
          <br/>
          <Link href="https://junelakemotel.com/" target="_blank" color="secondary" underline="none">
            June Lake Motel
          </Link>*
          <br/>
          <Link href="https://doubleeagle.com/" target="_blank" color="secondary" underline="none">
            Double Eagle Resort & Spa
          </Link>
          <br/>
          <Link href="https://www.junelakeaccommodations.com/vacation-rentals-homes-search.asp?txtStartDate=7%2F12%2F2024&txtEndDate=7%2F15%2F2024&categoryid=7889&destinationID=0&communityID=0&amenBedrooms=-1&maxPersons=0&advs=&sort=0&currentPage=1&flexibleDates=0&flexibleDatesThreshold=&searchAmenities=&showOnlySpecials=0" target="_blank" color="secondary" underline="none">
            A-frame Cabins
          </Link>
          <br/>
          
          When searching on sites like AirBnb and Vrbo, be aware that they'll try to recommend places in Mammoth.
          This will add another 20-30 minutes to the estimated 90 minute drive from June Lake to Tenaya Lake on the morning of
          the wedding. We strongly recommend you stay in June Lake, if possible.
          <br/>
          <i>Text Haley if you're having trouble finding lodging.</i>
        </div>
        <div className="title">
          Camping
        </div>
        <div className="text">
          <img src={process.env.PUBLIC_URL + "/gullLakeCampground.png"}/><br/>
          <Link href="https://www.fs.usda.gov/recarea/inyo/recarea/?recid=20568" color="secondary" underline="none" target="_blank">
            Gull Lake Campground
          </Link>*<br/>
          There are only ~10 spots and they go quick. Make sure to check when sites are released.<br/>
          <Link href="https://goldenpinervpark.com/" color="secondary" underline="none" target="_blank">
            Golden Pine RV Park
          </Link>*<br/>
          <Link href="https://www.fs.usda.gov/recarea/inyo/recarea/?recid=20562" color="secondary" underline="none" target="_blank">
            Hartley Springs campground
          </Link><br/>
          You can ride your OHV straight out of camp!
        </div>
        <img className="separator" src={process.env.PUBLIC_URL + "/trees.png"}/>
      </Box>
      <Box className="agenda-item">
        {user.isFlying && (
          <>
            <div className="time">
              Flying
            </div>
            <div className="text">
              {"The closest airport is "}
              <Link href="https://goo.gl/maps/GNu2TH6FhzWes2Hr7" color="secondary" underline="none" target="_blank">Reno International Airport</Link>,
              a 3 hour drive from June Lake. We'll be in the <i>Eastern</i> Sierras.
            </div>
          </>
        )}
        {user.isDriving && (
          <>
            <div className="time">
              Driving
            </div>
            <div className="text">
              Coming from San Diego, the 395 will be your best friend for the better part of a 6 hour drive.
            </div>
          </>
        )}
        <img className="separator" src={process.env.PUBLIC_URL + "/mountains.png"}/>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          Yosemite
        </div>
        <div className="text">
          Your park entrance pass will be valid for 7 days! You should take advantage of it!
          <br/>
          <div>If you'd like to stay in the valley before or after the wedding, book ASAP</div>
          <Link href="https://www.travelyosemite.com/lodging/yosemite-valley-lodge/" target="_blank" color="secondary" underline="none">
            Yosemite Valley Lodge
          </Link>
          <br/>
          <Link href="https://www.travelyosemite.com/lodging/curry-village/" target="_blank" color="secondary" underline="none">
            Curry Village
          </Link>
          <br/>
          <Link href="https://www.travelyosemite.com/lodging/housekeeping-camp/" target="_blank" color="secondary" underline="none">
            Housekeeping Camp
          </Link>
          <br/>
          <Link href="https://www.travelyosemite.com/lodging/the-ahwahnee/" target="_blank" color="secondary" underline="none">
            The Ahwahnee
          </Link>
        </div>
        <img className="separator" src={process.env.PUBLIC_URL + "/trees.png"}/>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          June Lake Activities
        </div>
        <div className="text">
          Kayak or Paddleboard on <Link href="https://gulllakemarina.com/" target="_blank" color="secondary" underline="none">
            Gull Lake
          </Link><br/>
          Rent a boat on <Link href="https://www.junelakemarina.net/" target="_blank" color="secondary" underline="none">
            June Lake
          </Link><br/>
          Grab a beer at <Link href="https://www.junelakebrewing.com/" target="_blank" color="secondary" underline="none">
            June Lake Brewing
          </Link><br/>
          Shopping in June Lake<br/>
          Shopping in the <Link href="http://villageatmammoth.com/" target="_blank" color="secondary" underline="none">
            Village at Mammoth
          </Link><br/>
          Mountain biking on <Link href="https://www.mammothmountain.com/" target="_blank" color="secondary" underline="none">
            Mammoth Mountain
          </Link><br/>
          <Link href="https://www.fs.usda.gov/recarea/inyo/recreation/ohv/recarea/?recid=20254&actid=94" target="_blank" color="secondary" underline="none">
            OHV Riding
          </Link><br/>
          There are <Link href="https://www.fs.usda.gov/recarea/inyo/recreation/ohv/recarea/?recid=20254&actid=94" target="_blank" color="secondary" underline="none">
            hikes
          </Link> literally everywhere! (be bear aware)
        </div>
      </Box>
    </div>
  );
};