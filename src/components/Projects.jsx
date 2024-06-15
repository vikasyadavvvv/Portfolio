import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                        whileInView={{opacity:1,y:0}}
                        initial={{opacity:0, y:100}}
                        transition={{duration:1.5}}
            
            className="my-20 text-center text-4xl">Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <div className="w-full lg:w-1/4">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                height={150}
                                width={150}
                                className="mb-6 rounded"
                            />
                        </div>
                        <div className="w-full lg:w-3/4 lg:max-w-xl">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap mb-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="mr-2 mb-2 rounded bg-neutral-900 text-sm font-medium text-purple-800">{tech}</span>
                                ))}
                            </div>
                            <div className="flex flex-wrap">
                                {project.link.map((link, linkIndex) => (
                                    <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="mr-2 mb-2 rounded bg-purple-800 text-sm font-medium text-white px-2 py-1">
                                        Visit Project
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
