import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThumbUpAlt, ThumbDownAlt } from "@material-ui/icons";
import { Button, IconButton } from "@material-ui/core";
import PlayAudio from "react-simple-audio-player";
import chroma from "chroma-js";
const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "8px 0",
    border: "1px solid #EFEFEF",
    boxShadow: ".1px .1px 1px #1D1D1D",
    padding: "0.5% 1%",
    borderRadius: 5,
    "&:hover": {
      backgroundColor: "#EFEFEF",
    },
  },
  leftSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: "0 10px",
  },
  rightSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0 10px",
  },
  likeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#1D1D1D",
  },
  name: {
    fontSize: 14,
    color: "#777777",
    fontWeight: 500,
  },

  count: {
    color: "#777777",
    fontSize: "14px",
  },
  icon: {
    color: "#B9BBB6",
  },
  iconColor: {
    color: "#00acee",
  },
  buttonBox: {
    padding: 5,
  },
  button: {
    textTransform: "none",
    background: "#00acee",
    borderRadius: 4,
    padding: "5%",
    color: "#fff",
    margin: 5,
  },
  "@media (max-width: 520px)": {
    card: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    leftSide: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0 10px",
    },
    rightSide: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0 10px",
    },
    likeContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
  },
});

function Cards(props) {
  const classes = useStyles();
  const [countDisLike, setCountDisLike] = useState(0);
  const [countLike, setCountLike] = useState(0);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  const colorScale = chroma.scale(["#0199CB", "#ffffff"]).mode("lch").colors(5);
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.leftSide}>
          <div>
            <PlayAudio
              url={"http://www.noiseaddicts.com/samples_1w72b820/4186.mp3"}
              colorScale={colorScale}
            />
          </div>
          <div>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.name}>{props.singer}</p>
          </div>
        </div>

        <div className={classes.rightSide}>
          <div className={classes.likeContainer}>
            <p className={classes.count}>{countLike}</p>
            <IconButton
              onClick={() => {
                disLike ? setDisLike(false) : setDisLike(false);
                setLike(true);
                setCountLike(countLike + 1);
              }}
            >
              {like ? (
                <ThumbUpAlt className={classes.iconColor} />
              ) : (
                <ThumbUpAlt className={classes.icon} />
              )}
            </IconButton>
            <p className={classes.count}>{countDisLike}</p>
            <IconButton
              onClick={() => {
                like ? setLike(false) : setLike(false);
                setDisLike(true);
                setCountDisLike(countDisLike + 1);
              }}
            >
              {disLike ? (
                <ThumbDownAlt className={classes.iconColor} />
              ) : (
                <ThumbDownAlt className={classes.icon} />
              )}
            </IconButton>
          </div>
          <div>
            <Button className={classes.button}>Participate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
