import { Fragment } from "react";
import {
  Avatar,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActionArea,
  IconButton,
} from "@mui/material";
import Hal from "../assets/download.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import randomPhotoFormatGenerator from "../helpers/randomPhotoFormatGenerator";
import { useGetPhotosQuery } from "../services/api";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const CardGrid = () => {
  const {
    data: photoData,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetPhotosQuery();
  // const [isLikedPhoto, setIsLikedPhoto] = useState();

  const photos = photoData?.map((photo) => {
    const { rows, cols } = randomPhotoFormatGenerator(8, 8);
    return (
      <Card raised={true} sx={{ maxWidth: 700 }}>
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
            height="auto"
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
  });

  return (
    <div>
      {isLoading && <p>loading...</p>}
      {isError && <p>{error.message}</p>}
      {isSuccess && photos}
    </div>
  );
};

export default CardGrid;
