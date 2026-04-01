import React from 'react';
import BentoGallery from './BentoGallery';
import { projectsData } from '../data/ProjectsData';
import { useParams, Link, useNavigate } from 'react-router-dom';

const DetailProjet = () => {
    const { id } = useParams(); // Récupère "1"
    const project = projectsData.find(p => p.id === parseInt(id)); // Trouve le projet ID 1 dans la liste
    const navigate = useNavigate();
    const projectIndex = projectsData.findIndex(p => p.id === parseInt(id));
    const prevProject = projectsData[projectIndex - 1];
    const nextProject = projectsData[projectIndex + 1];

    return (
        <div className='relative'>
            <aside className='md:fixed md:top-0 md:left-0 md:h-screen md:overflow-auto md:w-1/2 md:px-8 md:py-10 w-full relative px-4 py-8 hide-scrollbar'>
                <div className='max-w-[820px] justify-between '>

                    <Link to="/" className="text-md text-gray-600 mb-4 inline-block">&lt; Back</Link>
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
                        {/* <div>
                            <p>{project.date}</p>
                        </div> */}
                    </div>
                
                    <div className='mb-6 text-gray-700'>
                        <p className='text-2xl mb-5 '> 
                            {project.pitch}
                        </p>

                        <p className='text-lg'> 
                            {project.desc}
                        </p>
                        
                        <div className='flex my-8 text-1xl gap-6 mb-8'>
                            <a 
                                href={project.lien} 
                                className='underline hover:text-pink-600 transition-colors'
                                onClick={() => lien && window.open(lien, '_blank', 'noopener,noreferrer')}
                            >lien vers le projet</a>
                        </div>
                    </div>
                    
                    <div className='flex mt-5 justify-between'>
                        {prevProject ? (
                            <button
                                onClick={() => navigate(`/project/${prevProject.id}`)}
                                className='px-4 py-2 border border-gray-400 rounded-full'
                            >&lt;- Projet précédent</button>
                        ) : (
                            <div />
                        )}

                        {nextProject ? (
                            <button
                                onClick={() => navigate(`/project/${nextProject.id}`)}
                                className='px-4 py-2 border border-gray-400 rounded-full'
                            >Projet suivant -&gt;</button>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </aside>
            <main className='images md:ml-[50%] ml-0 md:h-screen h-auto'>
                <div className='min-h-screen md:min-h-0'>
                    {/* Tu passes tes images ici */}
                    <BentoGallery />
                </div>
            </main>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default DetailProjet;
