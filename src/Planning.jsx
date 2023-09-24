import { useRef, useState } from 'react';
import {Box, Link, LinkTab, Tab, Tabs} from '@mui/material';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import useUser from './hooks/useUser';

export default function Planning() {
  const ref = useRef();
  const user = useUser();
  return (
    <div className="planning page">
      <Box className="section">
        <div className="title">
          Lodging
          <div className="note">
            (Those marked with a <img className="marker" src={process.env.PUBLIC_URL + "/treeMarker.png"}/> are within a 15 minute walk to our AirBnb!)
          </div>
        </div>
        <div className="sub-title">
          Hotels/Cabins
        </div>
        <div className="text">
          Lodging is <i>extremely</i> limited in the small town of June Lake, so you'll want to book ASAP.
          <div>
            {(user?.isFamily || user?.isWeddingParty) && (
              <div className="alert-stamp">
                {user?.isWeddingParty && (
                  <div className="group"><span>Wedding party,</span></div>
                )}
                {!user?.isWeddingParty && user?.isFamily && (
                  <div className="group"><span>Family,</span></div>
                )}
                <span>we gotchu July 12-14</span>
              </div>
            )}
            <img src={process.env.PUBLIC_URL + "/lodging.jpg"}/>
          </div>
          <div>Here are a few places we'd recommend.</div>
          <br/>
          <Link href="https://www.heidelberginnresort.com/" target="_blank" color="primary" underline="none">
            Heidelberg Inn
          </Link> <img className="marker" src={process.env.PUBLIC_URL + "/treeMarker.png"}/>
          <div className="details">(call to book)</div>
          <Link href="https://www.lakefrontcabins.co/" target="_blank" color="primary" underline="none">
            Lake Front Cabins
          </Link> <img className="marker" src={process.env.PUBLIC_URL + "/treeMarker.png"}/>
          <br/>
          <Link href="https://junelakemotel.com/" target="_blank" color="primary" underline="none">
            June Lake Motel
          </Link> <img className="marker" src={process.env.PUBLIC_URL + "/treeMarker.png"}/>
          <br/>
          <Link href="https://doubleeagle.com/" target="_blank" color="primary" underline="none">
            Double Eagle Resort & Spa
          </Link>
          <br/>
          <Link href="https://www.junelakeaccommodations.com/vacation-rentals-homes-search.asp?txtStartDate=7%2F12%2F2024&txtEndDate=7%2F15%2F2024&categoryid=7889&destinationID=0&communityID=0&amenBedrooms=-1&maxPersons=0&advs=&sort=0&currentPage=1&flexibleDates=0&flexibleDatesThreshold=&searchAmenities=&showOnlySpecials=0" target="_blank" color="primary" underline="none">
            A-frame Cabins
          </Link>
          <br/>
          <br/>
          When searching on sites like AirBnb and Vrbo, be aware that they'll try to recommend places in Mammoth.
          This will add another 20-30 minutes to the estimated 1 <span className="fraction">1/2</span> hour drive from June Lake to Tenaya Lake on the morning of
          the wedding. We strongly recommend you stay in June Lake, if possible.
          <br/>
          <div className="note">Text Haley if you're having trouble finding lodging.</div>
        </div>
        <div className="sub-title">
          Camping
        </div>
        <div className="text">
          <img src={process.env.PUBLIC_URL + "/camping.png"}/><br/>
          <Link href="https://www.fs.usda.gov/recarea/inyo/recarea/?recid=20568" color="primary" underline="none" target="_blank">
            Gull Lake Campground
          </Link> <img className="marker" src={process.env.PUBLIC_URL + "/treeMarker.png"}/>
          <div className="details">There are only ~10 spots and they go quick. Make sure to check when sites are released.</div>
          <Link href="https://goldenpinervpark.com/" color="primary" underline="none" target="_blank">
            Golden Pine RV Park
          </Link> <img className="marker" src={process.env.PUBLIC_URL + "/treeMarker.png"}/><br/>
          <Link href="https://www.fs.usda.gov/recarea/inyo/recarea/?recid=20576" color="primary" underline="none" target="_blank">
            Oh Ridge Campground
          </Link><br/>
          <Link href="https://www.fs.usda.gov/recarea/inyo/recarea/?recid=20562" color="primary" underline="none" target="_blank">
            Hartley Springs campground
          </Link>
          <Link href="https://goo.gl/maps/zmZbQhUobgUe3MX98" color="primary" underline="none" target="_blank">
            Owens River Road
          </Link>
          <div className="details">Free camping and you can ride your OHV here as well!</div>
        </div>
      </Box>
      <img className="separator" src={process.env.PUBLIC_URL + "/trees.png"}/>
      <Box className="section">
        <div className="title">Transportation</div>
        { (!user || user?.isFlying) && (
          <>
            <div className="sub-title">
              Flying
            </div>
            <img src={process.env.PUBLIC_URL + "/flying.png"}/><br/>
            <div className="text">
              <Link href="https://goo.gl/maps/GNu2TH6FhzWes2Hr7" color="primary" underline="none" target="_blank">Reno International Airport</Link>
              <div className="details">
                They'll have the most flights. Reno is a 3 hour drive to June Lake.
              </div>
              <Link href="https://maps.app.goo.gl/mDKw51wksAFUHJdZA" color="primary" underline="none" target="_blank">Bishop Airport</Link>
              <div className="details">
                Check with United Airlines. Bishop and is a 1 hour drive to June Lake.
              </div>
              <Link href="https://maps.app.goo.gl/pjYhGUg53RsNbHFx9" color="primary" underline="none" target="_blank">Carlsbad</Link>
              {" to "}
              <Link href="https://maps.app.goo.gl/fFWLRnukE8KLUtaP7" color="primary" underline="none" target="_blank">Mammoth</Link>
              <div className="details">
                {"Check with "}
                <Link href="https://advancedairlines.com/" color="primary" underline="none" target="_blank">Advanced Airlines</Link>.
              </div>
            </div>
          </>
        )}
        {(!user || user?.isDriving) && (
          <>
            <div className="sub-title">
              Driving
            </div>
            <img src={process.env.PUBLIC_URL + "/driving.png"}/><br/>
            <div className="text">
              Coming from San Diego, the 395 will be your best friend for the better part of a 6 <span className="fraction">1/2</span> hour drive.
            </div>
          </>
        )}
      </Box>
      <img className="separator" src={process.env.PUBLIC_URL + "/mountains.png"}/>
      <Box className="section">
        <div className="title">
          Yosemite
        </div>
        <div className="text">
          Your park entrance pass will be valid for 7 days! You should take advantage of it!
          <br/>
          <div>If you'd like to stay in the valley before or after the wedding, book ASAP</div>
          <Link href="https://www.travelyosemite.com/lodging/yosemite-valley-lodge/" target="_blank" color="primary" underline="none">
            Yosemite Valley Lodge
          </Link>
          <br/>
          <Link href="https://www.travelyosemite.com/lodging/curry-village/" target="_blank" color="primary" underline="none">
            Curry Village
          </Link>
          <br/>
          <Link href="https://www.travelyosemite.com/lodging/housekeeping-camp/" target="_blank" color="primary" underline="none">
            Housekeeping Camp
          </Link>
          <br/>
          <Link href="https://www.travelyosemite.com/lodging/the-ahwahnee/" target="_blank" color="primary" underline="none">
            The Ahwahnee
          </Link>
        </div>
        <div className="note">
          Important note: The 120 didn't open until the end of July in 2023. If this happens again,
          we will have no access to Yosemite from the Eastern Sierras and will have to hold our ceremony
          somewhere else. Make sure you have a tentative backup plan for any Yosemite travel plans you may make.
        </div>
      </Box>
      <img className="separator" src={process.env.PUBLIC_URL + "/trees.png"}/>
      <Box className="section">
        <div id="activities" className="title">
          June Lake Activities
        </div>
        <div className="text">
          Kayak or Paddleboard on <Link href="https://gulllakemarina.com/" target="_blank" color="primary" underline="none">
            Gull Lake
          </Link><br/>
          Rent a boat on <Link href="https://www.junelakemarina.net/" target="_blank" color="primary" underline="none">
            June Lake
          </Link><br/>
          Grab a beer at <Link href="https://www.junelakebrewing.com/" target="_blank" color="primary" underline="none">
            June Lake Brewing
          </Link><br/>
          Shopping in June Lake<br/>
          Shopping in the <Link href="http://villageatmammoth.com/" target="_blank" color="primary" underline="none">
            Village at Mammoth
          </Link><br/>
          Mountain biking on <Link href="https://www.mammothmountain.com/" target="_blank" color="primary" underline="none">
            Mammoth Mountain
          </Link><br/>
          <Link href="https://www.fs.usda.gov/recarea/inyo/recreation/ohv/recarea/?recid=20254&actid=94" target="_blank" color="primary" underline="none">
            OHV Riding
          </Link><br/>
          There are <Link href="https://www.fs.usda.gov/recarea/inyo/recreation/ohv/recarea/?recid=20254&actid=94" target="_blank" color="primary" underline="none">
            hikes
          </Link> literally everywhere! (be bear aware)
        </div>
      </Box>
      {user && !user?.isFamily && !user?.isWeddingParty && (
        <>
          <img className="separator" src={process.env.PUBLIC_URL + "/mountains.png"}/>
          <Box className="section">
            <div className="title">
              Important Locations
            </div>
            <div className="text">
              Here's a <Link
                href="https://www.google.com/maps/dir/Yosemite+National+Park,+Tioga+Pass+Entrance,+Tioga+Road,+Lee+Vining,+CA/Tenaya+Lake+Picnic+Area,+California/Yosemite+Valley+Lodge,+Yosemite+Lodge+Drive,+YOSEMITE+NATIONAL+PARK,+CA/37.7790657,-119.0823915/@37.8329868,-119.5941931,11z/data=!3m1!4b1!4m21!4m20!1m5!1m1!1s0x80965a98e360b9b5:0x6ef6c5376cba1f84!2m2!1d-119.2578956!2d37.9107024!1m5!1m1!1s0x8096f7bb2665db4b:0x1f631accddeea98b!2m2!1d-119.451885!2d37.8379632!1m5!1m1!1s0x8096910208695e7b:0x731e8f9ad23d2d15!2m2!1d-119.5982519!2d37.7434762!1m0!3e0?entry=ttu"
                target="_blank"
                color="primary"
                underline="none"
              >map
              </Link> of the commute between our Airbnb, the Yosemite Gate, Tenaya Lake and Yosemite Valley.
              <br/>
              <img src={process.env.PUBLIC_URL + "/map.png"}/>
            </div>
          </Box>
        </>
      )}
    </div>
  );
};
