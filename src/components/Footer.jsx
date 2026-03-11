import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#2b0a0a] text-[#f5e6c8] px-6 py-12 text-center">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl text-[#ffd700] mb-3 tracking-widest">
          ॥ जय माँ दुर्गा ॥
        </h2>

        {/* Description */}
        <p className="text-base mb-4">
          Dedicated to the Ten Divine Forms of Goddess Durga (Mahavidyas)
        </p>

        {/* Sanskrit mantra */}
        <p className="text-[15px] italic leading-relaxed text-[#f3d9a3] mb-6">
          या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।<br />
          नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥
        </p>

        {/* Divider */}
        <hr className="border-none h-px bg-[#a67c00] w-3/5 mb-6" />

        {/* Developer Info */}
        <div className="mb-4">
          <p className="text-sm text-[#d4af37] mb-2">Developed by</p>
          <p className="text-lg font-semibold text-[#f5e6c8] mb-3">Abhisek Praharaj</p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a href="https://github.com/praharaj03" target="_blank" rel="noopener noreferrer" 
               className="text-[#f5e6c8] hover:text-[#d4af37] transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="mailto:abhisekpraharaj246@gmail.com" 
               className="text-[#f5e6c8] hover:text-[#d4af37] transition-colors duration-300">
              <FaEnvelope size={24} />
            </a>
            <a href="https://instagram.com/ryomen7214" target="_blank" rel="noopener noreferrer" 
               className="text-[#f5e6c8] hover:text-[#d4af37] transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/praharaj25" target="_blank" rel="noopener noreferrer" 
               className="text-[#f5e6c8] hover:text-[#d4af37] transition-colors duration-300">
              <FaXTwitter size={24} />
            </a>
            <a href="https://linkedin.com/in/praharajabhisek" target="_blank" rel="noopener noreferrer" 
               className="text-[#f5e6c8] hover:text-[#d4af37] transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#e0cfa9]">
          © {new Date().getFullYear()} Durga Mahavidya | Created with devotion
        </p>
      </div>
    </footer>
  );
}
