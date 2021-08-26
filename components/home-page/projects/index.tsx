import { VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./card";
import Header from "../../layout/header";
import { AnimateSharedLayout } from "framer-motion";
import { MotionBox } from "../../ui/motion";

interface project{
  title: string;
  description: string;
  cover:string;
  url:string;
  technologies: string[];
}

interface ProjectsProps {
  projects: project[];
}

const ORANGE = "#ff9400";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack align="start" spacing={8}>
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </Header>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard
                title={project.title}
                description={project.desc}
                cover={project.cover}
                url={project.url}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};

export default Projects;
