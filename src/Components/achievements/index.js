import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles({
  services: {
    textAlign: "center",
    padding: "8% 0",
    backgroundColor: "#141D21",
  },
  heading: {
    margin: "1rem 0",
    fontSize: 58,
    fontWeight: 600,
    color: "#D0D1D2",
  },
  description: {
    fontSize: 16,
    color: "#BBBEBF",
    marginBottom: '1em'
  },
  "@media (max-width: 800px)": {
    heading: {
      margin: "0",
      fontSize: 35,
      fontWeight: 600,
      color: "#D0D1D2",
    },
    description: {
      fontSize: 16,
      color: "#BBBEBF",
    },
  },
});
function Achievements() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          // spacing={5}
        >
          <Grid item xs={12} sm={4}>
            <h1 className={classes.heading}>450,000+</h1>
            <p className={classes.description}>Total Investors</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1 className={classes.heading}>$250 Million+</h1>
            <p className={classes.description}>Total Raised</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1 className={classes.heading}>225+</h1>
            <p className={classes.description}>Successfull Offerings</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Achievements;
