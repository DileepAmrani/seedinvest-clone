import React from "react";
import { Navbar,Drawer, Footer } from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Link } from "@material-ui/core";
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
    fontWeight: 300,
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
    backgroundColor: "#f2f2f2",
    padding: "7% 0",
    borderBottom: "1px solid #E7E7E7",
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: 300,
    marginBottom: "1em",
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
  card: {
    marginBottom: "1em",
  },
  teamProfile: {
    maxWidth: 290,
    minWidth: 290,
  },
  cardContentBox: {
    padding: "1%",
  },
  name: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: "0.5em",
  },
  position: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: "10px",
  },
  cardDesc: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: "21px",
    marginTop: "2em",
  },
  teamFooterDesc: {
    padding: "1% 0",
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

function MeetTheTeam() {
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
            <h1 className={classes.heading}>Meet The Team</h1>
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
              <div className={classes.navItemActive}>
                <Link href="" className={classes.navLink}>
                  Team
                </Link>
              </div>
              <div className={classes.navItem}>
                <Link href="/press" className={classes.navLink}>
                  Press
                </Link>
              </div>
              <div className={classes.navItem}>
                <Link href="" className={classes.navLink}>
                  Jobs
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
            <Grid item xs={4}>
              <h1 className={classes.boxTitle}>EXPERIENCED</h1>
              <p className={classes.text}>
                Placeholder was built by a team of experienced investment
                professionals. Our team has worked at places such as Wellspring
                Capital, Goldman Sachs, and Morgan Stanley. We have also helped
                manage billions in private investment funds.
              </p>
            </Grid>

            <Grid item xs={4}>
              <h1 className={classes.boxTitle}>PROACTIVE</h1>

              <p className={classes.text}>
                We believe that relationships still matter. We have created a
                hands-on model where person-to-person interaction is supported
                and central to what we do. Our team works closely with our users
                to ensure a personalized experience.
              </p>
            </Grid>
            <Grid item xs={4}>
              <h1 className={classes.boxTitle}>DECISIVE</h1>
              <p className={classes.text}>
                We move fast because markets move fast, good deals move fast,
                and if you're building a high-growth startup, you shouldn't
                spend more time than necessary on fundraising.
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.team}>
        <Container>
          <h2 className={classes.sectionTitle}>Team Members</h2>

          <div>
            <div className={classes.card}>
              <Grid container>
                <Grid item xs={3}>
                  <img
                    src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                    alt="team"
                    className={classes.teamProfile}
                  />
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.cardContentBox}>
                    <p className={classes.name}>James Han</p>
                    <p className={classes.position}>
                      CO-FOUNDER, PRESIDENT, AND COO
                    </p>
                    <p className={classes.cardDesc}>
                      James loves looking for and helping build what's next in
                      technology. Prior to co-founding Placeholder, James was a
                      professional investor at Francisco Partners, where he
                      focused on equity investment opportunities in deep
                      technology. James also spent a number of years at Morgan
                      Stanley in their technology investment banking group, Riot
                      Games and Cisco in various roles. James brings to
                      Placeholder his love for technology and innovation as well
                      as an unhealthy infatuation with the Los Angeles Lakers.
                      James received an MBA in Marketing and Entrepreneurial
                      Management from The Wharton School of the University of
                      Pennsylvania and holds a BS in Economics from the Wharton
                      Undergraduate Program as well as a BAS in Computer Science
                      from the University of Pennsylvania.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>

            <div className={classes.card}>
              <Grid container>
                <Grid item xs={3}>
                  <img
                    src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                    alt="team"
                    className={classes.teamProfile}
                  />
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.cardContentBox}>
                    <p className={classes.name}>James Han</p>
                    <p className={classes.position}>
                      CO-FOUNDER, PRESIDENT, AND COO
                    </p>
                    <p className={classes.cardDesc}>
                      James loves looking for and helping build what's next in
                      technology. Prior to co-founding Placeholder, James was a
                      professional investor at Francisco Partners, where he
                      focused on equity investment opportunities in deep
                      technology. James also spent a number of years at Morgan
                      Stanley in their technology investment banking group, Riot
                      Games and Cisco in various roles. James brings to
                      Placeholder his love for technology and innovation as well
                      as an unhealthy infatuation with the Los Angeles Lakers.
                      James received an MBA in Marketing and Entrepreneurial
                      Management from The Wharton School of the University of
                      Pennsylvania and holds a BS in Economics from the Wharton
                      Undergraduate Program as well as a BAS in Computer Science
                      from the University of Pennsylvania.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>

            <div className={classes.card}>
              <Grid container>
                <Grid item xs={3}>
                  <img
                    src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                    alt="team"
                    className={classes.teamProfile}
                  />
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.cardContentBox}>
                    <p className={classes.name}>James Han</p>
                    <p className={classes.position}>
                      CO-FOUNDER, PRESIDENT, AND COO
                    </p>
                    <p className={classes.cardDesc}>
                      James loves looking for and helping build what's next in
                      technology. Prior to co-founding Placeholder, James was a
                      professional investor at Francisco Partners, where he
                      focused on equity investment opportunities in deep
                      technology. James also spent a number of years at Morgan
                      Stanley in their technology investment banking group, Riot
                      Games and Cisco in various roles. James brings to
                      Placeholder his love for technology and innovation as well
                      as an unhealthy infatuation with the Los Angeles Lakers.
                      James received an MBA in Marketing and Entrepreneurial
                      Management from The Wharton School of the University of
                      Pennsylvania and holds a BS in Economics from the Wharton
                      Undergraduate Program as well as a BAS in Computer Science
                      from the University of Pennsylvania.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className={classes.card}>
              <Grid container>
                <Grid item xs={3}>
                  <img
                    src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                    alt="team"
                    className={classes.teamProfile}
                  />
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.cardContentBox}>
                    <p className={classes.name}>James Han</p>
                    <p className={classes.position}>
                      CO-FOUNDER, PRESIDENT, AND COO
                    </p>
                    <p className={classes.cardDesc}>
                      James loves looking for and helping build what's next in
                      technology. Prior to co-founding Placeholder, James was a
                      professional investor at Francisco Partners, where he
                      focused on equity investment opportunities in deep
                      technology. James also spent a number of years at Morgan
                      Stanley in their technology investment banking group, Riot
                      Games and Cisco in various roles. James brings to
                      Placeholder his love for technology and innovation as well
                      as an unhealthy infatuation with the Los Angeles Lakers.
                      James received an MBA in Marketing and Entrepreneurial
                      Management from The Wharton School of the University of
                      Pennsylvania and holds a BS in Economics from the Wharton
                      Undergraduate Program as well as a BAS in Computer Science
                      from the University of Pennsylvania.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className={classes.card}>
              <Grid container>
                <Grid item xs={3}>
                  <img
                    src="https://d15lpsnkiz3586.cloudfront.net/team/james_han.png"
                    alt="team"
                    className={classes.teamProfile}
                  />
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.cardContentBox}>
                    <p className={classes.name}>James Han</p>
                    <p className={classes.position}>
                      CO-FOUNDER, PRESIDENT, AND COO
                    </p>
                    <p className={classes.cardDesc}>
                      James loves looking for and helping build what's next in
                      technology. Prior to co-founding Placeholder, James was a
                      professional investor at Francisco Partners, where he
                      focused on equity investment opportunities in deep
                      technology. James also spent a number of years at Morgan
                      Stanley in their technology investment banking group, Riot
                      Games and Cisco in various roles. James brings to
                      Placeholder his love for technology and innovation as well
                      as an unhealthy infatuation with the Los Angeles Lakers.
                      James received an MBA in Marketing and Entrepreneurial
                      Management from The Wharton School of the University of
                      Pennsylvania and holds a BS in Economics from the Wharton
                      Undergraduate Program as well as a BAS in Computer Science
                      from the University of Pennsylvania.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className={classes.teamFooterDesc}>
            <p className={classes.text}>
              Check out the background of our broker-dealer, funding-portal, and
              investment professionals on FINRA's broker/check.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.boxesContainer}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <h1 className={classes.boxTitle}>WE ARE DOERS</h1>
              <p className={classes.text}>
                Placeholder was built by a team of experienced investment
                professionals. Our team has worked at places such as Wellspring
                Capital, Goldman Sachs, and Morgan Stanley. We have also helped
                manage billions in private investment funds.
              </p>
            </Grid>

            <Grid item xs={4}>
              <h1 className={classes.boxTitle}>WE ARE PASSIONATE</h1>
              <p className={classes.text}>
                We believe that relationships still matter. We have created a
                hands-on model where person-to-person interaction is supported
                and central to what we do. Our team works closely with our users
                to ensure a personalized experience.
              </p>
            </Grid>
            <Grid item xs={4}>
              <h1 className={classes.boxTitle}>WE ARE RESILIENT</h1>
              <p className={classes.text}>
                We move fast because markets move fast, good deals move fast,
                and if you're building a high-growth startup, you shouldn't
                spend more time than necessary on fundraising.
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default MeetTheTeam;
