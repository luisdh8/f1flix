import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { VideosContainer, CategoryTitle, VideoList } from "./CategoryVideos.styled";

const CategoryVideos = () => {
  const { videoCategory } = useVideoContext();

  return (
    <VideosContainer>
      {Object.keys(videoCategory).map((category) => (
        <div key={category}>
          <CategoryTitle category={category}>{category}</CategoryTitle>
          <VideoList>
            {videoCategory[category].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </VideoList>
        </div>
      ))}
    </VideosContainer>
  );
};

export default CategoryVideos;
