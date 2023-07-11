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
import images from '../../images/projects/images';

function ProjectsCard({ project }) {
  const getImage = () => {
    const {
      calculatorImage,
      countriesInfosImage,
      gamesLibraryApiImage,
      musicLibrary,
      sharpMoviesImage,
      temperatureConverter,
      weatherApp,
      gamesLibrary,
    } = images;

    switch (project.name) {
      case 'countries-info':
        return countriesInfosImage;
      case 'sharp-movies':
        return sharpMoviesImage;
      case 'games-library-api':
        return gamesLibraryApiImage;
      case 'temperature-converter':
        return temperatureConverter;
      case 'calculator':
        return calculatorImage;
      case 'music-library':
        return musicLibrary;
      case 'weather-app':
        return weatherApp;
      case 'games-library':
        return gamesLibrary;
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
