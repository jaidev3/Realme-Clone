import React from "react";
import "../styles/login.css";

const Login = () => {
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
          <span>Sign in with password</span>
          <br />
          <br />
          <input
            autocomplete="off"
            className="input_box"
            placeholder="Phone/Email"
            name="account"
            type="text"
            value=""
          />
          <input
            autocomplete="off"
            className="input_box"
            placeholder="Password"
            name="account"
            type="text"
            value=""
          />
          <div className="forgot">Forgot password?</div>
          <div className="button_signin">Sign in</div>
          <div className="privacy">Privacy Notice</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="createacc">Create account</div>
          <br />
          <br />
          <div className="othersign">
            <span>Other ways to sign in</span>
          </div>
          <img className="imga" src="../images/googl.png" alt="" />
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
