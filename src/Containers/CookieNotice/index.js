import React from "react";
import { Navbar, Footer, Drawer } from "./../../Components";
import { Container, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  termsAndCondition: {
    padding: "4% 0",
  },
  nav: {
    listStyle: "none",
  },
  navItem: {
    padding: "0.7em",
  },
  link: {
    textDecoration: "none",
    fontSize: 14,
    color: "#888888",
  },
  linkActive: {
    textDecoration: "none",
    fontSize: 14,
    color: "#000",
  },
  heading: {
    fontSize: 42,
    fontWeight: 300,
    letterSpacing: -0.84,
    margin: "0.5em 0",
  },
  text: {
    fontSize: 18,
    fontWeight: 300,
    margin: "1em 0",
  },
  title: {
    fontSize: 25,
    fontWeight: 400,
    color: "#2F2F2F",
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
  bgColor: "#fff",
  color: "#000",
  logo:
    "https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/website/logo_dark.svg",
  mobileLogo:
    "https://d2v4u62fw1nf2w.cloudfront.net/app/img/website/icon_dark.svg",
};

function CookieNotice() {
  const classes = useStyles();
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
      <div className={classes.termsAndCondition}>
        <Container>
          <Grid container>
            <Grid item xs={12} lg={3}>
              <div>
                <ul className={classes.nav}>
                  <li className={classes.navItem}>
                    <Link
                      href="/terms-and-conditions"
                      className={clsx(classes.link)}
                    >
                      General Terms of Use
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="/privacy-policy" className={clsx(classes.link)}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link
                      href="/cookie-notice"
                      className={clsx(classes.linkActive)}
                    >
                      Cookie notice
                    </Link>
                  </li>

                  <li className={classes.navItem}>
                    <Link
                      href="/legal-documents"
                      className={clsx(classes.link)}
                    >
                      Legal Documents
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} lg={9}>
              <div>
                <h3 className={classes.heading}>Cookie Notice</h3>
                <h4 className={classes.title}>What are cookies?</h4>

                <p className={classes.text}>
                  “Cookies” are small text files that a website saves on your
                  computer or mobile device when you visit the site. Cookies
                  enables the website to remember your actions and preferences
                  over a period of time, so you don’t have to keep re-entering
                  them whenever you come back to the site or browse from one
                  page to another.
                </p>
                <h4 className={classes.title}>How do we use cookies?</h4>

                <p className={classes.text}>
                  We use cookies to facilitate your interaction with our
                  website, enhance your user experience, and analyze and improve
                  our services.
                </p>
                <p className={classes.text}>
                  Our cookies can be categorized as:
                </p>
                <p className={classes.text}>
                  Strictly necessary cookies. Some cookies will be strictly
                  necessary for the functioning of our website. This includes
                  cookies that record whether or not you’ve consented to the use
                  of cookies. Strictly necessary cookies shall not be subject to
                  your consent, and unless you restrict the use of cookies by
                  adjusting your web browser preferences, the use of our website
                  will include the use of strictly necessary cookies. You may
                  restrict the use of strictly necessary cookies by adjusting
                  your web browser preferences, but this may affect the
                  functionality of our website.
                </p>

                <p className={classes.text}>
                  Strictly necessary cookies. Some cookies will be strictly
                  necessary for the functioning of our website.
                </p>

                <p className={classes.text}>
                  Cookies that record whether or not you’ve consented to the use
                  of cookies. Strictly necessary cookies shall not be subject to
                  your consent, and unless you restrict the use of cookies by
                  adjusting your web browser preferences, the use of our website
                  will include the use of strictly necessary cookies. You may
                  restrict the use of strictly necessary cookies by adjusting
                  your web browser preferences, but this may affect the
                  functionality of our website.
                </p>
                <h4 className={classes.title}>How to control cookies?</h4>
                <p className={classes.text}>
                  You may restrict the placement of Placeholder's cookies by
                  adjusting your web browser preferences or a “Do Not Track”
                  setting in your web browser. If you do so, you may still use
                  our website, but this may interfere with some of its
                  functionality.
                </p>
                <p className={classes.text}>
                  You may also clear cookies from your computer via your web
                  browser settings. You may also wish to use a Google Analytics
                  opt-out web browser add-on. Information on this option is
                  available at:
                  http://support.google.com/analytics/bin/answer.py?hl=en&answer=2700409
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default CookieNotice;
