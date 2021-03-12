import React from "react";
import { Navbar, Drawer, Footer } from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Link,
  Modal,
  Backdrop,
  Fade,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: "#fff",
  },
  heroSection: {
    paddingTop: "100px",
    paddingBottom: "30px",
  },
  heading: {
    marginBottom: "1rem",
    fontSize: 40,
    fontWeight: 400,
    color: "#000",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  nav: {
    borderBottom: "1px solid #E7E7E7",
  },
  navItems: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  navItem: {
    padding: 10,
  },
  navItemActive: {
    textDecoration: "none",
    color: "#000000",
    borderBottom: "2px solid #000",
    padding: 10,
    fontWeight: 500,
  },
  navLink: {
    textDecoration: "none",
    color: "#777777",
    "&:hover": {
      color: "#000000",
    },
  },
  boxesContainer: {
    backgroundColor: "#fff",
    padding: "4% 0",
    borderBottom: "1px solid #E7E7E7",
  },

  sectionTitle: {
    fontWeight: 400,
    borderBottom: "1px solid #E7E7E7",
    paddingBottom: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "2% 0",
  },
  propertyBox: {
    minWidth: 200,
  },
  property: {
    fontSize: 16,
    fontWeight: 300,
  },
  input: {
    border: "none",
    fontSize: 30,
    backgroundColor: "#fff",
    maxWidth: 180,
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
    width: "35%",
    height: "55%",
  },
  button: {
    backgroundColor: "#d8d8d8",
    color: "#fff",
    borderRadius: 0,
    padding: 6,
    minWidth: 100,
    margin: "1.5em 0",
    "&:hover": {
      backgroundColor: "#d8d8d8",
    },
  },
  buttonActive: {
    backgroundColor: "#3378be",
    color: "#fff",
    borderRadius: 0,
    padding: 8,
    minWidth: 100,
    margin: "1.5em 0",
    "&:hover": {
      backgroundColor: "#5898da",
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
    box: {
      display: "block",
      margin: "2% 0",
    },
  },
}));

const navData = {
  bgColor: "#fff",
  color: "#000",
};

function UserAccount() {
  const classes = useStyles();

  const [validate, setValidate] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenPassword(false);
  };

  const [openPassword, setOpenPassword] = React.useState(false);

  const handleOpenPassword = () => {
    setOpenPassword(true);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/marketing/virtuix.jpg')",
      }}
    >
      <div style={{ position: "absolute", width: "100%" }}>
        <div className={classes.navBar}>
          <Navbar {...navData} />
        </div>
        <div className={classes.sideBar}>
          <Drawer {...navData} />
        </div>
      </div>
      {/* Header Container */}
      <div className={classes.headerContainer}>
        <Container>
          <div className={classes.heroSection}>
            <h1 className={classes.heading}>User Settings</h1>
          </div>
        </Container>
        <div className={classes.nav}>
          <Container>
            <div className={classes.navItems}>
              <div className={classes.navItemActive}>
                <Link href="#" className={classes.navLink}>
                  User Account
                </Link>
              </div>
              <div className={classes.navItem}>
                <Link
                  href="/settings/user-identity"
                  className={classes.navLink}
                >
                  User Identity
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* <Services /> */}
      <div className={classes.boxesContainer}>
        <Container>
          <h2 className={classes.sectionTitle}>Security Details</h2>
          <div>
            <div className={classes.box}>
              <div className={classes.propertyBox}>
                <p className={classes.property}>Primary Email:</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p> amranidileep44@gmail.com </p>
                <Button onClick={handleOpen}>Edit</Button>
              </div>
            </div>

            <div className={classes.box}>
              <div className={classes.propertyBox}>
                <p className={classes.property}>Secondary Email:</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontSize: 14 }}>
                  Add an optional secondary email to verify your account
                </p>
                <Button onClick={handleOpen}>Edit</Button>
              </div>
            </div>

            <div className={classes.box}>
              <div className={classes.propertyBox}>
                <p className={classes.property}>Password:</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="password"
                  value="●●●●●●●●●●●●●●●●"
                  className={classes.input}
                  disabled
                />
                <Button onClick={handleOpenPassword}>Edit</Button>
              </div>
            </div>

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
                  <h2 id="transition-modal-title">Update Email</h2>
                  <form className={classes.root} noValidate autoComplete="off">
                    <div className={classes.box}>
                      <div className={classes.propertyBox}>
                        <p className={classes.property}>Primary Email</p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <TextField label="Email Address" fullWidth />
                      </div>
                    </div>
                    <br />

                    <div className={classes.box}>
                      <div className={classes.propertyBox}>
                        <p className={classes.property}>Secondary Email</p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <TextField label="Email Address" fullWidth />
                      </div>
                    </div>
                    <br />

                    <div className={classes.box}>
                      <div className={classes.propertyBox}>
                        <p className={classes.property}>Current password</p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <TextField
                          label="Current password"
                          type="passwrd"
                          fullWidth
                        />
                      </div>
                    </div>
                  </form>
                  <br />
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Button
                      size="large"
                      color="primary"
                      className={clsx(
                        classes.button,
                        validate ? classes.buttonActive : ""
                      )}
                    >
                      Update Email
                    </Button>
                  </div>
                </div>
              </Fade>
            </Modal>

            {/* Modal Password Change Dialog Box */}

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openPassword}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openPassword}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">Update Password</h2>
                  <form className={classes.root} noValidate autoComplete="off">
                    <div className={classes.box}>
                      <div className={classes.propertyBox}>
                        <p className={classes.property}>Current Password</p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <TextField
                          label="Current Password"
                          fullWidth
                          type="password"
                        />
                      </div>
                    </div>
                    <br />

                    <div className={classes.box}>
                      <div className={classes.propertyBox}>
                        <p className={classes.property}>New Password</p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <TextField
                          label="New Password"
                          fullWidth
                          type="password"
                        />
                      </div>
                    </div>
                    <br />

                    <div className={classes.box}>
                      <div className={classes.propertyBox}>
                        <p className={classes.property}>Confirm new password</p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <TextField
                          label="Confirm new password"
                          type="passwrd"
                          fullWidth
                        />
                      </div>
                    </div>
                  </form>
                  <br />
                  <br />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Button
                      size="large"
                      color="primary"
                      className={clsx(
                        classes.button,
                        validate ? classes.buttonActive : ""
                      )}
                    >
                      Update Password
                    </Button>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default UserAccount;
