import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";
import ProfileImage from "../assets/Profile_Image.jpg";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export const Home = () => {
  const fullText = `
  I do Web Applications, Data Analytics, AI & Machine Learning. 
  I also teach Elementary Math for Primary & Secondary Students. 
  Do contact me for collaboration or hiring! :)
  `;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        const delay = fullText[i] === "." ? 500 : 20;
        i++;
        setTimeout(type, delay);
      }
    };
    type();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative z-10 p-15 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
    >
      {/* Left section: Text */}
      <div className="text-center lg:text-left lg:pl-10">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hello! <br />
          I'm <span className="text-blue-600">Jun Sheng</span>
        </motion.h1>

        <p className="text-lg text-gray-300 mb-7 mx-auto">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        <motion.div
          className="flex gap-5 justify-center lg:justify-start mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {[
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
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-black transition"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          type="button"
          onClick={() => scrollTo("projects")}
          className="px-5 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          View My Work
        </motion.button>
      </div>

      {/* Right section: ProfileCard flush right on lg */}
      <motion.div
        className="flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
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
