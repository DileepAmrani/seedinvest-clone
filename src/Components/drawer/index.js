import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Link, Badge, Avatar, Popover } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import { NotificationsNoneOutlined, Close } from "@material-ui/icons";

export default function TemporaryDrawer(props) {
  const useStyles = makeStyles((theme) => ({
    sideBar: {
      background: props.bgColor,
      color: "white",
      display: "flex",
      height: 50,
      padding: "0 4%",
      alignItems: "center",
      borderBottom: "0.1px solid rgba(255,255,255,.2)",
      boxShadow: "-1px 1px 2px rgba(20, 29, 33, 0.2)",
    },
    list: {
      width: 250,
      background: '#cccccc',
      height: "100vh",
      padding: "2% 0",
    },
    fullList: {
      width: "auto",
    },
    logo: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      color: props.color
    },
    closeBtn: {
      padding: "10px 14px",
    },
    navItems: {
      listStyle: "none",
    },
    navItem: {
      padding: "10px 14px",
    },
    link: {
      color: props.color,
      fontSize: 14,
      textDecoration: "none",
      height: "100%",
    },
    siteTitle: {
      fontWeight: "bold",
      color: "black",
      flex: 1,
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
      minWidth: "280px",
      width: "100%",
      maxWidth: 400,
    },
    popHeader: {
      padding: "4%",
      borderBottom: "1px solid #F2F6FF",
    },
    popNotification: {
      padding: "4%",
      backgroundColor: "#E5EEF7",
      fontSize: 14,
    },
    iconBox: {
      padding: 5,
    },
    menuIcon: {
      color: props.color,
    },
  }));
  const classes = useStyles();

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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <div>
        <div className={classes.closeBtn}>
          <Close />
        </div>
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
            <li className={classes.navItem} onClick={handleClickNotification}>
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
            <li className={classes.iconBox} onClick={handleClickProfile}>
              <Badge color="secondary" overlap="circle">
                <Avatar className={classes.iconPro}>AD</Avatar>
              </Badge>
              {/* <Avatar className={classes.iconPro}>AD</Avatar> */}
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

  return (
    // <AppBar style={{ backgroundColor: "transparent",  width: '100wh' }}>
      <div className={classes.sideBar}>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <h2 className={classes.logo}>PH</h2>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon className={classes.menuIcon} />
              </Button>
            </div>
          </React.Fragment>
        ))}
      </div>
    // </AppBar>
  );
}
