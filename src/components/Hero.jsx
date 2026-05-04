import React from 'react';
import Aurora from './Aurora';
import DarkVeil from './DarkVeil';
import FishTop from '../assets/imgs/lewis-bleu.svg';
import FishDecor from '../assets/imgs/Lewis.svg';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#7FC9AC] flex justify-center ">

      <div className="mt-[7rem] text-center px-6">
        <h1 className="text-[6rem] mx-auto mt-10 md:text-[7rem] lg:text-10xl leading-[0.9] font-bold uppercase tracking-tight">
          Louise Berthet
        </h1>
      </div>

      {/* left bottom skills list */}
      <div className="absolute left-8 bottom-20 space-y-1">
        <p className="text-2xl flex justify-end">Ux & Ui design</p>
        <p className="text-2xl">Developpement front end</p>
        <p className="text-2xl">Graphisme</p>
      </div>

      {/* bottom-right decorative element */}
      <img src={FishDecor} alt="decor" className="absolute hidden md:block right-12 bottom-20 w-36 opacity-90" />
    </div>
  );
};

export default Hero;