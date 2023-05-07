import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { TCharacter } from "./CharacterSwitcher";
import { Box } from "@chakra-ui/react";

const SIZE_IMAGE = 180;

const TiltImage = ({
  character,
  slug,
  size = SIZE_IMAGE,
}: {
  character: TCharacter;
  slug: string;
  size?: number | string;
}) => (
  <Box>
    <Tilt
      glareEnable
      glareMaxOpacity={0.4}
      glareColor="rgb(168 85 247)"
      glarePosition="all"
      glareBorderRadius="10px"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      style={{ height: size, width: size }}
    >
      <Image
        style={{ borderRadius: 10 }}
        src={`/prompts/${character}/${slug}.jpg`}
        alt={slug}
        width="512"
        height="512"
        unoptimized={true}
      />
    </Tilt>
  </Box>
);

export default TiltImage;
