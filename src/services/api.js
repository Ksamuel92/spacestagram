import { useInfiniteQuery } from "react-query";
export const useGetPhotosQuery = () => {
  const {
    isLoading,
    error,
    isError,
    data,
    isFetching,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery("photos", fetchPhotos, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
  return {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  };
};

const fetchPhotos = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=2FVxEhAfBgmNsZinZFXC3LF5GXNIx6NAKBi4JNO3&count=10`
  );
  const results = await response.json();
  return { results, nextPage: pageParam + 1, totalPages: 100 };
};
