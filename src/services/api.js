import { useQuery } from "react-query";
export const useGetPhotosQuery = () => {
  const { isLoading, error, isError, data, isFetching, isSuccess } = useQuery(
    "getPhotos",
    async () => {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=2FVxEhAfBgmNsZinZFXC3LF5GXNIx6NAKBi4JNO3&count=10"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    }
  );
  return {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};
