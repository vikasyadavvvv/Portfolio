import project1a from "../assets/projects/c1.png";
import project1b from "../assets/projects/c2.png";
import project1c from "../assets/projects/c3.png";
import project1d from "../assets/projects/c4.png"

import project2a from "../assets/projects/ch1.png"
import project2b from "../assets/projects/ch2.png"
import project2c from "../assets/projects/ch3.png"
import project2d from "../assets/projects/ch4.png"



export const HERO_CONTENT = `Passionate about crafting dynamic and responsive web applications, I am a full stack developer proficient in React, Tailwind CSS, Node.js, Express.js, and MongoDB. Committed to delivering unparalleled quality, I bring a fresh perspective and a hunger for knowledge to every project. Ready to contribute my expertise and unleash creativity in innovative and collaborative environments.`;

export const ABOUT_TEXT = `"I'm a dedicated and versatile full stack developer passionate about creating efficient and user-friendly web applications. Proficient in React, Node.js, MySQL, and MongoDB, I'm eager to embark on my journey in web development. My fascination with how things work led me to pursue web development, and I'm excited to turn that passion into a fulfilling career. As a fresher, I bring a deep curiosity and a strong willingness to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies."

`;

export const PROJECTS = [
  {
    title: "Real Time Chat App",
    images: [project2b,project2c,project2a,project2d], // Updated to include multiple images
    description: `
Developed a comprehensive and feature-rich web application utilizing modern technologies. The application includes:

Tech Stack: MERN (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, and DaisyUI.
Authentication & Authorization: Implemented secure authentication and authorization using JWT.
Real-Time Messaging: Enabled seamless communication with Socket.io.
Online User Status: Implemented dynamic user presence updates with Socket.io and React Context.
Global State Management: Utilized Zustand for efficient state handling.
Robust Error Handling: Implemented comprehensive error management on both server and client sides.
Professional Deployment: Successfully deployed the application at zero cost
    `,
    technologies: ["MERN", "MongoDB", "React", "Node.js", "Socket.io", "TailwindCSS", "DaisyUI"],
    links: [
      { url: "https://chatapp-dhsa.onrender.com/",github:"https://github.com/vikasyadavvvv/Mern-ChatApp.git" }
    ]
  },
  {
    title: "Crypto Curency Tracker",
    images: [project1a, project1b ,project1c,project1d], // Updated to include multiple images
    description: `Developed a comprehensive cryptocurrency tracker application using React, CSS, and the CoinGecko API. Cryptotracker provides updated information on cryptocurrency prices, market trends, and market capitalization.Access to cryptocurrency prices, market capitalization, and 24-hour changes.Comprehensive coverage of both leading and emerging cryptocurrencies.Clean and intuitive design for easy navigation.
Responsiv interface ensuring a seamless user experience across all devices.

    `,
    technologies: ["React", "CSS", "CoinGeko API"],
    links: [
      { url: "https://cryppto-tracker.netlify.app/" , github:"https://github.com/vikasyadavvvv/Crypto-Tracker.git" }
    ]
  },
];

export const CONTACT = {
  phoneNo: "+919082539010",
  email: "vy532555@gmail.com",
};
