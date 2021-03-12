import React, { useState, useEffect } from "react";
import { Navbar, Drawer } from "./../../Components";
import {
  Container,
  Button,
  TextField,
  Checkbox,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  signup: {
    border: "1px solid #e8e8e8",
    margin: "2% 4%",
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 400,
  },
  titleBox: {
    textAlign: "center",
    padding: "8%",
    borderBottom: "1px solid #e8e8e8",
    backgroundColor: "#00acee",
    color: "#fff",
    borderRadius: "10px 10px 0 0",
  },
  inputContainer: {
    paddingTop: 0,
    padding: "5%",
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  forgotLink: {
    textDecoration: "none",
    color: "#777777",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: "2%",
    gap: 5,
  },
  text: {
    fontSize: 14,
  },
  buttonBox: {
    textAlign: "center",
    marginTop: "4%",
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
    signup: {
      margin: "4% 0%",
    },
    text: {
      fontSize: 9,
    },
    inputContainer: {
      paddingTop: 0,
      padding: "1%",
    },
    title: {
      fontSize: 30,
      fontWeight: 400,
    },
    navBar: {
      display: "none",
    },
    sideBar: {
      display: "block",
    },
  },
}));

function Signup() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    console.log(email, firstName, lastName);
    const HandleChange = () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmail = re.test(String(email).toLowerCase());
      if (isEmail === true && firstName.length >= 1 && lastName.length >= 1) {
        console.log("Trure");
        setValidate(true);
      } else {
        console.log("False");
      }
    };
    // console.log(HandleChange)
    return () => {
      HandleChange();
    };
  }, [email, firstName, lastName]);

  const navData = {
    bgColor: "#fff",
    color: "#000",
    logo:
      "https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/website/logo_dark.svg",
    mobileLogo:
      "https://d2v4u62fw1nf2w.cloudfront.net/app/img/website/icon_dark.svg",
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
      <Container maxWidth="md">
        <div className={classes.signup}>
          <div className={classes.titleBox}>
            <h3 className={classes.title}>Create Account</h3>
          </div>

          <div className={classes.inputContainer}>
            <div style={{ padding: "10%", paddingTop: "2%" }}>
              <TextField
                id="standard-basic"
                label="First Name"
                fullWidth
                className={classes.input}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                fullWidth
                className={classes.input}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="
              Email Address"
                fullWidth
                className={classes.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.checkBoxContainer}>
              <div>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  style={{ padding: "0", margin: "0" }}
                />
              </div>
              <p className={classes.text}>
                I have read and agree to Placeholder's Terms of Use and Privacy
                Policy. I furthermore acknowledge that Issuers that successfully
                raise on Placeholder may pay affiliates of Placeholder fees in
                the form of cash or securities. (Learn more on our FAQs.)
              </p>
            </div>

            <div className={classes.checkBoxContainer}>
              <div>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  style={{ padding: "0", margin: "0" }}
                />
              </div>
              <p className={classes.text}>
                I would like to receive communications such as new
                opportunities, company updates, and event invitations.
              </p>
            </div>
            <div className={classes.buttonBox}>
              <Button
                size="large"
                color="primary"
                className={clsx(
                  classes.button,
                  validate ? classes.buttonActive : ""
                )}
              >
                Next
              </Button>
              <br />
              <Link href="/login" className={classes.signUpLink}>
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
