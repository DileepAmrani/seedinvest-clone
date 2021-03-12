import React from "react";
import { Navbar, Services, Footer, Drawer } from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  headerContainer: {
    background: "rgba(0,0,0,.8)",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "18% 5%",
  },
  heading: {
    marginBottom: "1rem",
    fontSize: "3rem",
    fontWeight: 300,
    color: "rgba(255,255,255,.8)",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  subHeading: {
    marginBottom: "1rem",
    fontSize: "1.8rem",
    fontWeight: 300,
    color: "#B2B5B9",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  button: {
    background: "#0057AE",
    borderRadius: 0,
    padding: 12,
    minWidth: 200,
    marginTop: "1.5em",
  },
  story: {
    backgroundColor: "#f2f2f2",
    padding: "3% 0",
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: 300,
    marginBottom: "1em",
  },
  text: {
    fontSize: 16,
    fontWeight: 300,
    marginBottom: "1em",
    lineHeight: "27px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: "1em",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  desc: {
    fontSize: 16,
    fontWeight: 300,
  },
  team: {
    backgroundColor: "#fff",
    padding: "3% 0",
  },
  teamProfile: {
    maxWidth: 290,
    minWidth: 290,
  },
  teamFooterDesc: {
    padding: "1% 0",
  },
  teamFooterLink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  link: {
    fontSize: 16,
    fontWeight: 300,
    textDecoration: "none",
    color: "#777777",
  },
  "@media (max-width: 800px)": {
    heading: {
      marginBottom: "1rem",
      fontSize: "1.5rem",
      fontWeight: 300,
      color: "rgba(255,255,255,.8)",
      lineHeight: 1.2,
      letterSpacing: "-.02em",
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
});

const navData = {
  bgColor: "transparent",
  color: "#fff",
  logo:
    "https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/website/logo_light.svg",
  mobileLogo:
    "https://d2v4u62fw1nf2w.cloudfront.net/app/img/website/icon_light.svg",
};

function About() {
  const classes = useStyles();

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
        <div className={classes.sideBar}>
          <Drawer {...navData} />
        </div>
      </div>
      {/* Header Container */}
      <div className={classes.headerContainer}>
        <Container>
          <div className={classes.heroSection}>
            <h1 className={classes.heading}>
              Placeholder is a leading equity crowdfunding platform, opening up
              access to venture capital and angel investing to everyone.
            </h1>
          </div>
        </Container>
      </div>
      <Services />
      <div className={classes.story}>
        <Container>
          <h2 className={classes.sectionTitle}>Our Story</h2>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={7}>
              <p className={classes.text}>
                Ryan Feit and James Han founded Placeholder in 2012. Shocked by
                how difficult it was for their Wharton classmates to raise
                capital for their startups, Ryan and James joined a movement to
                change 80-year-old securities laws to make it easier for
                entrepreneurs to raise capital online. During the following
                year, they became instrumental in arguably the most significant
                change to U.S. securities laws in our lifetime: the passage of
                the JOBS Act.
              </p>
              <p className={classes.text}>
                Ryan and James professionally invested in and financed companies
                across technology, consumer, and other major market sectors
                while at Wellspring Capital, Francisco Partners, Lehman
                Brothers, and Morgan Stanley. By leveraging their experience as
                investors and entrepreneurs, they aspired to build an online
                platform that made startup investing and fundraising simple and
                accessible to everyone. In April 2014, after building a sizeable
                investor base and helping dozens of companies raise capital
                online, Placeholder raised its Series A round on its own
                platform.
              </p>
              <p className={classes.text}>
                Since then, the Placeholder team has grown to over two dozen
                team members, helped over 225 companies raise capital, and built
                a rapidly growing network of over 450,000 investors. In June
                2015, Placeholder was the first equity crowdfunding platform to
                open up to the other 98% of Americans who were previously
                restricted from investing in startups.
              </p>
            </Grid>
            <Grid item xs={12} lg={5}>
              <div className={classes.row}>
                <p className={classes.title}>Founded:</p>
                <p className={classes.desc}>
                  In 2012 by Ryan Feit and James Han as a simple way to invest
                  in early stage companies online
                </p>
              </div>

              <div className={classes.row}>
                <p className={classes.title}>Headquarters:</p>
                <p className={classes.desc}>New York, New York</p>
              </div>
              <div className={classes.row}>
                <p className={classes.title}>Successfully funded companies:</p>
                <p className={classes.desc}> 225+</p>
              </div>
              <div className={classes.row}>
                <p className={classes.title}>
                  Average Placeholder investment per company:
                </p>
                <p className={classes.desc}> $975,000</p>
              </div>
              <div className={classes.row}>
                <p className={classes.title}>
                  Placeholder Fund co-investment per deal:
                </p>
                <p className={classes.desc}>$200,000</p>
              </div>
              <div className={classes.row}>
                <p className={classes.title}>Largest Round Size: </p>
                <p className={classes.desc}>$20,000,000</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.team}>
        <Container>
          <h2 className={classes.sectionTitle}>Meet the Team</h2>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <img
                src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                alt="team"
                className={classes.teamProfile}
              />
            </Grid>
          </Grid>
          <div className={classes.teamFooterDesc}>
            <p className={classes.text}>
              Check out the background of our broker-dealer, funding-portal, and
              investment professionals on FINRA's broker/check.
            </p>
          </div>
          <div className={classes.teamFooterLink}>
            <Link href="" className={classes.link}>
              Learn more about the team
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default About;
