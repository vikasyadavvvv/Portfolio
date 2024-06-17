import React from "react";
import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/VikasyadavProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    });

    return (
        <div className="pl-10 border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight lg:mt-16 lg:text-8xl text-white"
                        >
                            Vikas Yadav
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl md:text-2xl lg:text-3xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-4 max-w-2xl py-6 font-light tracking-tight text-lg md:text-xl lg:text-xl text-white"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{x:100,opacity:0}}
                            animate={{x:0 , opacity:1}}
                            transition={{duration:1 ,delay:1.2}}
                            className="rounded-3xl h-80 md:h-96 lg:h-96 shadow-xl"
                            src={ProfilePic} alt="profilepic"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
