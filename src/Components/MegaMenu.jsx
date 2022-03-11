import "../Styles/MegaMenu.css";
import { Link } from "react-router-dom";
import Data from "../ProductData/db.json";
function MegaMenu({ title }) {
  return (
    <>
      <div class="dropdown">
        <button class="dropbtn">
          {title}
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
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

export default MegaMenu;
