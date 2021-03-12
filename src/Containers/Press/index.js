import React from "react";
import { Navbar, Drawer, Footer } from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button, Link } from "@material-ui/core";
const useStyles = makeStyles({
  headerContainer: {
    background: "#fff",
  },
  heroSection: {
    padding: "14% 0",
  },
  heading: {
    marginBottom: "1rem",
    fontSize: 48,
    fontWeight: 400,
    color: "#000",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  nav: {
    borderTop: "1px solid #E7E7E7",
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
    borderTop: "2px solid #0057AE",
    padding: 10,
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
    padding: "7% 0",
    borderBottom: "1px solid #E7E7E7",
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "19px",
    letterSpacing: "3.2px",
    paddingBottom: "1em",
    borderBottom: "1px solid #DBDBDB",
  },
  text: {
    fontSize: 16,
    fontWeight: 300,
    marginBottom: "1em",
    lineHeight: "27px",
    paddingTop: "1em",
  },
  card: {},
  cardIcon: {
    width: 40,
    height: 40,
    border: "1px solid #DBDBDB",
    borderRadius: 50,
  },
  linkBox: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginBottom: "1em",
  },
  newsYearlyContainer:{
    backgroundColor: "#fff",
    padding: "2% 0",
    borderBottom: "1px solid #E7E7E7",
  },
  newsYearly:{
    borderBottom: "1px solid #DBDBDB",
    padding: '5% 0'
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  linkDesc: {
    fontSize: 14,
    color: "#000",
  },
  pressKit: {
    padding: "4% 0",
    borderBottom: "1px solid #E7E7E7",
    backgroundColor: "#F2F2F2",
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: 300,
    marginBottom: "1em",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    margin: "1em 0",
  },
  property: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "20px",
  },
  desc: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "20px",
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
  bgColor: "#fff",
  color: "#000",
  logo:
    "https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/website/logo_dark.svg",
  mobileLogo:
    "https://d2v4u62fw1nf2w.cloudfront.net/app/img/website/icon_dark.svg",
};

function Press() {
  const classes = useStyles();
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
            <h1 className={classes.heading}>Placeholder in the Press</h1>
          </div>
        </Container>
        <div className={classes.nav}>
          <Container>
            <div className={classes.navItems}>
              <div className={classes.navItem}>
                <Link href="/about" className={classes.navLink}>
                  About
                </Link>
              </div>
              <div className={classes.navItem}>
                <Link href="/team" className={classes.navLink}>
                  Team
                </Link>
              </div>
              <div className={classes.navItemActive}>
                <Link href="/press" className={classes.navLink}>
                  Press
                </Link>
              </div>
              <div className={classes.navItem}>
                <Link href="" className={classes.navLink}>
                  FAQs
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* <Services /> */}
      <div className={classes.boxesContainer}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className={classes.card}>
                <div className={classes.linkBox}>
                  <div>
                    <img
                      src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/logos/new_york_times_dark-si-grey_100x100.png"
                      alt="_"
                      width="40"
                      height="40"
                      className={classes.cardIcon}
                    />
                  </div>
                  <div>
                    <p className={classes.title}>
                      Doubts Arise as Investors Flock to Crowdfunded Start-Ups
                    </p>
                    <p className={classes.linkDesc}>
                      <Link href="">The New York Times </Link>— Jan 24, 2017
                    </p>
                  </div>
                </div>
                <p className={classes.linkDesc}>
                  With the Jobs Act, companies could raise money on sites like
                  Mr. Feit’s and offer investors an actual ownership stake, with
                  the promise of financial returns... Read More
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.card}>
                <div className={classes.linkBox}>
                  <div>
                    <img
                      src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/logos/new_york_times_dark-si-grey_100x100.png"
                      alt="_"
                      width="40"
                      height="40"
                      className={classes.cardIcon}
                    />
                  </div>
                  <div>
                    <p className={classes.title}>
                      Doubts Arise as Investors Flock to Crowdfunded Start-Ups
                    </p>
                    <p className={classes.linkDesc}>
                      <Link href="">The New York Times </Link>— Jan 24, 2017
                    </p>
                  </div>
                </div>
                <p className={classes.linkDesc}>
                  With the Jobs Act, companies could raise money on sites like
                  Mr. Feit’s and offer investors an actual ownership stake, with
                  the promise of financial returns... Read More
                </p>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className={classes.card}>
                <div className={classes.linkBox}>
                  <div>
                    <img
                      src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/logos/new_york_times_dark-si-grey_100x100.png"
                      alt="_"
                      width="40"
                      height="40"
                      className={classes.cardIcon}
                    />
                  </div>
                  <div>
                    <p className={classes.title}>
                      Doubts Arise as Investors Flock to Crowdfunded Start-Ups
                    </p>
                    <p className={classes.linkDesc}>
                      <Link href="">The New York Times </Link>— Jan 24, 2017
                    </p>
                  </div>
                </div>
                <p className={classes.linkDesc}>
                  With the Jobs Act, companies could raise money on sites like
                  Mr. Feit’s and offer investors an actual ownership stake, with
                  the promise of financial returns... Read More
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.card}>
                <div className={classes.linkBox}>
                  <div>
                    <img
                      src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/logos/new_york_times_dark-si-grey_100x100.png"
                      alt="_"
                      width="40"
                      height="40"
                      className={classes.cardIcon}
                    />
                  </div>
                  <div>
                    <p className={classes.title}>
                      Doubts Arise as Investors Flock to Crowdfunded Start-Ups
                    </p>
                    <p className={classes.linkDesc}>
                      <Link href="">The New York Times </Link>— Jan 24, 2017
                    </p>
                  </div>
                </div>
                <p className={classes.linkDesc}>
                  With the Jobs Act, companies could raise money on sites like
                  Mr. Feit’s and offer investors an actual ownership stake, with
                  the promise of financial returns... Read More
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.newsYearlyContainer}>
        <Container>
          <div className={classes.newsYearly}>

          <Grid container spacing={2}>
            <Grid item lg={3} xs={12}>
              <h2>2020</h2>
            </Grid>
            <Grid item lg={9} xs={12}>
              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    The Five Biggest Crowdfunding Stories of 2020
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">Crowdfund Insider </Link>— Dec. 30, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>How To Invest In Startups</p>
                  <p className={classes.linkDesc}>
                    <Link href="">Forbes </Link>— Dec. 23, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Peter Vogel: The Evolution of Leafwire
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                  How Sam Adams inspired us to raise $350K in 3 days
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes 
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Report Touts Landmark Regulatory Changes Impacting Private Markets While Providing Insight into 
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


            </Grid>
          </Grid>
          </div>


          <div className={classes.newsYearly}>

          <Grid container spacing={2}>
            <Grid item lg={3} xs={12}>
              <h2>2019</h2>
            </Grid>
            <Grid item lg={9} xs={12}>
              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    The Five Biggest Crowdfunding Stories of 2020
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">Crowdfund Insider </Link>— Dec. 30, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>How To Invest In Startups</p>
                  <p className={classes.linkDesc}>
                    <Link href="">Forbes </Link>— Dec. 23, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Peter Vogel: The Evolution of Leafwire
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                  How Sam Adams inspired us to raise $350K in 3 days
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes 
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Report Touts Landmark Regulatory Changes Impacting Private Markets While Providing Insight into 
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


            </Grid>
          </Grid>
          </div>


          <div className={classes.newsYearly}>

          <Grid container spacing={2}>
            <Grid item lg={3} xs={12}>
              <h2>2018</h2>
            </Grid>
            <Grid item lg={9} xs={12}>
              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    The Five Biggest Crowdfunding Stories of 2020
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">Crowdfund Insider </Link>— Dec. 30, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>How To Invest In Startups</p>
                  <p className={classes.linkDesc}>
                    <Link href="">Forbes </Link>— Dec. 23, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Peter Vogel: The Evolution of Leafwire
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                  How Sam Adams inspired us to raise $350K in 3 days
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes 
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Report Touts Landmark Regulatory Changes Impacting Private Markets While Providing Insight into 
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


            </Grid>
          </Grid>
          </div>


          <div className={classes.newsYearly}>

          <Grid container spacing={2}>
            <Grid item lg={3} xs={12}>
              <h2>2017</h2>
            </Grid>
            <Grid item lg={9} xs={12}>
              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    The Five Biggest Crowdfunding Stories of 2020
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">Crowdfund Insider </Link>— Dec. 30, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>How To Invest In Startups</p>
                  <p className={classes.linkDesc}>
                    <Link href="">Forbes </Link>— Dec. 23, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Peter Vogel: The Evolution of Leafwire
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>

              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                  How Sam Adams inspired us to raise $350K in 3 days
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes 
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


              <div className={classes.linkBox}>
                <div>
                  <p className={classes.title}>
                    Report Touts Landmark Regulatory Changes Impacting Private Markets While Providing Insight into 
                  </p>
                  <p className={classes.linkDesc}>
                    <Link href="">
                      Leafwire Closes Seed Round of $1 Million and Launches New
                      Marketplace Feature
                    </Link>
                    — Dec. 16, 2020
                  </p>
                </div>
              </div>


            </Grid>
          </Grid>
          </div>
          <br />
          <Button variant="outlined">Olders press</Button>

        </Container>
      </div>

      <div className={classes.pressKit}>
        <Container>
          <div>
            <h1 className={classes.sectionTitle}>Press Kit</h1>
          </div>
          <Grid container spacing={10}>
            <Grid item md={12} lg={6}>
              <h1 className={classes.boxTitle}>COMPANY SNAPSHOT</h1>
              <div className={classes.row}>
                <p className={classes.property}>Founded:</p>
                <p className={classes.desc}>
                  In 2012 by Ryan Feit and James Han as a simple way to invest
                  in early stage companies online
                </p>
              </div>
              <div className={classes.row}>
                <p className={classes.property}>Headquarters:</p>
                <p className={classes.desc}>New York, New York</p>
              </div>

              <div className={classes.row}>
                <p className={classes.property}>Total users:</p>
                <p className={classes.desc}> 500,198</p>
              </div>
              <div className={classes.row}>
                <p className={classes.property}>
                  Successfully funded companies:
                </p>
                <p className={classes.desc}> 220+</p>
              </div>
              <div className={classes.row}>
                <p className={classes.property}>
                  Average investment per company:
                </p>
                <p className={classes.desc}> $500,000</p>
              </div>
              <div className={classes.row}>
                <p className={classes.property}>
                  Placeholder Fund co-investment per deal:
                </p>
                <p className={classes.desc}>$200,000</p>
              </div>
              <div className={classes.row}>
                <p className={classes.property}>
                  Largest individual investment:{" "}
                </p>
                <p className={classes.desc}>$2,000,000</p>
              </div>
              <div className={classes.row}>
                <p className={classes.desc}>
                  For media enquiries <Link href="">click here.</Link>{" "}
                </p>
              </div>
            </Grid>

            <Grid item md={12} lg={6} justifyContent={true}>
              <Grid container spacing={3}>
                <Grid item lg={4} md={6}>
                  <img
                    src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/images/press/logo-light.png"
                    alt=""
                    style={{ maxWidth: "180px" }}
                  />
                </Grid>
                <Grid item lg={4} md={6}>
                  <img
                    src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/images/press/logo-dark.png"
                    alt=""
                    style={{ maxWidth: "180px" }}
                  />
                </Grid>
                <Grid item lg={4} md={6}>
                  <img
                    src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/images/press/icon-light.png"
                    alt=""
                    style={{ maxWidth: "180px" }}
                  />
                </Grid>
                <Grid item lg={4} md={6}>
                  <img
                    src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/images/press/icon-dark.png"
                    alt=""
                    style={{ maxWidth: "180px" }}
                  />
                </Grid>
                <Grid item lg={4} md={6}>
                  <img
                    src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/images/press/ryan_feit.png"
                    alt=""
                    style={{ maxWidth: "180px" }}
                  />
                </Grid>
                <Grid item lg={4} md={6}>
                  <img
                    src="https://d2v4u62fw1nf2w.cloudfront.net/app/img/images/press/james_han.png"
                    alt=""
                    style={{ maxWidth: "180px" }}
                  />
                </Grid>
              </Grid>
              <br />
              <Button variant="outlined">Download All</Button>
            </Grid>
          </Grid>


        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Press;
