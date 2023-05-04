import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import AvatarsPlaceholder from "./AvatarsPlaceholder";

export type TCharacter = "girl" | "guy";

const CharacterSwitcher = ({
  onCharacterChange,
}: {
  onCharacterChange: (character: TCharacter) => void;
}) => {
  const [character, setCharacter] = useState<TCharacter>("girl");

  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} position="relative">
        <AvatarsPlaceholder character={character} />
      </Box>
      <ButtonGroup
        pl={4}
        mt={4}
        mx="auto"
        size="sm"
        isAttached
        variant="outline"
      >
        <Button
          variant={character === "girl" ? "brand" : "outline"}
          onClick={() => {
            setCharacter("girl");
            onCharacterChange("girl");
          }}
        >
          Girl
        </Button>
        <Button
          variant={character === "guy" ? "brand" : "outline"}
          onClick={() => {
            setCharacter("guy");
            onCharacterChange("guy");
          }}
        >
          Guy
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default CharacterSwitcher;
