import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setIsLoading(false);
    setImages(gifs);
  };

  useEffect(() => {
    getImages();
  }, []);


  return {
    images,
    isLoading
  };
};
