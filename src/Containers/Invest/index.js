import React, { useState } from "react";
import { Navbar, Footer, Drawer } from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
const useStyles = makeStyles({
  headerContainer: {
    background: "#fff",
    borderBottom: "1px solid rgba(24,24,24,.2)",
  },
  heroSection: {
    padding: "18% 0%",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: 400,
    color: "#000",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  subHeading: {
    fontSize: "3rem",
    fontWeight: 300,
    color: "#000",
    lineHeight: 1.2,
    letterSpacing: "-.02em",
  },
  stepsContainer: {
    padding: "1% 0%",
  },
  step: {
    padding: "10% 0%",
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 200,
    color: "#0057ae",
    letterSpacing: 5.4,
    marginTop: "2em",
  },
  stepHeading: {
    fontSize: 42,
    fontWeight: 300,
    color: "#0057ae",
    letterSpacing: -0.84,
    marginTop: "0.2em",
    marginBottom: "0.5em",
  },
  stepDescription: {
    fontSize: 18,
    fontWeight: 300,
    margin: "0.5em 0",
    lineHeight: "30px",
  },
  accordionButton: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 18,
    marginBottom: "0.3em",
  },
  list: {
    padding: "0 5%",
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

function Invest() {
  const classes = useStyles();

  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  return (
    <div>
      <div style={{ position: "fixed", width: "100%" }}>
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
            <h1 className={classes.heading}>How to Invest on Placeholder</h1>
            <h1 className={classes.subHeading}>
              Learn about how startup investing works on Placeholder.
            </h1>
          </div>
        </Container>
      </div>
      <div className={classes.stepsContainer}>
        <Container>
          <div className={classes.step}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <img
                  src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/how-it-works/investor-final.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <p className={classes.stepNumber}>STEP 1:</p>
                <h1 className={classes.stepHeading}>
                  Sign Up and Join Placeholder
                </h1>
                <p className={classes.stepDescription}>
                  Enter your name and email address to unlock access to vetted
                  startups and make investments seamlessly online.
                </p>
                <p className={classes.stepDescription}>
                  In order to determine what you are legally able to invest in,
                  we are required to verify whether you are an Accredited
                  Investor or a Non-Accredited Investor.
                </p>

                <div>
                  <p
                    onClick={() => setAccordion1(!accordion1)}
                    className={classes.accordionButton}
                  >
                    {accordion1 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    What is an Accredited Investor?
                  </p>

                  {accordion1 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        An "Accredited Investor" is defined by the Securities
                        and Exchange Commission as someone who meets at least
                        one of the following requirements:
                      </p>
                      <ul className={classes.list}>
                        <li className={classes.stepDescription}>
                          Has an individual net worth, or joint net worth with
                          your spouse exceeding $1 million (excluding the value
                          of one's primary residence)
                        </li>
                        <li className={classes.stepDescription}>
                          Has an income exceeding $200,000 in each of the past
                          two years and expects the same this year
                        </li>
                        <li className={classes.stepDescription}>
                          Has an income (with your spouse) exceeding $300,000 in
                          each of the past two years and expects the same this
                          year
                        </li>
                        <li className={classes.stepDescription}>
                          Invests on behalf of a VC firm or other registered
                          investment company
                        </li>
                        <li className={classes.stepDescription}>
                          Invests on behalf of a business with $5 million in
                          assets and which was not formed for the specific
                          purpose of acquiring the securities offered
                        </li>
                        <li className={classes.stepDescription}>
                          Any entity in which all of the equity owners are
                          Accredited Investors
                        </li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p
                    onClick={() => setAccordion2(!accordion2)}
                    className={classes.accordionButton}
                  >
                    {accordion2 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    What is an Accredited Investor?
                  </p>

                  {accordion2 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        A "Non-Accredited Investor" is any individual or entity
                        that does not meet the definition of an Accredited
                        Investor.
                      </p>
                      <p className={classes.stepDescription}>
                        Please note that you do not need to be an Accredited
                        Investor to invest through Placeholder.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.step}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <img
                  src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/how-it-works/onboard-final.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <p className={classes.stepNumber}>STEP 2:</p>
                <h1 className={classes.stepHeading}>Customize Deal Flow</h1>
                <p className={classes.stepDescription}>
                  We will personalize your Placeholder experience during the
                  sign up process. By providing us with information about
                  yourself and your investment interests, we will be able to
                  suggest potential companies based on your preferences.
                </p>
                <p className={classes.stepDescription}>
                  Customize your investment goals by telling us how much you
                  have put aside to invest and what portion of that you would
                  like to invest in startups.
                </p>

                <div>
                  <p
                    onClick={() => setAccordion1(!accordion1)}
                    className={classes.accordionButton}
                  >
                    {accordion1 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How much should I invest in startups?
                  </p>

                  {accordion1 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        An "Accredited Investor" is defined by the Securities
                        and Exchange Commission as someone who meets at least
                        one of the following requirements:
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p
                    onClick={() => setAccordion2(!accordion2)}
                    className={classes.accordionButton}
                  >
                    {accordion2 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How to connect with us?
                  </p>

                  {accordion2 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        A "Non-Accredited Investor" is any individual or entity
                        that does not meet the definition of an Accredited
                        Investor.
                      </p>
                      <p className={classes.stepDescription}>
                        Please note that you do not need to be an Accredited
                        Investor to invest through Placeholder.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.step}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <img
                  src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/how-it-works/browse-final.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <p className={classes.stepNumber}>STEP 3:</p>
                <h1 className={classes.stepHeading}>Browse Vetted Deals</h1>
                <p className={classes.stepDescription}>
                  Explore all of the vetted investment opportunities on the
                  offerings page.
                </p>
                <p className={classes.stepDescription}>
                  We strive to feature a broad assortment of companies on
                  Placeholder in order to appeal to our entire investor network.
                  Once you find something that interests you, you may continue
                  on to the company's profile to learn more or simply follow the
                  company in order to be kept in the loop.
                </p>

                <div>
                  <p
                    onClick={() => setAccordion1(!accordion1)}
                    className={classes.accordionButton}
                  >
                    {accordion1 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How much should I invest in startups?
                  </p>

                  {accordion1 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        An "Accredited Investor" is defined by the Securities
                        and Exchange Commission as someone who meets at least
                        one of the following requirements:
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p
                    onClick={() => setAccordion2(!accordion2)}
                    className={classes.accordionButton}
                  >
                    {accordion2 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How to connect with us?
                  </p>

                  {accordion2 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        A "Non-Accredited Investor" is any individual or entity
                        that does not meet the definition of an Accredited
                        Investor.
                      </p>
                      <p className={classes.stepDescription}>
                        Please note that you do not need to be an Accredited
                        Investor to invest through Placeholder.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.step}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <img
                  src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/how-it-works/dd-final.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <p className={classes.stepNumber}>STEP 4:</p>
                <h1 className={classes.stepHeading}>Do Your Homework</h1>
                <p className={classes.stepDescription}>
                  Investing in startups is inherently risky. It is important for
                  you to do your own independent due diligence to mitigate those
                  risks.
                </p>
                <p className={classes.stepDescription}>
                  Take a closer look at the companies that you're interested in.
                  Get to know the companies by leveraging the Placeholder team
                  and connect with the companies' founding team members. Take a
                  deeper dive into the due diligence materials uploaded to the
                  data room.
                </p>

                <div>
                  <p
                    onClick={() => setAccordion1(!accordion1)}
                    className={classes.accordionButton}
                  >
                    {accordion1 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How much should I invest in startups?
                  </p>

                  {accordion1 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        An "Accredited Investor" is defined by the Securities
                        and Exchange Commission as someone who meets at least
                        one of the following requirements:
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p
                    onClick={() => setAccordion2(!accordion2)}
                    className={classes.accordionButton}
                  >
                    {accordion2 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How to connect with us?
                  </p>

                  {accordion2 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        A "Non-Accredited Investor" is any individual or entity
                        that does not meet the definition of an Accredited
                        Investor.
                      </p>
                      <p className={classes.stepDescription}>
                        Please note that you do not need to be an Accredited
                        Investor to invest through Placeholder.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.step}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <img
                  src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/how-it-works/invest-final.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <p className={classes.stepNumber}>STEP 5:</p>
                <h1 className={classes.stepHeading}>Make Investment</h1>
                <p className={classes.stepDescription}>
                  Making an investment on Placeholder is simple. Click the
                  "INVEST" button on the startup's profile page and follow the
                  steps to complete your investment.
                </p>
                <p className={classes.stepDescription}>
                  Invest as an individual or through an entity (such as LLCs or
                  Trusts).
                </p>

                <div>
                  <p
                    onClick={() => setAccordion1(!accordion1)}
                    className={classes.accordionButton}
                  >
                    {accordion1 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How much should I invest in startups?
                  </p>

                  {accordion1 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        An "Accredited Investor" is defined by the Securities
                        and Exchange Commission as someone who meets at least
                        one of the following requirements:
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p
                    onClick={() => setAccordion2(!accordion2)}
                    className={classes.accordionButton}
                  >
                    {accordion2 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How to connect with us?
                  </p>

                  {accordion2 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        A "Non-Accredited Investor" is any individual or entity
                        that does not meet the definition of an Accredited
                        Investor.
                      </p>
                      <p className={classes.stepDescription}>
                        Please note that you do not need to be an Accredited
                        Investor to invest through Placeholder.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.step}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <img
                  src="https://d2v4u62fw1nf2w.cloudfront.net/webapp-static/img/images/how-it-works/manage-final.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <p className={classes.stepNumber}>STEP 6:</p>
                <h1 className={classes.stepHeading}>Manage Your Portfolio</h1>
                <p className={classes.stepDescription}>
                  Making your first investment is just the beginning of building
                  a portfolio of private company investments on Placeholder.
                </p>
                <p className={classes.stepDescription}>
                  Most experts suggest that investors invest in at least 10-15
                  private companies in order to enhance your diversification.
                  Keep an eye out for companies in different industries and come
                  up with a plan for adding additional investments over time.
                </p>

                <div>
                  <p
                    onClick={() => setAccordion1(!accordion1)}
                    className={classes.accordionButton}
                  >
                    {accordion1 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How much should I invest in startups?
                  </p>

                  {accordion1 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        An "Accredited Investor" is defined by the Securities
                        and Exchange Commission as someone who meets at least
                        one of the following requirements:
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p
                    onClick={() => setAccordion2(!accordion2)}
                    className={classes.accordionButton}
                  >
                    {accordion2 ? (
                      <Remove fontSize="small" />
                    ) : (
                      <Add fontSize="small" />
                    )}
                    How to connect with us?
                  </p>

                  {accordion2 ? (
                    <div>
                      <p className={classes.stepDescription}>
                        A "Non-Accredited Investor" is any individual or entity
                        that does not meet the definition of an Accredited
                        Investor.
                      </p>
                      <p className={classes.stepDescription}>
                        Please note that you do not need to be an Accredited
                        Investor to invest through Placeholder.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
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

export default Invest;
