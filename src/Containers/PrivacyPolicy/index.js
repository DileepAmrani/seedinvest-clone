import React from "react";
import { Navbar, Drawer, Footer } from "./../../Components";
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
    color: '#2F2F2F'
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

function PrivicyPolicy() {
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
                    <Link href="/privacy-policy" className={clsx(classes.linkActive)}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className={classes.navItem}>
                    <Link href="/cookie-notice" className={clsx(classes.link)}>
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
                <h3 className={classes.heading}>Privacy Policy</h3>
                <p className={classes.text}>
                  This Privacy Policy explPlaceholder Technology, LLC
                  and SI Securities, LLC (collectively, “Placeholder”, “us” or
                  “we”) collect and protect your personal information. If you
                  have any questions that this policy does not address, please
                  contact us at privacy@Placeholder.com or 61 Broadway, Suite
                  1705, New York, NY 10006.
                </p>
                <p className={classes.text}>
                  As explained below, we collect information from you in various
                  ways when you interact with our products and services. By
                  completing your account set-up on our website, you have
                  consented to our collection and use of information as
                  explained in this Notice and agree to be bound by our Terms of
                  Use. Please note that if you choose to invest in any offering
                  advertised on our website, you may be required to agree to a
                  separate agreement, including, but not limited to, new or
                  additional privacy notices or terms of use.
                </p>
                <h4 className={classes.title}>Lawful Basis</h4>
                <p className={classes.text}>
                Our lawful basis for processing personal data from you is that it is necessary for our legitimate interests. These legitimate interests are running and growing our business, performing and developing our product/services for you, complying with applicable laws and regulations, preventing fraud, marketing, and IT security.
                </p>
                <p className={classes.text}>You have the absolute right to object to the processing of your personal data for direct marketing purposes. For instructions on how to object, please see below under “Opt-out Policy”.</p>
                <h4 className={classes.title}>Collection of Information</h4>
                <p className={classes.text}>Non-Personally Identifiable Information</p>
                <p className={classes.text}>Placeholder collects Non-Personally Identifiable Information from you regarding your usage of our products and services. Non-Personally Identifiable Information refers to data that does not, by itself, identify individual persons and may include, without limitation, website pages viewed, articles, presentation and videos viewed, time spent using certain features of the website, demographic data such as server locations, cookies existing on your devices used to access Placeholder, search criteria used and results, date, time, connection speed, internet protocol ("IP") address, which may also be contained on server logs, and/or other information which does not specifically identify you. We collect this information using various technologies, including, but not limited to, cookies and server logs. "Cookies" are pieces of information that may be placed on your device by a website for the purpose of facilitating and enhancing your communication and interaction with that website. "Server logs" can be either a single log file or several log files automatically created and maintained by a server of activity performed by the server, which can include information about any transaction you conduct with the server.</p>


              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default PrivicyPolicy;
