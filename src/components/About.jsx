import React from 'react';
import ABOUTIMG from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl font-bold">About <span className="text-neutral-500">Me</span></h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-between">
                <motion.div
                    className="w-full lg:w-1/2"
                    whileInView={{ opacity: 1, x: 10 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center">
                        <img className="rounded-2xl h-auto lg:h-96" src={ABOUTIMG} alt="About Image" />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2 lg:pr-8"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-4 max-w-2xl py-6 font-light tracking-tight text-lg md:text-xl lg:text-lg text-white">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default About;
