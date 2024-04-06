import React from 'react';
import Boxes from './Boxes';

const BoxesContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg1.jpg" title="Image 1" />
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg2.jpg" title="Image 2" />
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg3.jpg" title="Image 3" />
      <Boxes image="/Users/shanakesia/Desktop/CMPT/projects/portfolio/port_v2/public/images/bg.jpg" title="Image 4" />
    </div>
  );
};

export default BoxesContainer;
