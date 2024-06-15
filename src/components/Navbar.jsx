import VikasLogo from "../VikasLogo";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {  FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
      <div className="flex-shrink-0">
        <VikasLogo />
      </div>
      <div className="ml-auto flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/vikas-yadav-1916002a6" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vikasyadavvvv" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
          <FaGithub />
        </a>
        <a href="https://wa.me/9082539010" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
          <FaWhatsapp />
        </a>
        <a href="mailto:your-vy532555@gmail.com" className="hover:cursor-pointer">
          <SiGmail />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
