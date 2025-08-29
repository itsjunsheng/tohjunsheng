import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

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

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900 text-white p-6 sm:px-6 lg:px-8 border-t border-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-sm">

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-gray-400 transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Email + Location */}
        <div className="flex gap-6 text-gray-400">
          <p className="flex items-center gap-2">
            <Mail size={16} /> itsjunsheng@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} /> Singapore, West
          </p>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © 2025 Jun Sheng. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
