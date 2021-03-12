import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    backgroundColor: "#ffffff",
  },
  services: {
    padding: "5% 0",
    borderBottom: "1px solid #E7E7E7",
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  logoContainer: {
    padding: "5% 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  logoBox: {
    flex: 1,
  },
  logo: {
    maxWidth: 220,
  },
  heading: {
    margin: "1rem 0",
    fontSize: 18,
    fontWeight: 400,
    color: "rgba(24,24,24,.9)",
    lineHeight: 0.5,
  },
  description: {
    fontSize: 16,
    color: "#838383",
  },
  buttonBox: {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "4%",
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    fontSize: 16,
    background: "#fff",
    borderRadius: 0,
    padding: "0.8% 3%",
    marginTop: "1.5em",
    fontWeight: 500,
    marginBottom: "2em",
    backgroundColor: "#00acee",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#00acee",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5),
    outline: "none",
    width: "30%",
    textAlign: "center",
  },
  newsLetterHeading: {
    letterSpacing: 1,
    fontWeight: 600,
    fontFamily: "Sans",
    margin: "2%",
  },
  "@media (max-width: 800px)": {
    title: {
      fontSize: 20,
      textAlign: "center",
      margin: "5% 0",
    },
  },
}));
function Investor() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.servicesContainer}>
      <Container>
        <div className={classes.services}>
          <h2 className={classes.title}>Our Partners</h2>
          <div className={classes.logoContainer}>
            <div className={classes.logoBox}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/56c775ad27d4bd3fdb24775d/1519067155901-OKFUUA9DU12JTGZ4KSU8/ke17ZwdGBToddI8pDm48kDM9K2YVWke7i6qyOZAoP55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6D66e60N4NH7-6c-GS1jKxs7fV43ip-j_qYsyLxlaZBtjGQiyL5M8H7JCrxTyoxc/dummy+logo.jpg"
                alt="verified"
                className={classes.logo}
              />
            </div>
            <div className={classes.logoBox}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/56c775ad27d4bd3fdb24775d/1519067155901-OKFUUA9DU12JTGZ4KSU8/ke17ZwdGBToddI8pDm48kDM9K2YVWke7i6qyOZAoP55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6D66e60N4NH7-6c-GS1jKxs7fV43ip-j_qYsyLxlaZBtjGQiyL5M8H7JCrxTyoxc/dummy+logo.jpg"
                alt="verified"
                className={classes.logo}
              />
            </div>
            <div className={classes.logoBox}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/56c775ad27d4bd3fdb24775d/1519067155901-OKFUUA9DU12JTGZ4KSU8/ke17ZwdGBToddI8pDm48kDM9K2YVWke7i6qyOZAoP55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6D66e60N4NH7-6c-GS1jKxs7fV43ip-j_qYsyLxlaZBtjGQiyL5M8H7JCrxTyoxc/dummy+logo.jpg"
                alt="verified"
                className={classes.logo}
              />
            </div>
            <div className={classes.logoBox}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/56c775ad27d4bd3fdb24775d/1519067155901-OKFUUA9DU12JTGZ4KSU8/ke17ZwdGBToddI8pDm48kDM9K2YVWke7i6qyOZAoP55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6D66e60N4NH7-6c-GS1jKxs7fV43ip-j_qYsyLxlaZBtjGQiyL5M8H7JCrxTyoxc/dummy+logo.jpg"
                alt="verified"
                className={classes.logo}
              />
            </div>
            <div className={classes.logoBox}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/56c775ad27d4bd3fdb24775d/1519067155901-OKFUUA9DU12JTGZ4KSU8/ke17ZwdGBToddI8pDm48kDM9K2YVWke7i6qyOZAoP55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6D66e60N4NH7-6c-GS1jKxs7fV43ip-j_qYsyLxlaZBtjGQiyL5M8H7JCrxTyoxc/dummy+logo.jpg"
                alt="verified"
                className={classes.logo}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className={classes.buttonBox}>
        <Button
          variant="contained"
          disableElevation
          className={classes.button}
          onClick={() => handleOpen()}
        >
          Join a Community
        </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h1 className={classes.newsLetterHeading}>
                Subscribe for latest Updates
              </h1>
              <br />
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Enter your Email Address"
              />
              <br />
              <Button className={classes.button} onClick={() => handleClose()}>
                Subscribe Now
              </Button>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Investor;
