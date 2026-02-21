import React from 'react';

const BentoGallery = ({ images }) => {
  // images doit être un tableau de 4 URLs : ["url1", "url2", "url3", "url4"]
  // Si pas d'images fournies, on met des placeholders gris pour visualiser la structure
  const imgs = images || ["", "", "", ""]; 

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      
      {/* --- COLONNE GAUCHE --- */}
      <div className="flex flex-col gap-4">
        
        {/* 1. Grand rectangle (Haut Gauche) */}
        <div className="relative h-80 md:h-96 rounded-md overflow-hidden bg-gray-200">
           {imgs[0] && (
             <img 
               src={imgs[0]} 
               alt="Gallery 1" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

        {/* 2. Petit rectangle (Bas Gauche) */}
        <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden bg-gray-200">
           {imgs[1] && (
             <img 
               src={imgs[1]} 
               alt="Gallery 2" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

      </div>

      {/* --- COLONNE DROITE --- */}
      <div className="flex flex-col gap-4">
        
        {/* 3. Petit rectangle (Haut Droite) */}
        <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden bg-gray-200">
           {imgs[2] && (
             <img 
               src={imgs[2]} 
               alt="Gallery 3" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

        {/* 4. Grand rectangle (Bas Droite) */}
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-200">
           {imgs[3] && (
             <img 
               src={imgs[3]} 
               alt="Gallery 4" 
               className="w-full h-full object-cover" 
             />
           )}
        </div>

      </div>

    </div>
  );
};

export default BentoGallery;