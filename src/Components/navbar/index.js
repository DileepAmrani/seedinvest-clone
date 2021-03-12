import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Avatar, Badge, Popover } from "@material-ui/core";
import { NotificationsNoneOutlined } from "@material-ui/icons";
import clsx from "clsx";

function Navbar(props) {
  const useStyles = makeStyles((theme) => ({
    navbar: {
      background: props.bgColor,
      color: "white",
      padding: "0px 20px",
      display: "flex",
      height: 64,
      alignItems: "center",
      borderBottom: "0.1px solid rgba(255,255,255,.2)",
      boxShadow: "-1px 1px 2px rgba(20, 29, 33, 0.2)",
    },

    navItems: {
      listStyle: "none",
      display: "flex",
    },
    navItem: {
      padding: "28px 14px",
    },
    link: {
      color: props.color,
      fontSize: 14,
      textDecoration: "none",
    },
    linkBlack: {
      fontSize: 14,
      textDecoration: "none",
      color: "#000000",
    },
    logo: {
      fontFamily: "monospace",
    },
    iconNotif: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      background: "#fff",
      border: "1px solid #F2F6FF",
      color: "#777777",
    },
    iconPro: {
      marginLeft: 10,
      width: theme.spacing(6),
      height: theme.spacing(6),
      background: "#000",
    },
    popover: {
      width: "400px",
    },
    popHeader: {
      padding: "4%",
      borderBottom: "1px solid #F2F6FF",
    },
    popNotification: {
      padding: "4%",
      backgroundColor: "#E5EEF7",
    },
    title: {
      fontSize: 18,
      fontWeight: 500,
    },
    listItem: {
      padding: "2% 4%",
    },
    "@media (max-width: 440px)": {
      dekstopView: {
        display: "none",
      },
    },
  }));

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    let data = localStorage.getItem("user");
    setIsLogin(data);
  }, []);

  const [anchorElNotification, setAnchorElNotification] = React.useState(null);

  const handleClickNotification = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };

  const openNotification = Boolean(anchorElNotification);
  const idNotification = openNotification ? "simple-popover" : undefined;

  const [anchorElProfile, setAnchorElProfile] = React.useState(null);

  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const openProfile = Boolean(anchorElProfile);
  const idProfile = openProfile ? "simple-popover" : undefined;

  
  const LogOut = () => {
    localStorage.removeItem("user");
  };
  
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div>
        <Link href="/" className={classes.link}>
          {windowDimensions.width >= 600 ? (
            <h2 className={classes.logo}>Placeholder</h2>
          ) : (
            <h2 className={classes.logo}>PH</h2>
          )}
        </Link>
      </div>
      <div style={{ flex: 1 }}>
        <ul className={classes.navItems}>
          <li className={classes.navItem}>
            <Link href="/offerings" className={classes.link}>
              Browse Catalogue
            </Link>
          </li>
          <li className={clsx(classes.navItem, classes.dekstopView)}>
            <Link href="/get-listed" className={classes.link}>
              Get listed
            </Link>
          </li>
        </ul>
      </div>

      {isLogin ? (
        <div>
          <ul className={classes.navItems}>
            <li className={classes.navIte} onClick={handleClickNotification}>
              <Badge color="secondary" badgeContent={1} overlap="circle">
                <Avatar className={classes.iconNotif}>
                  <NotificationsNoneOutlined />
                </Avatar>
              </Badge>
            </li>
            <Popover
              id={idNotification}
              open={openNotification}
              anchorEl={anchorElNotification}
              onClose={handleCloseNotification}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{ marginTop: "20px" }}
            >
              <div className={classes.popover}>
                <div className={classes.popHeader}>
                  <p className={classes.title}>Notification</p>
                </div>
                <div className={classes.popNotification}>
                  We need to verify you identify for compliance and
                  regularation. Click here to update your information.
                </div>
              </div>
            </Popover>
            <li className={classes.navIte} onClick={handleClickProfile}>
              <Avatar className={classes.iconPro}>AD</Avatar>
            </li>
            <Popover
              id={idProfile}
              open={openProfile}
              anchorEl={anchorElProfile}
              onClose={handleCloseProfile}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{ marginTop: "20px" }}
            >
              <div className={classes.popover} style={{ padding: "5%" }}>
                <ul style={{ listStyle: "none" }}>
                  <li className={classes.listItem}>
                    <Link href="/participations" className={classes.linkBlack}>
                      My Participations
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link
                      href="/settings/user-account"
                      className={classes.linkBlack}
                    >
                      User Settings
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link href="" className={classes.linkBlack}>
                      Help
                    </Link>
                  </li>
                  <li className={classes.listItem} onClick={() => LogOut()}>
                    <Link href="" className={classes.linkBlack}>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </Popover>
          </ul>
        </div>
      ) : (
        <div>
          <ul className={classes.navItems}>
            <li className={classes.navItem}>
              <Link href="/login" className={classes.link}>
                Login
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link href="/signup" className={classes.link}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
