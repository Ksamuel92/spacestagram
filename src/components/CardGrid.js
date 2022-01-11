import { Fragment } from "react";
import PhotoCard from "./PhotoCard";
import LinearProgress from "@mui/material/LinearProgress";
import { useGetPhotosQuery } from "../services/api";
import { makeStyles } from "@mui/styles";
import InfiniteScroll from "react-infinite-scroller";

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
    hasNextPage,
    fetchNextPage,
  } = useGetPhotosQuery();

  debugger;

  return (
    <div className={classes.root}>
      {isLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={fetchNextPage}
          loader={<LinearProgress />}
          threshold={500}
        >
          {photoData?.pages.map((page) =>
            page.results.map((photo) => (
              <PhotoCard photo={photo} key={photo.title} />
            ))
          )}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default CardGrid;
