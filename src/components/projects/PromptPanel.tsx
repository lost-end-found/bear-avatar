import BuyShotButton from "@/components/projects/shot/BuyShotButton";
import { getRefinedStudioName } from "@/core/utils/projects";
import useProjectContext from "@/hooks/use-project-context";
import {
  Box,
  Button,
  Flex,
  HStack,
  // Icon,
  Text,
  // Textarea,
  // VStack,
} from "@chakra-ui/react";
import { Project, Shot } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
// import { BsLightbulb } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { useMutation } from "react-query";
// import PromptsDrawer from "./PromptsDrawer";
// import PromptImage from "./PromptImage";

const PromptPanel = ({
  hasImageInputAvailable,
}: {
  hasImageInputAvailable: Boolean;
}) => {
  const {
    project,
    shotCredits,
    addShot,
    updateCredits,
    shotTemplate,
    updateShotTemplate,
    promptInputRef,
    updatePromptWizardCredits,
    promptImageUrl,
    setPromptImageUrl,
  } = useProjectContext();

  const { mutate: createPrediction, isLoading: isCreatingPrediction } =
    useMutation(
      "create-prediction",
      (project: Project) =>
        axios.post<{ shot: Shot }>(`/api/projects/${project.id}/predictions`, {
          prompt: promptInputRef.current!.value,
          seed: shotTemplate?.seed,
          ...(promptImageUrl && { image: promptImageUrl }),
        }),
      {
        onSuccess: (response) => {
          addShot(response.data.shot);
          promptInputRef.current!.value = "";
          setPromptImageUrl(undefined);
        },
      }
    );
  const { mutate: createPredictionJesus, isLoading: isCreatingPredictionJesus } =
    useMutation(
      "create-prediction",
      (project: Project) =>
        axios.post<{ shot: Shot }>(`/api/projects/${project.id}/predictions`, {
          prompt: 'painting of @me person, icon, byzantine, detailed, soft color, saint, halo, clean skin, looking straight, beautiful mouth, full face, Romanian Pantocrator, wax paint, symmetrical face',
          seed: shotTemplate?.seed,
          image: "https://imgur.com/Q53XOXO.jpg",
        }),
      {
        onSuccess: (response) => {
          addShot(response.data.shot);
          promptInputRef.current!.value = "";
        },
      }
    );

  return (
    <div className="bg-white rounded-md shadow-lg mb-10 p-4">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="semibold">
          Studio <b>{getRefinedStudioName(project)}</b>{" "}
          <BuyShotButton
            credits={shotCredits}
            onPaymentSuccess={(credits, promptWizardCredits) => {
              updateCredits(credits);
              updatePromptWizardCredits(promptWizardCredits);
            }}
          />
        </Text>
      </Flex>
      <div className="grid grid-cols-5 gap-5">
        <form className=""
          onSubmit={(e) => {
            e.preventDefault();
            createPredictionJesus(project);
            updateShotTemplate(undefined);
          }}
        >
          <div>
            <div className="group relative rounded-md overflow-hidden">
              <Image
                alt={'jesus'}
                width="250"
                height="250"
                src={'https://imgur.com/Q53XOXO.jpg'}
              />
              <div className="hidden group-hover:flex absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 text-white backdrop-blur-md justify-center items-center">
                <Button
                  disabled={shotCredits === 0}
                  type="submit"
                  size="lg"
                  variant="brand"
                  rightIcon={<FaCameraRetro />}
                  isLoading={isCreatingPredictionJesus}
                >
                  {shotCredits === 0 ? "No more shot" : "Generate"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromptPanel;
