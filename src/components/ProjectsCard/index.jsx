import React from 'react';
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

import countriesInfoImage from '../../images/projects/countries-infos.png';
import sharpMmoviesImage from '../../images/projects/sharp-movies.png';
import gamesLibraryAPIImage from '../../images/projects/games-library-api.png';
import temperatureConverterImage from '../../images/projects/temperature-converter.png';
import calculatorImage from '../../images/projects/calculator.png';

function ProjectsCard({ project }) {
  const getImage = () => {
    switch (project.name) {
      case 'countries-info':
        return countriesInfoImage;
      case 'sharp-movies':
        return sharpMmoviesImage;
      case 'games-library-api':
        return gamesLibraryAPIImage;
      case 'temperature-converter':
        return temperatureConverterImage;
      case 'calculator':
        return calculatorImage;
      default:
        return '';
    }
  };

  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={getImage()} alt={`Imagem do projeto ${project.label}`} />
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
