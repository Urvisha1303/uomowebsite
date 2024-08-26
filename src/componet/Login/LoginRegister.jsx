import React, { useEffect, useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const navigate = useNavigate()
  // register
  const [regiForm, setRegiForm] = useState({
    registerUsername: "",
    registerEmail: "",
    registerPassword: "",
    isadmin: "",
  });
  const [regiFromError, setRegiFormError] = useState({});

  // login

  const [loginForm, setLoginForm] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [loginFormError, setLoginFormError] = useState({});

  // register

  const submitRegister = async (e) => {
    e.preventDefault();
    console.log("hii");
    let validateForm = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regiForm.registerUsername == "") {
      validateForm.username = "Please Insert Username";
    }

    if (
      regiForm.registerEmail == "" ||
      emailRegex.test(regiForm.registerEmail) == false
    ) {
      validateForm.email = "Please Enter ValidEmail";
    }

    if (regiForm.registerPassword == "") {
      validateForm.password = "Please insert Password";
    }

    // already register user

    let Exitemail = await axios.get(
      `http://localhost:3000/user?registerEmail=${regiForm.registerEmail}`
    );
    console.log(Exitemail);
    // return false;

    if (Exitemail.data.length !== 0) {
      validateForm.email = "Email Already Exist";
    }
    // ******//
    // console.log(validateForm);
    setRegiFormError(validateForm);
    if (Object.keys(validateForm).length == 0) {
      let added = await axios.post(`http://localhost:3000/user`, regiForm);
      // console.log(added.status);
      if (added.status == 201) {
        toast.success("Register Successfully");
        // document.location = "login";
        setTimeout(() => {
          document.location = "login";
        }, 1000);
      }
    }
  };

  const registerChange = (e) => {
    // let {name,value} = e.target
    // console.log(name, value);
    let { name } = e.target;
    if (name == "isadmin") {
      setRegiForm({ ...regiForm, [name]: e.target.checked });
    } else {
      setRegiForm({ ...regiForm, [name]: e.target.value });
    }
  };

  //   useEffect(()=>{
  // console.log(regiForm);
  //   },[regiForm])

  // Login Code here

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      let validationForm = {};
      // console.log('hello',loginForm.loginEmail);
      let loginCheck = await axios.get(
        `http://localhost:3000/user?registerEmail=${loginForm.loginEmail}`
      );
      //  console.log('hii',loginCheck);
      if (loginCheck.data.length == 0) {
        validationForm.email = "Email Not Exist";
        console.log("email error");
      } else if (
        loginCheck.data.length != 0  && loginCheck.data[0].registerPassword !== loginForm.loginPassword
      ) {
        validationForm.password = "Please enter valid password";
      }

      setLoginFormError(validationForm);
      if (Object.keys(validationForm).length == 0) {
        // alert("Login Successfully");
        localStorage.setItem("username", loginCheck.data[0].registerUsername);
        localStorage.setItem("userid", loginCheck.data[0].id);
        localStorage.setItem("isadmin", loginCheck.data[0].isadmin);

        if (loginCheck.data[0].isadmin == true) {
          navigate('/dashboard')

        } else {
          navigate('/')
        }
        if(loginCheck.data[0].isadmin== true){
          // document.location = "dashboard";
          navigator('/dashboard')
        }else{
          // document.location = "home";
          navigator('/');
      }
      } 
  }catch (error) {
    console.log(error)
  }}

  const loginChange = (e) => {
    let { name } = e.target;
    setLoginForm({ ...loginForm, [name]: e.target.value });
  };

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <main style={{ paddingTop: 90 }}>
        <div className="mb-4 pb-4" />
        <section className="login-register container">
          <h2 className="d-none">Login &amp; Register</h2>
          <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore active"
                id="login-tab"
                data-bs-toggle="tab"
                href="#tab-item-login"
                role="tab"
                aria-controls="tab-item-login"
                aria-selected="true"
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore"
                id="register-tab"
                data-bs-toggle="tab"
                href="#tab-item-register"
                role="tab"
                aria-controls="tab-item-register"
                aria-selected="false"
              >
                Register
              </a>
            </li>
          </ul>
          <div className="tab-content pt-2" id="login_register_tab_content">
            <div
              className="tab-pane fade active show"
              id="tab-item-login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <div className="login-form">
                <form
                  name="login-form"
                  onSubmit={submitLogin}
                  className="needs-validation"
                  noValidate=""
                >
                  <div className="form-floating mb-3">
                    <input
                      name="loginEmail"
                      value={loginForm.LoginEmail}
                      onChange={loginChange}
                      type="email"
                      className="form-control form-control_gray"
                      id="loginEmail"
                      placeholder="Email address *"
                      required=""
                    />
                    <span style={{ color: "red" }}>
                      {loginFormError.email ? loginFormError.email : ""}
                    </span>
                    <label htmlFor="customerNameEmailInput1">
                      Email address *
                    </label>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="loginPassword"
                      onChange={loginChange}
                      value={loginForm.loginPassword}
                      type="password"
                      className="form-control form-control_gray"
                      id="loginPassword"
                      placeholder="Password *"
                      required=""
                    />
                    <span style={{ color: "red" }}>
                      {loginFormError.password ? loginFormError.password : ""}
                    </span>
                    <label htmlFor="customerPasswodInput">Password *</label>
                  </div>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <div className="form-check mb-0">
                      <input
                        name="remember"
                        className="form-check-input form-check-input_fill"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault1"
                      />
                      <label
                        className="form-check-label text-secondary"
                        htmlFor="flexCheckDefault1"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="reset_password.html" className="btn-text ms-auto">
                      Lost password?
                    </a>
                  </div>
                  <input
                    value={"Login"}
                    className="btn btn-primary w-100 text-uppercase"
                    type="submit"
                  />

                  <div className="customer-option mt-4 text-center">
                    <span className="text-secondary">No account yet?</span>
                    <a
                      href="#register-tab"
                      className="btn-text js-show-register"
                    >
                      Create Account
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-item-register"
              role="tabpanel"
              aria-labelledby="register-tab"
            >
              <div className="register-form">
                <form
                  onSubmit={submitRegister}
                  name="register-form"
                  className="needs-validation"
                  noValidate=""
                >
                  <div className="form-floating mb-3">
                    <input
                      name="registerUsername"
                      onChange={registerChange}
                      type="text"
                      className="form-control form-control_gray"
                      id="customerNameRegisterInput"
                      placeholder="registerUsername"
                      required=""
                    />
                    <label htmlFor="customerNameRegisterInput">Username</label>
                    <span style={{ color: "red" }}>
                      {regiFromError.username ? regiFromError.username : ""}
                    </span>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="registerEmail"
                      onChange={registerChange}
                      type="text"
                      className="form-control form-control_gray"
                      id="registerEmail"
                      placeholder="Email address *"
                      // required=""
                    />
                    <label htmlFor="customerEmailRegisterInput">
                      Email address *
                    </label>
                    <span style={{ color: "red" }}>
                      {regiFromError.email ? regiFromError.email : ""}
                    </span>
                    <span style={{ color: "red" }}>
                      {regiFromError.email ? regiFromError.username : ""}
                    </span>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="isadmin"
                      className="form-check-input form-check-input_fill"
                      type="checkbox"
                      defaultValue=""
                      id="isadmin"
                      onChange={registerChange}
                    />
                    <label
                      className="form-check-label text-secondary"
                      htmlFor="flexCheckDefault1"
                    >
                      Is admin ?
                    </label>
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="registerPassword"
                      type="password"
                      className="form-control form-control_gray"
                      id="registerPassword"
                      placeholder="Password *"
                      onChange={registerChange}
                      required=""
                    />
                    <label htmlFor="customerPasswodRegisterInput">
                      Password *
                    </label>
                    <span style={{ color: "red" }}>
                      {regiFromError.password ? regiFromError.password : ""}
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <p className="m-0">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy.
                    </p>
                  </div>
                  <input
                    className="btn btn-primary w-100 text-uppercase"
                    type="submit"
                    value={"Register"}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginRegister;
