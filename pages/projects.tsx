import * as React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { PageSlideFade } from "components/ui/page-transitions";
import Header from "components/layout/header";
import { RiSignalTowerLine, RiWifiOffLine } from "react-icons/ri";
import OfflineData from "components/project/offline-data";
import { repositories } from "data/repositories";
import useSound from "use-sound";
import PageLayout from "components/layout/pageLayout";

const TURQUOISE = "#06b6d4";

const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true
};

const RepositoriesList = ({ repositories }) => {
  return (
    <PageLayout title="Projects" keywords="A list of projects">
      <PageSlideFade>
        <VStack align="start" spacing={3}>
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Projects
            </Header>
          <Text
            color={useColorModeValue("gray.500", "gray.200")}
            textAlign="left"
          >
            This page lists some repositories I have
            published.
          </Text>
        </VStack>
          <OfflineData repositories={repositories} />
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  return {
    props: {
      repositories
    }
  };
}

export default RepositoriesList;
