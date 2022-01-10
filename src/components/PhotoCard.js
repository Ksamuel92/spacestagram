import { Fragment, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Hal from "../assets/download.jpeg";
import {
  Avatar,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActionArea,
  IconButton,
} from "@mui/material";

const PhotoCard = (props) => {
  const [isLikedPhoto, setIsLikedPhoto] = useState();
  const { photo } = props;

  return (
    <Card raised={true} sx={{ maxWidth: 700, marginTop: "10px" }}>
      <CardHeader
        avatar={<Avatar src={Hal} aria-label="avatar" />}
        title={photo.title}
        subheader={photo.date}
        action={
          <IconButton aria-label="like">
            <FavoriteBorderIcon />
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
        <p>{photo.explanation}</p>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
