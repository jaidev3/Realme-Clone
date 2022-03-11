import {React,useState,useContext} from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import {useNavigate} from "react-router-dom"
import "../styles/login.css";

const Login = () => {
  const [form, setForm] = useState({});
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };


  return (
    <div>
      <div className="back">
        <div className="flexc">
          <div className="flex-item">realme</div>
          <div className="flex-item2">Help center</div>
          <div className="flex-item3">English</div>
        </div>
        <h1>realme</h1>{" "}
        <div className="box1">
          <h1 className="signin">Sign in</h1>
          <span>Sign in with Email: <b>eve.holt@reqres.in</b></span>
          <br />
          <br />
          <input  onChange={handleChange}
            autocomplete="off"
            className="input_box"
            placeholder="Phone/Email"
            name="email"
            type="text"
          />
          <input  onChange={handleChange}
            autocomplete="off"
            className="input_box"
            placeholder="Password"
            name="password"
            type="text"
          />
          <div className="forgot">Forgot password?</div>
          <div 
           onClick={() => {
            fetch("https://reqres.in/api/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(form)
            })
              .then((d) => d.json())
              .then((res) => {
                handleToken(res.token);
                console.log(res);
                if (res.token) {
                  navigate(-1);
                }
              });
          }}
          className="button_signin">Sign in</div>
          <div className="privacy">Privacy Notice</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="createacc">Create account</div>
          <br />
          <br />
          <div className="othersign">
            {/* <span>Other ways to sign in</span> */}
          </div>
          {/* <img className="imga" src="../images/googl.png" alt="" /> */}
        </div>
      </div>
      <br />
      <br />
      <p className="base_footer">
        HeyTap provides account services for realme users
      </p>
      <span className="base_footerr">Copyright © BRAVO UNICORN PTE. LTD</span>
    </div>
  );
};

export default Login;
