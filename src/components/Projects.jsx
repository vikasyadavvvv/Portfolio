import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Project.css"; // Import the CSS file

const Projects = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Remove arrows from the slider
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl font-bold"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            className="w-full lg:w-1/4 pr-6" // Add padding-right to create a gap
                            initial={{ opacity: 0, x: -100 }} // Slide in from the left
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {project.images && project.images.length > 0 ? (
                                <Slider {...sliderSettings}>
                                    {project.images.map((image, imageIndex) => (
                                        <div key={imageIndex} className="image-container">
                                            <img 
                                                src={image} 
                                                alt={`${project.title} ${imageIndex + 1}`}
                                                className="slider-image"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <img 
                                    src="/path/to/default-image.jpg" 
                                    alt="default"
                                    className="mb-6 rounded"
                                />
                            )}
                        </motion.div>
                        <motion.div
                            className="w-full lg:w-3/4 lg:max-w-xl"
                            initial={{ opacity: 0, x: 100 }} // Slide in from the right
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap mb-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="mr-2 mb-2 rounded bg-neutral-900 text-sm font-medium text-purple-800">{tech}</span>
                                ))}
                            </div>
                            <div className="flex flex-wrap">
                                {project.links.map((link, linkIndex) => (
                                    <div key={linkIndex} className="flex items-center mr-2 mb-2">
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center rounded bg-purple-800 text-sm font-medium text-white px-2 py-1 mr-2">
                                            <FontAwesomeIcon icon={faPlay} className="mr-2" />
                                            Live
                                        </a>
                                        {link.github && (
                                            <a href={link.github} target="_blank" rel="noopener noreferrer" className="flex items-center rounded bg-black text-sm font-medium text-white px-2 py-1">
                                                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
