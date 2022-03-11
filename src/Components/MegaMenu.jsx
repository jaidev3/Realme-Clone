import "../Styles/MegaMenu.css";
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
              {Data.phones.map((el, i) => {
                return (
                  <div key={i}>
                    <div className="Item">
                      <img src={el.imgTwo} alt="img" />
                      <div className="leftItem">
                        <h3>{el.title}</h3>
                        <p>₹ {el.price}</p>
                      </div>
                    </div>
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
