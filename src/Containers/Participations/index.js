import React from "react";
import { Navbar, Drawer, Footer, Card } from "./../../Components";
import { Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  section: {
    margin: "5% 0",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 300,
    letterSpacing: "-0.84px",
    padding: "0.2em 0",
    borderBottom: "1px solid #E7E7E7",
    marginBottom: "1em",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#1D1D1D",
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

function Participations(props) {
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
            <p className={classes.sectionTitle}>My Participations</p>
            <Grid justify="center">
              <Grid item lg={10} md={12}>
                <TableContainer>
                  <Table
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Name</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Type</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Manage</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <p className={classes.title}>Dance Monkey</p>
                          <p className={classes.name}>Tones and I</p>
                        </TableCell>
                        <TableCell align="right">Audio</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined">Manage</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <p className={classes.title}>Dance Monkey</p>
                          <p className={classes.name}>Tones and I</p>
                        </TableCell>
                        <TableCell align="right">Audio</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined">Manage</Button>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <p className={classes.title}>Dance Monkey</p>
                          <p className={classes.name}>Tones and I</p>
                        </TableCell>
                        <TableCell align="right">Audio</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined">Manage</Button>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <p className={classes.title}>Dance Monkey</p>
                          <p className={classes.name}>Tones and I</p>
                        </TableCell>
                        <TableCell align="right">Audio</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined">Manage</Button>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <p className={classes.title}>Dance Monkey</p>
                          <p className={classes.name}>Tones and I</p>
                        </TableCell>
                        <TableCell align="right">Audio</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined">Manage</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Participations;
