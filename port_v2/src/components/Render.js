import React from 'react';
import Boxes from './Boxes';

const BoxesContainer = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap', top: '170vh', left: '5vh' }}>
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg1.jpg" title="Image 1" style={{ alignSelf: 'flex-start' }} />
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg2.jpg" title="Image 2" style={{ alignSelf: 'center' }} />
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg3.jpg" title="Image 3" style={{ alignSelf: 'flex-end' }} />
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg.jpg" title="Image 4" style={{ alignSelf: 'center' }} />
    </div>
  );
};

export default BoxesContainer;




