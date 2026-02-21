import React from 'react';
import logoImg from '../assets/imgs/lewis-bleu.png';

const NavBar = () => {
  return (
    <nav className="top-0 z-50 fixed items-center w-full">
      <div className='container flex justify-between max-w-7xl mx-auto py-4'>
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-15 h-8 flex items-center">
            <img src={logoImg} alt="" />
          </div>
          <span className="text-[#201A30]">Louise Berthet</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#22163A]">
          <a href="#projets" className="hover:text-black transition-colors">Projets</a>
          <a href="#apropos" className="hover:text-black transition-colors">A propos</a>
          <a href="#footer" className="hover:text-black transition-colors"> Contact → </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//  <nav className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/20 top-0 z-50 fixed items-center w-full ">
//       <div className='container flex justify-between max-w-6xl mx-auto px-7 py-4'>
        
//         {/* Logo Area */}
//         <div className="flex items-center gap-2 font-bold text-lg">
//           {/* Placeholder logo bleu comme sur le screen */}
//           <div className="w-15 h-8 flex items-center">
//             <img src={logoImg} alt="" />
//           </div>
//           <span className="text-[#201A30]">Louise Berthet</span>
//         </div>
        
//         {/* Links */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#22163A]">
//           <a href="#projets" className="hover:text-black transition-colors">Projets</a>
//           <a href="#apropos" className="hover:text-black transition-colors">A propos</a>
//           <a href="#footer" className="bg-[#7FC9AC] text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors flex items-center gap-2 shadow-md shadow-pink-200">
//             Contact <span className="text-xs bg-white/20 rounded-full w-4 h-4 flex items-center justify-center">→</span>
//           </a>
//         </div>
//       </div>
//     </nav>