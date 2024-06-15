import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
    const iconVariants = {
        initial: { y: 0 },
        animate: {
            y: [10, -10],
            transition: {
                duration: 2.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2 
                                    whileInView={{opacity:1,y:0}}
                                    initial={{opacity:0, y:100}}
                                    transition={{duration:1.5}}
            
            className="my-10 text-center text-4xl">Contact</motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                    href="https://www.linkedin.com/in/vikas-yadav-1916002a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                >
                    <FaLinkedin className="text-7xl text-blue-500 hover:cursor-pointer" />
                </motion.a>
                <motion.a
                    href={`https://wa.me/${CONTACT.phoneNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                >
                    <FaWhatsapp className="text-7xl text-green-600 hover:cursor-pointer" />
                </motion.a>
                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                >
                    <SiGmail className="text-7xl text-red-400 hover:cursor-pointer" />
                </motion.a>
            </div>
        </div>
    );
}

export default Contact;
