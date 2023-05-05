import React from "react";
import AvatarThumbnail from "./AvatarThumbnail";

const AvatarsPlaceholder = ({ character }: { character: "girl" | "guy" }) => (
  <div className="relative">
    <AvatarThumbnail
      src={`/prompts/${character}/dataset/1.jpg`}
      transform="rotate(10deg)"
    />
    <AvatarThumbnail
      src={`/prompts/${character}/dataset/2.jpg`}
      left="80px"
      top="40px"
      transform="rotate(-4deg)"
      position="absolute"
    />
    <AvatarThumbnail
      src={`/prompts/${character}/dataset/3.jpg`}
      transform="rotate(-5deg)"
    />
  </div>
);

export default AvatarsPlaceholder;
