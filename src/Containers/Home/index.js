import React from "react";
import {
  Navbar,
  Drawer,
  Services,
  Achievements,
  Investor,
  Footer,
} from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Modal } from "@material-ui/core";
import { ArrowRightAlt, Close } from "@material-ui/icons";
import Typical from "react-typical";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: "rgba(0,0,0,.8)",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1rem",
    fontSize: "2.3rem",
    fontWeight: 300,
    color: "rgba(255,255,255,.8)",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  sup: {
    fontSize: "20px",
    lineHeight: "22px",
    fontWeight: 500,
    paddingBottom: 5,
    cursor: "pointer",
  },
  subHeading: {
    marginBottom: "1rem",
    fontSize: "1.5rem",
    fontWeight: 300,
    color: "#B2B5B9",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  button: {
    background: "#00acee",
    borderRadius: 0,
    padding: 12,
    fontWeight: 700,
    minWidth: 200,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
    marginTop: "1.5em",
    "&:hover": {
      background: "#7E7675",
    },
  },
  paper: {
    position: "absolute",
    maxWidth: "240px",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    right: 0,
    minHeight: "100vh",
    height: "100%",
    borderColor: "#fff",
    padding: theme.spacing(4),
    outline: "none",
  },
  item: {
    fontSize: 14,
    fontWeight: 300,
    margin: "10px 0",
    lineHeight: "22px",
  },
  modal: {
    outline: "none",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },

  "@media (max-width: 800px)": {
    heroSection: {
      height: "80vh",
    },
    heading: {
      fontSize: "2rem",
      letterSpacing: "0em",
    },
    subHeading: {
      fontSize: "1.2rem",
    },
  },
  sideBar: {
    display: "none",
  },
  "@media (max-width: 600px)": {
    navBar: {
      display: "none",
    },
    sideBar: {
      display: "block",
    },
  },
}));

const navData = {
  bgColor: "rgba(0,0,0,0.2)",
  color: "#fff",
  logo:
    "https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/website/logo_light.svg",
  mobileLogo:
    "https://d2v4u62fw1nf2w.cloudfront.net/app/img/website/icon_light.svg",
};

function About() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/originals/82/7a/56/827a56898488901141feac047e1dbdb5.jpg')",
    }}
    >
      <div style={{ position: "fixed", width: "100%" }}>
        <div className={classes.navBar}>
          <Navbar {...navData} />
        </div>
        <div className={classes.sideBar}><Drawer {...navData} /></div>
      </div>
      {/* Header Container */}
      <div className={classes.headerContainer}>
        <Container>
          <div className={classes.heroSection}>
            <h1 className={classes.heading}>
              Participate in your velted{" "}
              <Typical
                steps={[1000, "digital revenue", 3000, "digital content", 3000]}
                loop={Infinity}
                wrapper="b"
              />
              share{" "}
              <sup className={classes.sup} onClick={handleOpen}>
                1
              </sup>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
              >
                <div className={classes.paper}>
                  <Close fontSize="large" onClick={handleClose} />
                  <ol>
                    <li className={classes.item}>
                      Placeholder’s due diligence process is no guarantee of
                      success or future results. All investors should carefully
                      review each investment opportunity and cancel their
                      subscription within the allotted time-frame if they do not
                      feel comfortable making any specific investment based on
                      their own DD. Learn more about due diligence in the
                      Placeholder Academy
                      (https://www.Placeholder.com/academy/how-to-assess-a-startup-investment)
                      and our vetting process in our FAQs
                      (https://www.Placeholder.com/faqs)
                    </li>
                    <li className={classes.item}>
                      Placeholder’s selection criteria does not suggest higher
                      quality investment opportunities nor does it imply that
                      investors will generate positive returns in investment
                      opportunities on Placeholder. Learn more about due
                      diligence in the Placeholder Academy
                      (https://www.Placeholder.com/academy/how-to-assess-a-startup-investment)
                      and our vetting process in our FAQs
                      (https://www.Placeholder.com/faqs)
                    </li>
                    <li className={classes.item}>
                      iversification is only across multiple early-stage
                      investment opportunities within the asset class. There is
                      no guarantee that this program will lead to a
                      well-balanced portfolio of companies across industry types
                      or stages across
                    </li>
                  </ol>
                </div>
              </Modal>
            </h1>
            <h2 className={classes.subHeading}>
              You can now take a bite from the pie.
            </h2>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.button}
            >
              Sign up for free <ArrowRightAlt size={15} />
            </Button>
          </div>
        </Container>
      </div>
      <Services />
      {/* <Achievements /> */}
      <Investor />
      <Footer />
    </div>
  );
}

export default About;
