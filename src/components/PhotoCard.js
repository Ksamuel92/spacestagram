import { Fragment, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Hal from "../assets/download.jpeg";
import {
  Avatar,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActionArea,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hal: {
    color: "black",
    fontSize: "initial",
  },
});

const PhotoCard = (props) => {
  const [isLikedPhoto, setIsLikedPhoto] = useState(false);
  const { photo } = props;
  const classes = useStyles();

  const handleClick = () => {
    setIsLikedPhoto((isLikedPhoto) => !isLikedPhoto);
  };

  return (
    <Card raised={true} sx={{ maxWidth: 700, marginTop: "10px" }}>
      <CardHeader
        avatar={<Avatar src={Hal} aria-label="avatar" />}
        title={photo.title}
        subheader={photo.date}
        action={
          <IconButton aria-label="like" onClick={handleClick}>
            {isLikedPhoto ? (
              <FavoriteIcon htmlColor="red" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        }
      />
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="800"
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
  );
};

export default PhotoCard;
