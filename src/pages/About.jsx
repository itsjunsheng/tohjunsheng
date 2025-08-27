import about1 from "../assets/about/about1.jpg";
import about2 from "../assets/about/about2.jpg";
import about3 from "../assets/about/about3.jpg";
import about4 from "../assets/about/about4.jpg";
import about5 from "../assets/about/about5.jpg";
import CircularGallery from "../components/CircularGallery/CircularGallery";

export const About = () => {
  const galleryItems = [
    { image: about1, text: "Photo 1" },
    { image: about2, text: "Photo 2" },
    { image: about3, text: "Photo 3" },
    { image: about4, text: "Photo 4" },
    { image: about5, text: "Photo 5" },
  ];

  return (
    <section id="about" className="relative z-10 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto rounded-2xl border border-gray-800 bg-gray-900/95 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 lg:px-10 py-8">
          
          {/* Left: About Text */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-wide text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-300 text-md leading-relaxed mb-6">
              I'm currently a 3rd year undergraduate pursuing a Bachelor of Computing in Data Science and Artificial Intelligence at Nanyang Technological University (NTU), Singapore. 
              I have a strong passion for Artificial Intelligence (AI) and Web Development, and using AI to solve real-world problems. 
              In my free time, I enjoy building modern websites and web applications. Always excited to explore new opportunities and working on the latest technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Artificial Intelligence",
                "Machine Learning",
                "Data Analytics",
                "Web Development",
                "React",
                "Vercel",
                "Git/GitHub",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Circular Gallery */}
          <div className="relative h-[300px] -mt-6">
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
