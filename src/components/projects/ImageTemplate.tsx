import BuyShotButton from "@/components/projects/shot/BuyShotButton";
import ShotGenerator from "./ShotGenerator";
import { getRefinedStudioName } from "@/core/utils/projects";
import useProjectContext from "@/hooks/use-project-context";
import {
    Flex,
    Text,
} from "@chakra-ui/react";

const ImageTemplate = ({
    hasImageInputAvailable,
}: {
    hasImageInputAvailable: Boolean;
}) => {
    const {
        project,
        shotCredits,
        updateCredits,
        updatePromptWizardCredits
    } = useProjectContext();

    console.log()
    return (
        <div className="bg-white rounded-md shadow-lg mb-10 p-4">
            <Flex alignItems="center" justifyContent="space-between">
                <Text fontSize="2xl" fontWeight="semibold">
                    Generate Similar Avatars
                </Text>
            </Flex>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-2">

                { project.instanceClass === 'woman' && 
                    <>
                        <ShotGenerator prompt={'painting'} hasImageInputAvailable={hasImageInputAvailable} defaultUrl={'JuSSozk.jpg'} assetUrl={'BIZUS9p.jpg'} />            
                        <ShotGenerator prompt={'painting, icon, byzantine, detailed, soft color, saint, halo, clean skin, looking straight, beautiful mouth, full face, Romanian Pantocrator, wax paint, symmetrical face'} hasImageInputAvailable={hasImageInputAvailable} defaultUrl={'9SYAPfK.jpg'} assetUrl={'U5FXLsa.jpg'} />
                        <ShotGenerator prompt={'painting'} hasImageInputAvailable={hasImageInputAvailable} defaultUrl={'XZTltyA.jpg'} assetUrl={'mGNwhnA.jpg'} />
                    </>    
                }
                { project.instanceClass === 'man' && 
                    <>
                        <ShotGenerator prompt={'van Gogh style'} hasImageInputAvailable={hasImageInputAvailable} defaultUrl={'Grkspnx.jpg'} assetUrl={'oOdjUfP.jpg'} />
                    </>
                }
            </div>
        </div>
    );
};

export default ImageTemplate;
