import useQuery from "react-query";
export const useGetPhotosQuery = () => {
  const { isLoading, error, data, isFetching } = useQuery("getPhotos", () =>
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=2FVxEhAfBgmNsZinZFXC3LF5GXNIx6NAKBi4JNO3"
    ).then((res) => res.json())
  );
  return {
    isLoading,
    error,
    data,
    isFetching,
  };
};
