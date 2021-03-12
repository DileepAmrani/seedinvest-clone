import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Button, Avatar } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";

const useStyles = makeStyles({
  reviews: {
    backgroundColor: '#fff',
    padding: "5% 0",
  },
  heading: {
    margin: "1rem 0",
    fontSize: 22,
    fontWeight: 400,
    color: "#2F2F2F",
    lineHeight: "37px",
  },
  description: {
    fontSize: 16,
    color: "rgba(162, 162, 162,1)",
    marginTop: "1em",
    marginBottom: "2em",
    lineHeight: "28px",
  },
  button: {
    background: "#fff",
    borderRadius: 0,
    padding: 8,
    minWidth: 220,
    marginTop: "1.5em",
    border: "2px solid #181818",
    fontSize: 13,
    fontWeight: 500,
    marginBottom: '2em'
  },
  reviewContainer:{
    margin: '1em 0',
    marginBottom: '3em'
  },
  reviewHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 500,
    color: "#a2a2a2",
  },
  position: {
    fontSize: 14,
    fontWeight: 500,
    color: "#a2a2a2",
  },
  review: {
    fontSize: 16,
    fontWeight: 400,
    color: "#a2a2a2",
    fontStyle: "italic",
    marginTop: "1.5em",
  },
});
function Reviews() {
  const classes = useStyles();
  return (
    <div className={classes.reviews}>
      <Container>
        <Grid container  spacing={5}>
          <Grid item xs={12} sm={6}>
            <p className={classes.heading}>
              Join 450,000+ people who already use Placeholder to find startup
              investment opportunities.
            </p>
            <p className={classes.description}>
              Placeholder is filled with investors and entrepreneurs that are
              passionate about building future innovation. They are accomplished
              individuals that invest in each other, support the community, and
              share their strengths to make the collective stronger. We are
              built by people like you.
            </p>
            <Button
              variant="contained"
              disableElevation
              className={classes.button}
            >
              Join our community <ArrowRightAlt size={15} />
            </Button>

            <div className={classes.reviewContainer}>
              <div className={classes.reviewHeader}>
                <Avatar src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/marketing/cary_breese.png" />
                <div>
                  <p className={classes.name}>Cary Breese</p>
                  <p className={classes.position}>
                    FOUNDER, NOW RX · RAISED $20,000,000
                  </p>
                </div>
              </div>
              <p className={classes.review}>
                “Placeholder has been a leader in the Regulation A and
                crowdfunding space since it first emerged as a sound alternative
                to traditional venture fundraising. By being out in front,
                Placeholder has developed the services and community necessary to
                help companies be successful in their fundraising efforts.
                Placeholder has been a fantastic partner for NowRx.”
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.reviewContainer}>
              <div className={classes.reviewHeader}>
                <Avatar src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/marketing/jan_goetgeluk.jpg" />
                <div>
                  <p className={classes.name}>Jan Goetgeluk</p>
                  <p className={classes.position}>
                    FOUNDER, NOW RX · RAISED $20,000,000
                  </p>
                </div>
              </div>
              <p className={classes.review}>
                “Even I didn’t expect such a groundswell of support going into
                this whole process. Just the sheer volume of people and interest
                that seem to be within reach through equity crowdfunding is
                remarkable and very promising.”
              </p>
            </div>
            <div className={classes.reviewContainer}>
              <div className={classes.reviewHeader}>
                <Avatar src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/marketing/brian_shimmerlik-2.jpg" />
                <div>
                  <p className={classes.name}>Brian Shimmerlik</p>
                  <p className={classes.position}>
                    FOUNDER, VENGO · RAISED $700,000
                  </p>
                </div>
              </div>
              <p className={classes.review}>
                “Placeholder raised me over $700k quickly, enabling me to spend
                less time fundraising and more time running my business.”
              </p>
            </div>
            <div className={classes.reviewContainer}>
              <div className={classes.reviewHeader}>
                <Avatar src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/marketing/michael_bunworth.jpg" />
                <div>
                  <p className={classes.name}>Michael Dunworth</p>
                  <p className={classes.position}>
                    FOUNDER, SNAPCARD · RAISED $675,000
                  </p>
                </div>
              </div>
              <p className={classes.review}>
                “Any founder that doesn't use Placeholder is missing the boat,
                literally. There's not one excuse I could hear that justifies
                not using the platform. Raising capital is the most time
                consuming exercise for a founder and it comes usually at the
                most important times of early stage companies. ”
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Reviews;
