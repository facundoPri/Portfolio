import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition
} from "components/ui/page-transitions";
import { MotionBox } from "components/ui/motion";
import Header from "components/layout/header";
import PageLayout from "components/layout/pageLayout";

const TURQUOISE = "#06b6d4";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <PageLayout
      title="About"
      description="My educational and professional journey so far"
    >
      <PageSlideFade>
        <VStack align="start" spacing={3}>
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                About
            </Header>

            <VStack
              spacing={3}
              color={useColorModeValue("gray.500", "gray.200")}
              align="flex-start"
              textAlign="left"
              flexDir="column"
            >
              <Text>
                  Hey, I’m Facundo. I'm a fullstack developer, and a computer engineering student at the University of Buenos Aires.
              </Text>
              <Text>
                  I work as a freelancer, creating web sites and web apps.
              </Text>
            </VStack>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  return {
    props: {
    }
  };
}

export default About;
