import React, { useState, useEffect } from "react";
import { Navbar, Drawer } from "./../../Components";
import { Container, Button, TextField, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  login: {
    border: "1px solid #e8e8e8",
    margin: "5% 2%",
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 400,
    color: "#fff",
  },
  titleBox: {
    textAlign: "center",
    padding: "10%",
    borderBottom: "1px solid #e8e8e8",
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#00acee",
  },
  inputContainer: {
    padding: "15%",
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  forgotLink: {
    textDecoration: "none",
    color: "#777777",
    marginTop: 20,
    display: 'block',
    "&:hover": {
      textDecoration: "underline",
    },
  },
  buttonBox: {
    textAlign: "center",
    marginTop: "8%",
  },
  button: {
    backgroundColor: "#d8d8d8",
    color: "#fff",
    borderRadius: 0,
    padding: 12,
    minWidth: 100,
    margin: "1.5em 0",
    "&:hover": {
      backgroundColor: "#d8d8d8",
    },
  },
  buttonActive: {
    backgroundColor: "#00acee",
    color: "#fff",
    borderRadius: 0,
    padding: 12,
    minWidth: 100,
    margin: "1.5em 0",
    "&:hover": {
      backgroundColor: "#00acee",
    },
  },
  signUpLink: {
    textDecoration: "none",
    color: "#00acee",
    fontWeight: 500,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  sideBar: {
    display: "none",
  },
  "@media (max-width: 600px)": {
    inputContainer: {
      padding: "5%",
    },
    navBar: {
      display: "none",
    },
    sideBar: {
      display: "block",
    },
  },
}));

const navData = {
  bgColor: "#fff",
  color: "#000",
  logo:
    "https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/website/logo_dark.svg",
  mobileLogo:
    "https://d2v4u62fw1nf2w.cloudfront.net/app/img/website/icon_dark.svg",
};

function Login(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    console.log(email, password);
    const HandleChange = () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmail = re.test(String(email).toLowerCase());
      if (isEmail) {
        if (password.length >= 5) {
          console.log("Trure");
          setValidate(true);
        }
      } else {
        console.log("False");
      }
    };
    // console.log(HandleChange)
    return () => {
      HandleChange();
    };
  }, [email, password]);

  const Login = () => {
    localStorage.setItem("user", JSON.parse(true));
    props.history.push("/offerings");
  };
  return (
    <div>
      <div>
        <div className={classes.navBar}>
          <Navbar {...navData} />
        </div>
        <div className={classes.sideBar}>
          <Drawer {...navData} />
        </div>
      </div>

      <Container maxWidth="sm">
        <div className={classes.login}>
          <div className={classes.titleBox}>
            <h3 className={classes.title}>Log In</h3>
          </div>

          <div className={classes.inputContainer}>
            <TextField
              id="standard-basic"
              label="
              Email Address"
              fullWidth
              className={classes.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Passwrod"
              fullWidth
              className={classes.input}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Link href="/" className={classes.forgotLink}>
              Forgot Password?
            </Link>

            <div className={classes.buttonBox}>
              <Button
                size="large"
                color="primary"
                className={clsx(
                  classes.button,
                  validate ? classes.buttonActive : ""
                )}
                onClick={() => Login()}
              >
                Login
              </Button>
              <br />
              <Link href="/signup" className={classes.signUpLink}>
                Don't have an account?
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
