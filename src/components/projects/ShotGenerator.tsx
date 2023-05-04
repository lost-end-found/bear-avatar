import BuyShotButton from "@/components/projects/shot/BuyShotButton";
import { getRefinedStudioName } from "@/core/utils/projects";
import useProjectContext from "@/hooks/use-project-context";
import {
    Button,
    Flex,
    Text,
} from "@chakra-ui/react";
import { Project, Shot } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";
import { useMutation } from "react-query";

const ShotGenerator = ({
    hasImageInputAvailable,
    defaultUrl,
    prompt,
    assetUrl
}: {
    hasImageInputAvailable: Boolean;
    defaultUrl: string,
    prompt: string,
    assetUrl: string,
}) => {
    const {
        project,
        shotCredits,
        addShot,
        shotTemplate,
        updateShotTemplate,
    } = useProjectContext();

    const { mutate: createPrediction, isLoading: isCreatingPrediction } =
        useMutation(
            "create-prediction",
            (project: Project) =>
                axios.post<{ shot: Shot }>(`/api/projects/${project.id}/predictions`, {
                    prompt: 'painting of @me, detailed, clean skin, looking straight, full face, symmetrical face studio lighting, 8 k, photo shoot, 9 inch kershaw soft focus lens f / 5. 6 ' + prompt,
                    seed: shotTemplate?.seed,
                    image: `https://imgur.com/${assetUrl ? assetUrl : defaultUrl}`,
                }),
            {
                onSuccess: (response) => {
                    addShot(response.data.shot);
                },
            }
        );

    return (
        <form className="group"
            onSubmit={(e) => {
                e.preventDefault();
                createPrediction(project);
                updateShotTemplate(undefined);
            }}
        >
            <div>
                <div className="group relative rounded-md overflow-hidden transform transition-shadow shadow-sm hover:shadow-2xl">
                    <Image
                        alt={''}
                        width="250"
                        height="250"
                        src={`/assets/${defaultUrl}`}
                    />
                    <div className="hidden group-hover:flex absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 text-white backdrop-blur-md justify-center items-center">
                        <Button
                            disabled={shotCredits === 0}
                            type="submit"
                            size="lg"
                            variant="brand"
                            rightIcon={<FaCameraRetro />}
                            isLoading={isCreatingPrediction}
                        >
                            {shotCredits === 0 ? "No more shot" : "Generate"}
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ShotGenerator;
