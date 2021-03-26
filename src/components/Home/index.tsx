import React from 'react';
import { ReactMegaMenu } from 'react-mega-menu';
import './style.scss'

const Home = () => {
  return (
    <div>
      <ReactMegaMenu 
        tolerance={50}
        direction={"LEFT"}
        data={[]}
      />
    </div>
  );
}

export default Home;