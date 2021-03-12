import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
const useStyles = makeStyles({
  heroSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "transparent",
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
});

function HeroSection() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.heroSection}>
        <h1 className={classes.heading}>
          Invest in highly vetted e-commerce startups
        </h1>
        <h2 className={classes.subHeading}>
          You can now own a piece of your favorite startup with ease.
        </h2>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
        >
          Sign up for free <ArrowRightAlt size={15} />
        </Button>
      </div>
    </Container>
  );
}

export default HeroSection;
