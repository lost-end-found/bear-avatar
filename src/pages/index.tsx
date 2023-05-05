
import "keen-slider/keen-slider.min.css";

import { Hero } from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing.jsx";
import Slider from "@/components/home/Slider";
import { PrimaryFeatures } from "@/components/home/PrimaryFeatures";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex flexDirection="column" marginX="auto" flex="1">
        <Hero />
      </Flex>
      <Slider />
      <PrimaryFeatures />
      <Pricing />
    </>
  );
}

