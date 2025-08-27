import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900 text-white p-6 sm:px-6 lg:px-8 border-t border-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-sm">

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:itsjunsheng@gmail.com"
            className="hover:text-gray-400 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Email + Location side by side */}
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