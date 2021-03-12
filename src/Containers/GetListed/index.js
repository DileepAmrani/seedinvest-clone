import React from "react";
import { Navbar, Footer, Drawer } from "../../Components";
import {
  Container,
  Button,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  raise: {
    padding: "2%",
  },
  formContainer: {
    padding: "2% 12%",
  },
  sectionHeader: {
    padding: "4% 0",
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 300,
    color: "#2F2F2F",
  },
  sectionDesc: {
    fontSize: 16,
    color: "#777777",
    fontWeight: 300,
    margin: "5px 0",
  },
  form: {
    marginBottom: "1%",
  },
  formTitle: {
    fontSize: 20,
    color: "#2F2F2F",
    fontWeight: 500,
    marginBottom: "5px",
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 400,
    margin: "8px 0",
    color: "#666666",
  },
  textField: {
    outline: "none",
    marginBottom: "5px",
    fontSize: 8,
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    color: "#fff",
    background: "#00acee",
    borderRadius: 0,
    padding: 12,
    fontWeight: 500,
    minWidth: 100,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
    marginTop: "1.5em",
    "&:hover": {
      background: "#7E7675",
    },
  },
  infoSection: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "2.5%",
    borderTop: "1px solid #D0D0D0",
  },
  text: {
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 300,
  },
  link: {
    color: "#5991CA",
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 300,
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
    formContainer: {
      padding: "2% 2%",
    },
    infoSection: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      gap: "0px",
      padding: "2.5%",
      alignItems: 'center'
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

function GetListed() {
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
      <Container maxWidth="md">
        <div className={classes.formContainer}>
          <div className={classes.sectionHeader}>
            <h1 className={classes.sectionTitle}>
              Pre-qualify to raise on DREVS
            </h1>
            <p className={classes.sectionDesc}>
              See if you pre-qualify to raise on DREVS by taking a few minutes
              to complete this short form. We will get back to you with results
              as soon as possible.
            </p>
          </div>

          <div className={classes.form}>
            <h2 className={classes.formTitle}>Profile</h2>
            <Grid container spacing={2}>
              <Grid item sm={12} md={12} lg={12}>
                <p className={classes.inputLabel}>Legal Name</p>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={6}>
                    <TextField
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                      placeholder="First Name"
                      className={classes.textField}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <TextField
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                      placeholder="Last Name"
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing>
              <Grid item xs={12} md={12} lg={12}>
                <p className={classes.inputLabel}>Alias (Also Known As)</p>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="Alias"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.form}>
            <p className={classes.inputLabel}>Profile Links</p>
            <Grid container spacing>
              <Grid item xs={12} md={2} lg={2}></Grid>
              <Grid item xs={12} md={10} lg={10}>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="www.youtube.com/username"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} md={2} lg={2}></Grid>
              <Grid item xs={12} md={10} lg={10}>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="@handle"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} md={2} lg={2}></Grid>
              <Grid item xs={12} md={10} lg={10}>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="www.spotify.com/username"
                  className={classes.textField}
                />
              </Grid>

              <Grid item xs={12} md={2} lg={2}></Grid>
              <Grid item xs={12} md={10} lg={10}>
                {/* <p className={classes.inputLabel}>Netflix</p> */}
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="www.netflix.com/project-title"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.form}>
            <h2 className={classes.formTitle}>Project</h2>
            <Grid container spacing={2}>
              <Grid item sm={12} md={12} lg={12}>
                <p className={classes.inputLabel}>Project Type</p>
                <RadioGroup row aria-label="position" name="type">
                  <FormControlLabel
                    value="Audio"
                    control={<Radio color="primary" />}
                    label={
                      <p className={classes.inputLabel}>Singles (Audio)</p>
                    }
                  />
                  <FormControlLabel
                    value="Album"
                    control={<Radio color="primary" />}
                    label={<p className={classes.inputLabel}>Album (Audio)</p>}
                  />
                  <FormControlLabel
                    value="Video"
                    control={<Radio color="primary" />}
                    label={<p className={classes.inputLabel}>Video</p>}
                  />
                </RadioGroup>
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <p className={classes.inputLabel}>
                  Is this an independent project?
                </p>

                <RadioGroup row aria-label="position" name="independent">
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label={<p className={classes.inputLabel}>Yes</p>}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label={<p className={classes.inputLabel}>No</p>}
                  />
                </RadioGroup>
              </Grid>

              <Grid item sm={12} md={12} lg={12}>
                <p className={classes.inputLabel}>
                  What percentage of your project do you intend raise?
                </p>

                <RadioGroup row aria-label="position" name="anount">
                  <FormControlLabel
                    value="49"
                    control={<Radio color="primary" />}
                    label={<p className={classes.inputLabel}>49%</p>}
                  />
                  <FormControlLabel
                    value="100"
                    control={<Radio color="primary" />}
                    label={<p className={classes.inputLabel}>100%</p>}
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </div>

          <div className={classes.form}>
            <h2 className={classes.formTitle}>Contact Information</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <p className={classes.inputLabel}>Email Address</p>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="jonedoe@gmail.com"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <p className={classes.inputLabel}>Telephone Number</p>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="+41"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <p className={classes.inputLabel}>Country</p>
                <TextField
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="Country"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.buttonBox}>
            <Button className={classes.button}>Submit</Button>
          </div>
        </div>
      </Container>
      <div className={classes.infoSection}>
        <div>
          <p className={classes.text}>Have Questions?</p>
        </div>

        <div>
          <Link href="" className={classes.link}>
            contactus@placeholder.com
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GetListed;
