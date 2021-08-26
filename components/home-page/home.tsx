import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Button
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { MotionBox, MotionFlex } from "components/ui/motion";
import Header from "components/layout/header";
import Projects from "./projects";
import NextLink from 'next/link'

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const UserIcon = "https://avatars.githubusercontent.com/u/59069780?v=4"

interface HomeProps {
  projects: project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {

  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]} minH={"50vh"}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
           src={UserIcon}
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0}>
            Hey!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Facundo Prieto
            </Box>{" "}
            and I&apos;m a{" "}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Web Developer.
            </Box>{" "}
          </Box>
          <Button my="4" maxW="36" leftIcon={<FiMail/>} colorScheme="teal">Contact me</Button>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Projects projects={projects} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
