import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import Verified from "./../../Assets/verified.png";
import Diversify from "./../../Assets/diversify-2.png";
import Future from "./../../Assets/future-v2.png";

const useStyles = makeStyles({
  servicesContainer: {
    backgroundColor: "#fff",
  },
  services: {
    textAlign: "center",
    padding: "10% 0",
    borderBottom: "1px solid #E7E7E7",
  },
  heading: {
    margin: "1rem 0",
    fontSize: 18,
    fontWeight: 400,
    color: "rgba(24,24,24,.9)",
    lineHeight: 0.5,
  },
  description: {
    fontSize: 16,
    color: "#838383",
  },
});
function Services() {
  const classes = useStyles();
  return (
    <div className={classes.servicesContainer}>
      <Container>
        <div className={classes.services}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4}>
              <img src={Verified} alt="verified" />
              <h1 className={classes.heading}>Vetted digital contents</h1>
              <p className={classes.description}>
                The Contents listed must all pass our due diligence press.
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={Diversify} alt="verified" />

              <h1 className={classes.heading}>
                Easier Diversification and Participations
              </h1>
              <p className={classes.description}>
                We offer minimum investments as low as possible. Leting you
                easily diversity across multiple contents.
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={Future} alt="verified" />

              <h1 className={classes.heading}>Help Fund The Future</h1>
              <p className={classes.description}>
                Entrepreneurs are the innovators, the dreamers, the ones crazy
                enough to potentially change the world. By backing them, you can
                make a difference too.
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Services;
