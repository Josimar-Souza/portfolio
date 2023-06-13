import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  CardContainer,
  CardImageContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardButtonsContainer,
  CustomButon,
} from './projectsCardStyles';

function ProjectsCard({ project }) {
  const [cardImage, setCardImage] = useState('');

  useEffect(() => {
    const getImage = async () => {
      const image = await import(project.imagePath);

      setCardImage(image.default);
    };

    getImage();
  }, []);

  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={cardImage} alt={`Imagem do projeto ${project.label}`} />
      </CardImageContainer>
      <CardTitle>{project.label}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
      <CardButtonsContainer>
        {project.site
          ? (
            <a href={project.site} target="_blank" rel="noreferrer">
              <CustomButon>Ver site</CustomButon>
            </a>
          )
          : null}
        <a href={project.github} target="_blank" rel="noreferrer">
          <CustomButon>Ver Github</CustomButon>
        </a>
      </CardButtonsContainer>
    </CardContainer>
  );
}

ProjectsCard.propTypes = {
  project: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectsCard;
