import Home from "components/home-page/home";
import { repositories } from "data/repositories";
import PageLayout from "components/layout/pageLayout";

export default function Index({ projects }) {
  return (
    <PageLayout title="Facundo Prieto - Full Stack Developer">
      <Home projects={projects} />
    </PageLayout>
  );
}

export function getStaticProps() {
  const projects = repositories;
  return {
    props: {
      projects
    }
  };
}
