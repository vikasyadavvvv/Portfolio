import React, { useState } from 'react';
import { CONTACT } from '../constants';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';

const Contact = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const iconVariants = {
        initial: { y: 0 },
        animate: {
            y: [10, -10],
            transition: {
                duration: 2.5,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Name: ${name}\nFeedback: ${feedback}`;
        window.open(`mailto:${CONTACT.email}?subject=Feedback&body=${encodeURIComponent(message)}`);
        setSubmitted(true);
    };

    return (
        <div className="border-b border-neutral-900 pb-20 flex flex-col items-center">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1.5 }} className="my-10 text-center text-4xl font-bold">
                Contact
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center lg:justify-between">
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
            <form onSubmit={handleSubmit} className="mt-10 px-4 lg:w-1/3">
                <div className="flex flex-col mb-4 ">
                    <label htmlFor="name" className="text-lg mb-2 font-bold">Name</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Name" className="border-2 border-neutral-800 rounded-md px-3 py-2 focus:outline-none focus:border-white text-black  bg-purple-500" required />
                </div>
                <div className="flex flex-col mb-4 font-bold">
                    <label htmlFor="feedback" className="text-lg mb-2">Feedback</label>
                    <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} placeholder='Your Feedback...' className="border-2 border-neutral-800 rounded-md px-3 py-2 focus:outline-none focus:border-white text-black  bg-purple-500" rows="5" required></textarea>
                </div>
                <button type="submit" className={`bg-white text-black px-4 py-2 rounded-md hover:font-bold duration-300\ ${submitted ? 'cursor-not-allowed opacity-50' : ''}`} disabled={submitted}>
                    {submitted ? 'Submitted' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default Contact;
