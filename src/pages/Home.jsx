import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import ProfileImage from "../assets/Profile_Image.jpg";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import TextType from "../components/TextType/TextType";

const socialLinks = [
  {
    href: "https://github.com/itsjunsheng",
    icon: <Github className="h-5 w-5" />,
  },
  {
    href: "https://www.linkedin.com/in/tohjunsheng/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    href: "mailto:itsjunsheng@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    href: "https://t.me/itsjunsheng",
    icon: <Send className="h-5 w-5" />,
  },
];

export const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative z-10 p-5 pt-25 lg:p-15 lg:pt-15 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
    >
      {/* Left section */}
      <div className="text-center text-white lg:text-left lg:pl-10">
        <motion.h1
          className="text-4xl lg:text-5xl  font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Hello! <br />
          I'm <span className="text-blue-600">Jun Sheng</span>
        </motion.h1>

        <TextType
          className="text-lg text-gray-300 min-h-[120px] mb-6"
          text={[
            `I do Web Applications, Data Analytics, AI & Machine Learning. I also teach Elementary Math for Primary & Secondary School Students. Do contact me for collaboration or hiring! :)`,
          ]}
          typingSpeed={10}
          pauseDuration={1500}
          showCursor={false} 
          cursorCharacter="_"
        />

        {/* Social Icons */}
        <div className="flex gap-5 justify-center lg:justify-start mb-6">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 1,
                ease: "easeOut",
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Button */}
        <motion.button
          type="button"
          onClick={() => scrollTo("work")}
          className="px-5 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          View My Work
        </motion.button>
      </div>

      {/* Right section */}
      <motion.div
        className="flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      >
        <ProfileCard
          className="scale-[0.70]"
          name="Toh Jun Sheng"
          title=" "
          handle="itsjunsheng"
          status="Online"
          contactText="Contact Me"
          avatarUrl={ProfileImage}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() =>
            (window.location.href = "mailto:itsjunsheng@gmail.com")
          }
        />
      </motion.div>
    </section>
  );
};
