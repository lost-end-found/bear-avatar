import { prompts } from "@/core/utils/prompts";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Pause, WindupChildren } from "windups";
import AvatarsPlaceholder from "./AvatarsPlaceholder";
import urlSlug from "url-slug";

const MotionImage = motion(Image);
const MotionBox = motion(Box);

const Demo = () => {
  const [step, setStep] = useState(0);
  const prompt = prompts[step];
  const names = ["girl", "guy"] as const;
  const index = Math.random() >= 0.5 ? 1 : 0;

  return (
    <div className="sm:px-12">
      <div
        className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-4 py-2 bg-white shadow-xl mb-8"
      >
        <WindupChildren
          onFinished={() => {
            setStep(step === prompts.length - 1 ? 0 : step + 1);
          }}
        >
          {prompt.prompt.split(",")[0]}
          <Pause ms={4000} />
        </WindupChildren>
        <MotionBox
          borderRight="1px"
          borderColor="gray.400"
          as="span"
          bg="white"
          ml={1}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        />
      </div>
      <div className="flex space-x-32">
        <div>
          <AvatarsPlaceholder character={names[index]} />
        </div>
        <AnimatePresence mode="wait">
          <MotionImage
            key={prompt.label}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl shadow-xl z-10"
            width={224}
            height={224}
            loading="eager"
            alt={prompt.label}
            src={`/prompts/${names[index]}/${urlSlug(prompt.label, {
              separator: "-",
            })}.jpg`}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Demo;
