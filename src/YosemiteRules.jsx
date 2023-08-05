export default function YosemiteRules() {
  return (
    <div className="yosemite-rules" sx={{background: '#000033'}}>
      <h2>We're getting married in a National Park, so with that comes some unusual rules for a wedding...</h2>
      <div className="content-2-columns">
        <img className="image" src={process.env.PUBLIC_URL + "/meadow.png"}/>
        <div>
          No trampling the meadows, please be respectful of the park
        </div>
      </div>
      <div className="content-2-columns">
        <div>
          No excessive noise, again, please be respectful of others trying to enjoy the park
        </div>
        <img className="image" src={process.env.PUBLIC_URL + "/enjoy.png"}/>
      </div>
      <div className="content-2-columns">
        <img className="image" src={process.env.PUBLIC_URL + "/chair.jpg"}/>
        <div>
          No chairs at the ceremony, sanding room only (except elderly people - aka Haley's 93 year old Grandpa 😉)
        </div>
      </div>
      <div className="content-2-columns">
        <div>
          We can only comandeer <i>one</i> picnic table. Please be prepared to sit on the sand for breakfast.
          We'll have picnic blankes for everyone to use.
        </div>
        <img className="image" src={process.env.PUBLIC_URL + "/picnic.jpg"}/>
      </div>
    </div>
  );
};