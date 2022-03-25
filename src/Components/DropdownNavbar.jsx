import "../Styles/DropdownNavebar.css";
import { Link } from "react-router-dom";
import Data from "../ProductData/db.json";
function DropdownMenu({ title }) {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          {title}
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <div className="row">
            <div className="column">
              {Data.goneInFlash
                .filter((e) => {
                  if (e.id < 9) return e;
                })
                .map((el, i) => {
                  return (
                    <div key={i}>
                      <Link to={`/search/${el.id}`}>
                        <div className="Item">
                          <img src={el.imgTwo} alt="img" />
                          <div className="leftItem">
                            <h3>{el.title}</h3>
                            <p>₹ {el.price}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;
