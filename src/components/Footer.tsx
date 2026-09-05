import Image from "next/image";
import {
    FaInstagram,
    FaDiscord,
    FaLinkedin,
    FaGithub,
    FaRegEnvelope,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="relative flex items-center justify-center text-center">
      <Link
        href="https://www.instagram.com/instagram_user/"
        target="_blank"
        className="absolute bottom-[50%] left-[0%] z-40 hover:scale-105 hover:opacity-95"
      >
        <FaInstagram className="text-black text-2xl drop-shadow-xl md:text-4xl 2xl:text-6xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/hackathon_name/"
        target="_blank"
        className="absolute bottom-[50%] left-[3%] z-40 hover:scale-105 hover:opacity-95"
      >
        <FaLinkedin className="text-2xl drop-shadow-xl md:text-4xl 2xl:text-6xl" />
      </Link>
      <Link
        href="mailto:hackathon_name@gmail.com"
        target="_blank"
        className="absolute bottom-[50%] left-[6%] z-40 hover:scale-105 hover:opacity-95"
      >
        <FaRegEnvelope className="text-2xl md:text-4xl 2xl:text-6xl" />
      </Link>
      <p className="md:text-md absolute bottom-1 z-50 text-xs md:bottom-2 md:right-2 2xl:text-xl">{`© ${new Date().getFullYear()} (Name) Hack • Made with 💗 and (theme) by ACM Hacks`}</p>
    </div>
  );
};

export default Footer;