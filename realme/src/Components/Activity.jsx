import "../styles/activity.css";

export const Activity = () => {
  return (
    <div>
      <div className="one">
        <img
          className="imgbox"
          src="https://image01.realme.net/general/20220103/1641202858593.jpg"
          alt=""
        />
        <img
          className="imgbox2"
          src="https://image01.realme.net/general/20211231/1640957957650.jpg"
          alt=""
        />{" "}
      </div>
      <div>
        <img
          className="longimg"
          src="https://static.realme.net/v2/home/images/pc/1920-28ebebe77b.jpg"
          alt=""
        />
        <div className="centered">Dare to Leap </div>
        <button className="centeredd">Learn more</button>
      </div>
    </div>
  );
};

export default Activity;
