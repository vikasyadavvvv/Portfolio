import project1 from "../assets/projects/project-1.png"
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `Passionate about crafting dynamic and responsive web applications, I am a full stack developer proficient in React, Tailwind CSS, Node.js, Express.js, and MongoDB. Committed to delivering unparalleled quality, I bring a fresh perspective and a hunger for knowledge to every project. Ready to contribute my expertise and unleash creativity in innovative and collaborative environments.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Proficient in a variety of technologies, including React, Node.js, MySQL, and MongoDB, I am eager to embark on my journey in the field of web development.My fascination with how things work led me to pursue web development, and I am excited to turn that passion into a fulfilling career. While I may be a fresher in the industry, I bring a deep curiosity and a strong willingness to learn and adapt to new challenges.I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [



  {
    title: "Real Time Chat App",
    image: project2,
    description:
      `
I'm thrilled to have built a feature-rich application leveraging the power of modern technologies:
🌟 Tech Stack: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + DaisyUI
🎃 Authentication & Authorization: Secure implementation using JWT.
👾 Real-Time Messaging: Seamless communication with Socket.io.
🚀 Online User Status: Dynamic user presence updates with Socket.io and React Context.
👌 Global State Management: Efficient state handling using Zustand.
🐞 Robust Error Handling: Comprehensive error management on both server and client sides.
⭐ Professional Deployment: Deployed like a pro at zero cost!
⏳ And much more!
`
,
    technologies: ["MERN", "MongoDB", "React","Node.js","Socket.io","TailwindCSS","DaisyUI"],
    link: [
      { url:"https://chatapp-dhsa.onrender.com/"}
    ]

    

  },

  {
    title: "Music App like Spotify",
    image: project1,
    description:
      " A sleek and immersive music app inspired by Spotify! 💻 Leveraging HTML, CSS, Bootstrap, and JavaScript, I've crafted an engaging user experience complete with seamless music playback, intuitive navigation, and customizable volume controls. 🚀 Bootstrap Icons were a game-changer, streamlining design and enhancing aesthetics. .",
    technologies: ["HTML", "CSS", "Javascript",],
    link: [
      { url:"https://listenmusicc.netlify.app"}
    ]
  
  },



];

export const CONTACT = {
  phoneNo: "+919082539010 ",
  email: "vy532555@gmail.com",
};
