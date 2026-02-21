import React from 'react';
import BentoGallery from './BentoGallery';
import { projectsData } from '../data/ProjectsData';
import { useParams, Link } from 'react-router-dom';

const DetailProjet = () => {
    const { id } = useParams(); // Récupère "1"
    const project = projectsData.find(p => p.id === parseInt(id)); // Trouve le projet ID 1 dans la liste

    return (
        <div className='relative'>
            <aside className='fixed top-0 left-0 h-screen overflow-auto w-1/2 px-8 py-10'>
                <div className='max-w-[720px] justify-between '>

                    <Link to="/" className="text-sm text-gray-600 mb-4 inline-block">&lt; Back</Link>
                    <h2 className='text-8xl py-2 pb-5'>{project.title}</h2>

                    <div className='flex item-center justify-between mb-6'>
                        <div className='flex flex-wrap'>
                            {project.techno.map((tech, index) => (
                                <span
                                    key={index} 
                                    className="px-2 py-2 me-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div>
                            <p>{project.date}</p>
                        </div>
                    </div>
                
                    <div className='mb-6 text-gray-700'>
                        <p className='text-2xl'> 
                            {project.pitch}
                        </p>

                        <p className='text-1xl'> 
                            {project.desc}
                        </p>
                        
                        <div className='flex my-8 text-1xl gap-6 mb-8'>
                            <a href='#' className='underline'>lien github</a>
                            <a href='#' className='underline'>lien figma ?</a>
                        </div>
                    </div>
                    
                    <div className='flex mt-5 justify-between'>
                        <button className='px-4 py-2 border border-gray-400 rounded-full'>&lt;- Projet précédent</button>
                        <button className='px-4 py-2 border border-gray-400 rounded-full'>Projet suivant -&gt;</button>
                    </div>
                </div>
            </aside>
            <main className='images ml-[50%] h-screen'>
                <div className='min-h-screen'>
                    {/* Tu passes tes images ici */}
                    <BentoGallery 
                        images={[
                            "https://url-image-grande-1.jpg",
                            "https://url-image-petite-2.jpg",
                            "https://url-image-petite-3.jpg",
                            "https://url-image-grande-4.jpg"
                        ]} 
                    />
                </div>
            </main>
        </div>
    );
};

export default DetailProjet;
