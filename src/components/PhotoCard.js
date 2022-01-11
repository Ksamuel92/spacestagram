import { Fragment, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Hal from "../assets/download.jpeg";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActionArea,
  Modal,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hal: {
    color: "black",
    fontSize: "initial",
  },
  hdImage: {
    maxWidth: "100%",
    height: "auto",
  },
});

const PhotoCard = (props) => {
  const [isLikedPhoto, setIsLikedPhoto] = useState(false);
  const [showHdPhoto, setShowHdPhoto] = useState(false);
  const { photo } = props;
  const classes = useStyles();

  const handleLikeClick = () => {
    setIsLikedPhoto((isLikedPhoto) => !isLikedPhoto);
  };

  const handleImageClick = () => {
    setShowHdPhoto((showHdPhoto) => !showHdPhoto);
  };

  return (
    <Fragment>
      <Card raised={true} sx={{ maxWidth: 700, marginTop: "10px" }}>
        <CardHeader
          avatar={<Avatar src={Hal} aria-label="avatar" />}
          title={photo.title}
          subheader={photo.date}
          action={
            <IconButton aria-label="like" onClick={handleLikeClick}>
              {isLikedPhoto ? (
                <FavoriteIcon htmlColor="red" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          }
        />
        <CardActionArea onClick={handleImageClick}>
          <CardMedia
            component="img"
            height="800"
            width="100%"
            overflow="visible"
            image={photo.url}
            alt={photo.title}
            key={photo.title}
          />
        </CardActionArea>
        <CardContent>
          <Typography paragraph={true} variant="caption">
            <span className={classes.hal}>Hal 9000</span> {photo.explanation}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={showHdPhoto}
        onClose={handleImageClick}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <img
            className={classes.hdImage}
            src={photo.hdurl}
            alt={photo.title + "in HD"}
          />
        </Box>
      </Modal>
    </Fragment>
  );
};

export default PhotoCard;
