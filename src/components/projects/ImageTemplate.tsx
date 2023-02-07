import BuyShotButton from "@/components/projects/shot/BuyShotButton";
import ShotGenerator from "./ShotGenerator";
import { getRefinedStudioName } from "@/core/utils/projects";
import useProjectContext from "@/hooks/use-project-context";
import {
    Flex,
    Text,
} from "@chakra-ui/react";

const ImageTemplate = ({
    hasImageInputAvailable
}: {
    hasImageInputAvailable: Boolean;
}) => {
    const {
        project,
        shotCredits,
        updateCredits,
        updatePromptWizardCredits
    } = useProjectContext();


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
            <div className="grid grid-cols-5 gap-5 mt-4">
                <ShotGenerator project={project} defaultUrl={'https://imgur.com/BIZUS9p.jpg'} shotCredits={shotCredits} />
                <ShotGenerator project={project} prompt={'icon, byzantine, detailed, soft color, saint, halo, clean skin, looking straight, beautiful mouth, full face, Romanian Pantocrator, wax paint, symmetrical face'} defaultUrl={'https://imgur.com/GHU1I1T.jpg'} shotCredits={shotCredits} />
            </div>
        </div>
    );
};

export default ImageTemplate;
