import React from 'react';
import { TecnologiesPageContainer, TecnologiesImage } from './tecnologiesStyles';
import tecnologiesImage from '../../images/tecnologies-projects.png';

function Tecnologies() {
  return (
    <TecnologiesPageContainer>
      <TecnologiesImage src={tecnologiesImage} />
    </TecnologiesPageContainer>
  );
}

export default Tecnologies;
