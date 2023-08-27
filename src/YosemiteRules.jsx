export default function YosemiteRules() {
  return (
    <div className="yosemite-rules page">
      <div className="page-title">
        Yosemite Rules
      </div>
      <div>We're getting married in a National Park, so with that comes some unusual rules for a wedding...</div>
      <div className="content-2-columns">
        <img className="image" src={process.env.PUBLIC_URL + "/meadow.png"}/>
        <div className="order-2">
          No trampling the meadows, please be respectful of the park
        </div>
      </div>
      <div className="content-2-columns">
        <img className="image order-2" src={process.env.PUBLIC_URL + "/enjoy.png"}/>
        <div>
          No excessive noise, again, please be respectful of others trying to enjoy the park
        </div>
      </div>
      <div className="content-2-columns">
        <img className="image" src={process.env.PUBLIC_URL + "/chair.jpg"}/>
        <div className="order-2">
          No chairs at the ceremony, standing room only
        </div>
      </div>
      <div className="content-2-columns">
        <img className="image order-2" src={process.env.PUBLIC_URL + "/picnic.jpg"}/>
        <div>
          We can only comandeer <i>one</i> picnic table. Please be prepared to sit on the sand for breakfast.
          We'll have picnic blankes for everyone to use.
        </div>
      </div>
    </div>
  );
};
