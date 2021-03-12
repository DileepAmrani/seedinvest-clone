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

function Login() {
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
                      className={clsx(classes.linkActive)}
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
                <h3 className={classes.heading}>Terms of Use</h3>
                <p className={classes.text}>
                  Placeholder, LLC d/b/a Placeholder.com together with its
                  affiliates, including Placeholder Technology, LLC and SI
                  Securities, LLC ("Placeholder," "us," "our" or "we") provides
                  this web site to you under the following terms and conditions
                  (this "Agreement" or "Terms of Use"). Our Privacy Policy (as
                  in posted to our website), which explains how we collect and
                  use information from visitors to our web site ("Visitors"), is
                  incorporated by reference in these Terms of Use. By using our
                  web site (the "Site") or submitting any information to us, you
                  consent to and agree to be bound by these Terms of Use and our
                  Privacy Policy. By using the Site in any manner, including but
                  not limited to visiting or browsing the Site, you agree to be
                  bound by this Agreement, the Privacy Policy, and all other
                  operating rules, policies and procedures that may be published
                  by us from time to time on the Site, each of which is
                  incorporated by reference and each of which may be updated by
                  us from time to time without notice to you. Your use of the
                  Site is governed by the version of this Agreement in effect on
                  the date of use.
                </p>
                <p className={classes.text}>
                  Our website can be accessed from the domain name:
                  www.placeholder.com
                </p>
                <h4 className={classes.title}>Account Registration</h4>
                <p className={classes.text}>
                You agree that your Account will be self-directed and that you are solely responsible for all purchases, orders, investment decisions and instructions placed in your Account. Although the Site may provide data, information or content provided by other parties relating to investment strategies and/or opportunities to buy and/or sell securities, you should not construe any such content as tax, legal, financial, or investment advice. Unless we provide you with specific advice that is clearly identified as an individualized recommendation specifically addressed to you, (which is not expected to take place), you represent that any decision to invest is based solely on your consideration of the risks involving a particular security or those of a third-party (i.e. your personal financial advisor) is made at your own risk. All investments involve a degree of risk, and you acknowledge and agree that you are solely responsible for determining the suitability of an investment or strategy and accept the risks associated with such decisions that may include the risk of complete loss of your principal. You agree and acknowledge that you are solely responsible for conducting legal, accounting, financial, and any other due diligence review on the companies listed on the Site. You are advised to consult with a licensed legal professional and investment advisor for any legal, tax, financial, or investment advice. The Site will merely provide you with the ability for you to make your own investment decision without any advice by the Site.
                </p>
                <p className={classes.text}>
                  You have the absolute right to object to the processing of
                  your personal data for direct marketing purposes. For
                  instructions on how to object, please see below under “Opt-out
                  Policy”.
                </p>
                <h4 className={classes.title}>Collection of Information</h4>
                <p className={classes.text}>
                  Non-Personally Identifiable Information
                </p>
                <p className={classes.text}>
                  Placeholder collects Non-Personally Identifiable Information
                  from you regarding your usage of our products and services.
                  Non-Personally Identifiable Information refers to data that
                  does not, by itself, identify individual persons and may
                  include, without limitation, website pages viewed, articles,
                  presentation and videos viewed, time spent using certain
                  features of the website, demographic data such as server
                  locations, cookies existing on your devices used to access
                  Placeholder, search criteria used and results, date, time,
                  connection speed, internet protocol ("IP") address, which may
                  also be contained on server logs, and/or other information
                  which does not specifically identify you. We collect this
                  information using various technologies, including, but not
                  limited to, cookies and server logs. "Cookies" are pieces of
                  information that may be placed on your device by a website for
                  the purpose of facilitating and enhancing your communication
                  and interaction with that website. "Server logs" can be either
                  a single log file or several log files automatically created
                  and maintained by a server of activity performed by the
                  server, which can include information about any transaction
                  you conduct with the server.
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

export default Login;
