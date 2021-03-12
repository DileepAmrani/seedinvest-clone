import React, { useState } from "react";
import { Navbar, Footer, Card, Drawer } from "./../../Components";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContentEditable from "react-contenteditable";
const useStyles = makeStyles({
  section: {
    margin: "5% 0",
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 400,
    letterSpacing: "-0.84px",
    padding: "0.2em 0",
    borderTop: "1px solid #E7E7E7",
  },
  description: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "20.8px",
    marginBottom: "2em",
  },
  name: {
    fontSize: 16,
    color: "#777777",
    fontWeight: 500,
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

function BrowseCatalogue(props) {
  const classes = useStyles();
  const navData = {
    bgColor: "#fff",
    color: "#000",
    logo:
      "https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/website/logo_dark.svg",
    mobileLogo:
      "https://d2v4u62fw1nf2w.cloudfront.net/app/img/website/icon_dark.svg",
    history: props,
  };

  const [html, setHtml] = useState(
    "The following offerings are conducted by contractual agreement(s) with the respective contents owner. The content owner names are displayed below each content. Participation indicates your believed potential value and worth of the content(s) when released."
  );

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };
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
      <div>
        <Container>
          <div className={classes.section}>
            <Grid container >
              <Grid item lg={10} md={12}>
                <ContentEditable
                  html={html} // innerHTML of the editable div
                  disabled={false} // use true to disable edition
                  onChange={handleChange} // handle innerHTML change
                  className={classes.description}
                />
               
              </Grid>
            </Grid>
            <Grid container >
              <Grid item lg={8} md={12}>
              <p className={classes.sectionTitle}>Singles (Audio)</p>
                <div>
                  <Card title="Dance Monkey" singer="Tones and I" />
                  <Card title="Dominic's Interlude" singer="Halsey" />
                  <Card title="Bad Guy" singer="Billie Eilish" />
                  <Card title="Someone you loved" singer="Lewis Capaldi" />
                  <Card title="Beliver" singer="Imgine Dergons" />
                  <Card title="Good Bye" singer="Billie Eilish" />
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.section}>
            <Grid container >
              <Grid item lg={8} md={12}>
                <p className={classes.sectionTitle}>Albums (Audio)</p>
                <div>
                  <Card title="Dance Monkey" singer="Tones and I" />
                  <Card title="Dominic's Interlude" singer="Halsey" />
                  <Card title="Bad Guy" singer="Billie Eilish" />
                  <Card title="Someone you loved" singer="Lewis Capaldi" />
                  <Card title="Beliver" singer="Imgine Dergons" />
                  <Card title="Good Bye" singer="Billie Eilish" />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>

        <Container>
          <div className={classes.section}>
            <Grid container >
              <Grid item lg={8} md={12}>
                <p className={classes.sectionTitle}>Video</p>
                <div>
                  <Card title="Dance Monkey" singer="Tones and I" />
                  <Card title="Dominic's Interlude" singer="Halsey" />
                  <Card title="Bad Guy" singer="Billie Eilish" />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default BrowseCatalogue;
