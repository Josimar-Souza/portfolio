import React from 'react';
import { TecnologiesPageContainer, TecnologiesImage } from './tecnologiesStyles';
import tecnologiesImage from '../../images/tecnologies-project.png';

function Tecnologies() {
  return (
    <TecnologiesPageContainer>
      <TecnologiesImage src={tecnologiesImage} />
    </TecnologiesPageContainer>
  );
}

export default Tecnologies;
