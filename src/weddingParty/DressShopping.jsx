import {Link, Modal} from '@mui/material';

export default function DressShoping({handleClose}: props) {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        top: '3rem',
        bottom: '3rem',
        overflow: 'scroll',
      }}
    >
      <div className="modal">
        <img className="chevron" src="/chevron.gif" alt="down-arrow"/>
        <div className="modal-content">
          <div className="title">
            Wedding Dress Shopping
          </div>
          <Link
            href="https://www.google.com/maps/dir/Prevue+Formal+and+Bridal,+5500+Grossmont+Center+Dr,+La+Mesa,+CA+91942/NATTY+BELLA+BRIDAL+COUTURE,+South+Oceanside+Boulevard,+Oceanside,+CA/Vanessa+Alfaro+Bridal+%26+Couture+(By+Appointment+only),+Comet+Chase+Ct,+Menifee,+CA/@33.2083668,-117.5264805,10z/data=!3m1!4b1!4m20!4m19!1m5!1m1!1s0x80d95712c182c00b:0xb0c72ec8ebbffa78!2m2!1d-117.0118717!2d32.7791048!1m5!1m1!1s0x80dc71789bddf70b:0x8a51a0c8c7ec8735!2m2!1d-117.3594872!2d33.189859!1m5!1m1!1s0x80db63d854b51463:0x5636d7530d41756a!2m2!1d-117.1364665!2d33.6465016!3e0?entry=ttu"
            target="_blank"
            color="primary"
            underline="none"
          >
            Our route
          </Link>
          <div className="note">
            Because of appointment logistics, this is gonna be a long day, so feel free to pick and choose any subset of shops
            you want to come along for.
          </div>
          <br/>
          <div className="stop">
            <div className="time">9:30 - 10:30am</div>
            La Mesa<br/>
            <Link
              href="https://www.google.com/maps/place/Prevue+Formal+and+Bridal/@32.7791048,-117.0144466,17z/data=!3m1!4b1!4m6!3m5!1s0x80d95712c182c00b:0xb0c72ec8ebbffa78!8m2!3d32.7791048!4d-117.0118717!16s%2Fg%2F1tcwg85h?entry=ttu"
              target="_blank"
              color="primary"
              underline="none"
            >
              Prevue Formal and Bridal
            </Link>
          </div>
          <div className="stop">
            <div className="time">10:30am - 2pm</div>
            Drive to Oceanside/Lunch
            <div className="note">
              We'll probably have time to walk around Oceanside and explore a bit after lunch.
            </div>
          </div>
          <div className="stop">
            <div className="time">2 - 3:30pm</div>
            Oceanside<br/>
            <Link
              href="https://www.google.com/maps/place/NATTY+BELLA+BRIDAL+COUTURE/@33.189859,-117.3620621,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc71789bddf70b:0x8a51a0c8c7ec8735!8m2!3d33.189859!4d-117.3594872!16s%2Fg%2F11jptbhq5l?entry=ttu"
              target="_blank"
              color="primary"
              underline="none"
            >
              Natty Bella Bridal Couture
            </Link>
          </div>
          <div className="stop">
            <div className="time">3:30 - 6pm</div>
            Drive to Menifee/Dinner
          </div>
          <div className="stop">
            <div className="time">6 - 8pm</div>
            Menifee<br/>
            <Link
              href="https://www.google.com/maps/place/Vanessa+Alfaro+Bridal+%26+Couture+(By+Appointment+only)/@33.6465016,-117.1390414,17z/data=!3m1!4b1!4m6!3m5!1s0x80db63d854b51463:0x5636d7530d41756a!8m2!3d33.6465016!4d-117.1364665!16s%2Fg%2F11h_sczj_2?entry=ttu"
              target="_blank"
              color="primary"
              underline="none"
            >
              Vanessa Alfaro Bridal and Couture
            </Link>
            <div className="note">
              This shop is 5 minutes from our house if anyone wants to stay the night instead of driving home. We've
              got a guest room, a couch, and a redneck amount of RVs.
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}