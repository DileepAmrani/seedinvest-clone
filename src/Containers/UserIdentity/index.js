import React from "react";
import { Navbar, Drawer, Footer } from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Button,
  Link,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: "#fff",
  },
  heroSection: {
    paddingTop: "100px",
    paddingBottom: "30px",
  },
  heading: {
    // marginBottom: "1rem",
    fontSize: 40,
    fontWeight: 400,
    color: "#000",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  nav: {
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
    borderBottom: "2px solid #000",
    padding: 10,
    fontWeight: 500,
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
    padding: "4% 0",
    borderBottom: "1px solid #E7E7E7",
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 500,
    padding: "1% 0",
    color: "#181818e6",
  },

  button: {
    backgroundColor: "#d8d8d8",
    color: "#fff",
    borderRadius: 0,
    padding: 6,
    minWidth: 100,
    margin: "1.5em 0",
    "&:hover": {
      backgroundColor: "#d8d8d8",
    },
  },
  buttonActive: {
    backgroundColor: "#3378be",
    color: "#fff",
    borderRadius: 0,
    padding: 8,
    minWidth: 100,
    margin: "1.5em 0",
    "&:hover": {
      backgroundColor: "#5898da",
    },
  },
  accordion: {
    margin: "10px 0",
    borderRadius: 5,
  },
  accordionHeader: {
    backgroundColor: "#F7E6EA",
  },
  accordionHeaderWhite: {
    backgroundColor: "#FFF",
  },
  root: {
    width: "100%",
  },
  headings: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    flex: 1,
  },
  accordionBody: {
    width: "100%",
    padding: "4% 0",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "#ae1138",
  },
  textField: {
    backgroundColor: "#F3F3F3",
    width: "90%",
    padding: "3%",
    border: "1px solid #F3F3F3 ",
    borderRadius: 4,
    "&:focus": {
      border: "1px solid #000",
      outline: "none",
    },
  },
  required: {
    color: "#ae1138",
    fontWeight: "500",
  },
  helperText: {
    fontSize: 12,
    lineHeight: "14px",
    marginTop: "5px",
  },
  property: {
    fontWeight: "600",
  },
  requireField: {
    backgroundColor: "#F7E6EA",
    width: "90%",
    padding: "3%",
    border: "1px solid #F7E6EA",
    borderRadius: 4,
    "&:focus": {
      border: "1px solid #000",
      outline: "none",
    },
  },
  requireFieldUpload: {
    opicity: "0",
    maxWidth: 200,
  },
  buttonBox: {
    marginTop: "20px",
  },
  cancelBtn: {
    border: "1px solid #A2A2A2",
    borderRadius: 2,
    marginRight: "10px",
    color: "#A2A2A2",
    width: 100,
    marginBottom: 5,
  },
  enterBtn: {
    backgroundColor: "#00acee",
    borderRadius: 2,
    color: "#ffffff",
    width: 150,
    "&:hover": {
      backgroundColor: "#00acee",
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
}));

const navData = {
  bgColor: "#fff",
  color: "#000",
};

function UserIdentity() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            <h1 className={classes.heading}>User Settings</h1>
          </div>
        </Container>
        <div className={classes.nav}>
          <Container>
            <div className={classes.navItems}>
              <div className={classes.navItem}>
                <Link href="/settings/user-account" className={classes.navLink}>
                  User Account
                </Link>
              </div>
              <div className={classes.navItemActive}>
                <Link href="#" className={classes.navLink}>
                  User Identity
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* <Services /> */}
      <div className={classes.boxesContainer}>
        <Container>
          <h2 className={classes.formTitle}>Your Identity</h2>

          <Grid container>
            <Grid item lg={7} sm={12}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  className={classes.accordion}
                  elevation="0"
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={classes.accordionHeader}
                  >
                    <Typography className={classes.headings}>
                      Legal Name
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Please Enter
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes.accordionBody}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} lg={6}>
                          <p className={classes.property}>First Name</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            className={classes.requireField}
                            placeholder="First Name"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <p className={classes.property}>Middle Name</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            className={classes.textField}
                            placeholder="Middle Name"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <p className={classes.property}>Last Name</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            className={classes.requireField}
                            placeholder="Last Name"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}></Grid>
                        <Grid item xs={12} lg={6}>
                          <div className={classes.buttonBox}>
                            <Button className={classes.cancelBtn}>
                              Cancel
                            </Button>
                            <Button className={classes.enterBtn}>
                              Please Enter
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={7} sm={12}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  className={classes.accordion}
                  elevation="0"
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={classes.accordionHeader}
                  >
                    <Typography className={classes.headings}>
                      Date of Birth
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Please Enter
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes.accordionBody}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>Month, Day, Year</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            id="date"
                            variant="outlined"
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            // className={classes.requireField}
                            fullWidth
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}></Grid>
                        <Grid item xs={12} lg={6}>
                          <div className={classes.buttonBox}>
                            <Button className={classes.cancelBtn}>
                              Cancel
                            </Button>
                            <Button className={classes.enterBtn}>
                              Please Enter
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={7} sm={12}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  className={classes.accordion}
                  elevation="0"
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={classes.accordionHeader}
                  >
                    <Typography className={classes.headings}>
                      Residence Address
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Please Enter
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes.accordionBody}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>
                            Address 1 (No P.O. Box)
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="116 W Houston Street"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <p className={classes.property}>
                            Address 2 (No P.O. Box)
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.textField}
                            placeholder="(Optional)"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>
                            City, State/Province, Country
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="eg. New York, United States"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>Postal Code</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="#####"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}></Grid>
                        <Grid item xs={12} lg={6}>
                          <div className={classes.buttonBox}>
                            <Button className={classes.cancelBtn}>
                              Cancel
                            </Button>
                            <Button className={classes.enterBtn}>
                              Please Enter
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={7} sm={12}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  className={classes.accordion}
                  elevation="0"
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={classes.accordionHeader}
                  >
                    <Typography className={classes.headings}>
                      Phone Number
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Please Enter
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes.accordionBody}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>Phone Number</p>
                          <p className={classes.helperText}>
                            (E.g. +1 for U.S. phone numbers).
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="+1 201-555-0123"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}></Grid>
                        <Grid item xs={12} lg={6}>
                          <div className={classes.buttonBox}>
                            <Button className={classes.cancelBtn}>
                              Cancel
                            </Button>
                            <Button className={classes.enterBtn}>
                              Please Enter
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item lg={7} sm={12}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  className={classes.accordion}
                  elevation="0"
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={classes.accordionHeader}
                  >
                    <Typography className={classes.headings}>
                      Identification
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Please Enter
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes.accordionBody}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>
                            Country of citizenship
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="e.g United States"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>
                            Upload ID Card/Driving Liscence etc
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            className={classes.requireFieldUpload}
                            type="file"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}></Grid>
                        <Grid item xs={12} lg={6}>
                          <div className={classes.buttonBox}>
                            <Button className={classes.cancelBtn}>
                              Cancel
                            </Button>
                            <Button className={classes.enterBtn}>
                              Please Enter
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>

          

          <h2 className={classes.formTitle}>Your Background Information</h2>
          <Grid container>
            <Grid item lg={7} sm={12}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                  className={classes.accordion}
                  elevation="0"
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={classes.accordionHeader}
                  >
                    <Typography className={classes.headings}>
                      Employment
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Please Enter
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes.accordionBody}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>Current employment</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="Scroll See all options"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>Employer Name</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="Placeholder"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>Title/Role</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="Partner"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>Physical Address 1</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="116 W Houston"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <p className={classes.property}>Physical Address 2</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.textField}
                            placeholder="(Optional)"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>
                            City, State/Province, Country
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="Partner"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}></Grid>
                        <Grid item xs={12} lg={6}>
                          <input
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            fullWidth
                            className={classes.requireField}
                            placeholder="#####"
                          />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <p className={classes.required}>
                            Have you been at this employer for less than one
                            year?
                          </p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <RadioGroup
                            row
                            aria-label="position"
                            name="independent"
                          >
                            <FormControlLabel
                              value="yes"
                              control={<Radio color="primary" />}
                              label="Yes"
                            />
                            <FormControlLabel
                              value="no"
                              control={<Radio color="primary" />}
                              label="No"
                            />
                          </RadioGroup>
                        </Grid>

                        <Grid item xs={12} lg={6}></Grid>
                        <Grid item xs={12} lg={6}>
                          <div className={classes.buttonBox}>
                            <Button className={classes.cancelBtn}>
                              Cancel
                            </Button>
                            <Button className={classes.enterBtn}>
                              Please Enter
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default UserIdentity;
