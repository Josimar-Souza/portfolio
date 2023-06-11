import React from 'react';
import { ProjectsPageContainer, ProjectsContainer, ProjectsPageTitle } from './projectsStyles';
import projects from '../../constants/projects';
import ProjectsCard from '../../components/ProjectsCard';

function Projects() {
  return (
    <ProjectsPageContainer>
      <ProjectsPageTitle>Pincipais projetos que desenvolvi</ProjectsPageTitle>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </ProjectsPageContainer>
  );
}

export default Projects;
