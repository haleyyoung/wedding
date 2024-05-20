import {Box, Link} from '@mui/material';

export default function Photographers() {
  return (
    <div className="day-of page">
      <div className="page-title">Photography Schedule</div>
      <div className="note">
        This is a draft to give you an idea. We'll work through this together as the time gets closer.
      </div>
      <Box className="agenda-item">
        <div className="time">
          6 - 7am
        </div>
        <div className="title">
          Getting Ready
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          7 - 7:30am
        </div>
        <div className="title">
          Group photos
        </div>
        <div className="text">
          Wedding party and family various places in the house. Make sure the bride and groom don't see each other!
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          7:30 - 9am
        </div>
        <div className="title">
          Drive to Tenaya Lake
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          9 - 9:10am
        </div>
        <div className="title">
          First Look
        </div>
        <div className="text">
           In the meadow along the walking path to Tenaya from the parking lot.
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          9:10 - 9:30am
        </div>
        <div className="title">
          Ceremony
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          9:30 - 10:30am
        </div>
        <div className="title">
          Picnic
        </div>
        <div className="text">
           Get whatever photos you can of the picnic activities. We'll also have food for you two.
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          10:15 - 11am
        </div>
        <div className="title">
          Group Photos
        </div>
        <div className="text">
           We'd like family/wedding party photos as well as a photo of us with each family. This will be happening
           while people are eating their picnic breakfasts, so the guests will be slightly entertained.
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          11am - 1pm
        </div>
        <div className="title">
          Portraits
        </div>
        <div className="text">
          Let's go to a couple places in the high country. Tuolomne meadows is a must! Any other ideas are up to you!
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          1pm - 8pm
        </div>
        <div className="title">
          Chill/Nap/You do you
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          8pm - 10pm
        </div>
        <div className="title">
          Dessert Bar
        </div>
        <div className="text">
          Our original plan was to have our family snap some photos of the first dance/father-daughter/mother-son dances at the end of the night.
          If you're willing and able to make it, we'd really just love to get some photos of the dances (~8:20pm?).
          Other than that, feel free to bring your wife, eat some good desserts, hang with Katelyn and Paz. If you're up
          for it, we think this would be pretty light-weight and quick (10-15 min). Let us know! We can talk about this over the phone or whenever.
        </div>
      </Box>

      <div className="page-title">Portraits Schedule</div>
      <div className="note">Monday July 15</div>
      <Box className="agenda-item">
        <div className="time">
          4 - 8pm?
        </div>
        <div className="title">
          Yosemite Valley
        </div>
        <div className="text">
          Some ideas for spots to hit: Yosemite Falls, tree-lined paths (
          <Link href="https://maps.app.goo.gl/tpT9pdSVxJXB9Bvy9" target="_blank" color="primary" underline="none">#1</Link>
          {" and "}
          <Link href="https://maps.app.goo.gl/zrQCRcBbJ5smrpJK9" target="_blank" color="primary" underline="none">#2</Link>
          ), along the Merced river somewhere, Vernal Falls, Happy Isles, other ideas?
        </div>
      </Box>
      <Box className="agenda-item">
        <div className="time">
          Dark?
        </div>
        <div className="title">
          Galaxy Photos?
        </div>
        <div className="text">
          No preference on where, you'll have a better idea on time than we do. Do you think we should tack this on after the dessert bar
          (if you come) instead?
        </div>
      </Box>

    </div>
  );
};
