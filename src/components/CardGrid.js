import { Fragment } from "react";
import PhotoCard from "./PhotoCard";
import { useGetPhotosQuery } from "../services/api";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const CardGrid = () => {
  const classes = useStyles();
  const {
    data: photoData,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetPhotosQuery();

  const photoCards = photoData?.map((photo) => (
    <PhotoCard photo={photo}></PhotoCard>
  ));

  return (
    <div className={classes.root}>
      {isLoading && <p>loading...</p>}
      {isError && <p>{error.message}</p>}
      {isSuccess && photoCards}
    </div>
  );
};

export default CardGrid;
