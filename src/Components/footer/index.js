import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(24,24,24,.2)",
  },
  footerLinks: {
    paddingTop: '4%',
  },
  title: {
    padding: "8px 0",
    fontSize: 14,
    color: "#777777",
  },
  navItems: {
    listStyle: "none!important",
  },
  navItem: {
    padding: "10px 0",
  },
  link: {
    color: "#141d21",
    fontSize: 12,
    textDecoration: "none",
    fontWeight: 400,
    letterSpacing: "1px",
  },
  footerContent: {
    padding: "5% 0",
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: "#777777",
    marginBottom: "1.5em",
    textAlign: "center",
    letterSpacing: "1px",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.footerLinks}>
          <Grid container justify="center">
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Link href="/about" className={classes.link}>
                About Us
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Link href="/how-it-works/invest" className={classes.link}>
                How it works
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Link href="/get-listed" className={classes.link}>
                Get Listed
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={2}>
              <a href="mailto:contact@place.com" className={classes.link}>
                Contact Us
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Link href="/legal-documents" className={classes.link}>
                Legal Documents
              </Link>
            </Grid>
          </Grid>
        </div>

        <div className={classes.footerContent}>
          <p className={classes.text}>© 2021 DREVS - Digital Revenue Share.</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
