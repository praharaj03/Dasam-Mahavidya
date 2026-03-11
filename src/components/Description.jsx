import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaBook, FaMapMarkerAlt, FaBolt, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdTempleHindu } from 'react-icons/md';
import Footer from './Footer';
import godDescription from '../data/godDescription';

const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goddess = godDescription[id];
  const [activeTab, setActiveTab] = useState('description');

  if (!goddess) {
    return (
      <div className="min-h-screen bg-[#2b0a0a] text-[#f5e6c8] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Goddess not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#5a2a2a] px-6 py-2 rounded hover:bg-[#6a3a3a] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'description', label: 'Description', icon: <FaBook /> },
    { id: 'origin', label: 'Origin', icon: <FaMapMarkerAlt /> },
    { id: 'powers', label: 'Powers', icon: <FaBolt /> },
    { id: 'temples', label: 'Temples', icon: <MdTempleHindu /> }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'description':
        return (
          <div className="prose prose-lg text-[#f5e6c8] max-w-none">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">{goddess.description}</p>
          </div>
        );
      case 'origin':
        return (
          <div className="text-center">
            <div className="inline-block bg-[#4a2020] rounded-full p-6 sm:p-8 mb-4 sm:mb-6">
              <FaMapMarkerAlt className="text-4xl sm:text-5xl md:text-6xl text-[#d4af37]" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#d4af37]">Sacred Origin</h3>
            <p className="text-base sm:text-lg md:text-xl">{goddess.origin}</p>
          </div>
        );
      case 'powers':
        return (
          <div className="text-center">
            <div className="inline-block bg-[#4a2020] rounded-full p-6 sm:p-8 mb-4 sm:mb-6">
              <FaBolt className="text-4xl sm:text-5xl md:text-6xl text-[#d4af37]" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#d4af37]">Divine Powers</h3>
            <p className="text-base sm:text-lg md:text-xl">{goddess.work}</p>
          </div>
        );
      case 'temples':
        return (
          <div className="text-center">
            <div className="inline-block bg-[#4a2020] rounded-full p-6 sm:p-8 mb-4 sm:mb-6">
              <MdTempleHindu className="text-4xl sm:text-5xl md:text-6xl text-[#d4af37]" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#d4af37]">Sacred Temples</h3>
            <p className="text-base sm:text-lg md:text-xl">{goddess.temple}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#2b0a0a] text-[#f5e6c8]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d1a1a] to-[#2b0a0a] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-[#5a2a2a] px-3 py-2 rounded-lg hover:bg-[#6a3a3a] transition-all duration-300 hover:scale-105 text-sm"
          >
            <FaArrowLeft /> Back
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d4af37] text-center">{goddess.name}</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                const prevId = parseInt(id) - 1;
                if (prevId >= 1) navigate(`/goddess/${prevId}`);
              }}
              disabled={parseInt(id) <= 1}
              className="flex items-center gap-1 bg-[#5a2a2a] px-3 py-2 rounded-lg hover:bg-[#6a3a3a] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
            >
              <FaChevronLeft /> <span className="hidden sm:inline">Prev</span>
            </button>
            <button 
              onClick={() => {
                const nextId = parseInt(id) + 1;
                if (nextId <= 10) navigate(`/goddess/${nextId}`);
              }}
              disabled={parseInt(id) >= 10}
              className="flex items-center gap-1 bg-[#5a2a2a] px-3 py-2 rounded-lg hover:bg-[#6a3a3a] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
            >
              <span className="hidden sm:inline">Next</span> <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#5a2a2a] max-w-sm sm:max-w-md mx-auto">
              <img 
                src={goddess.img} 
                alt={goddess.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#d4af37] text-[#2b0a0a] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg">
              {goddess.id}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'bg-[#d4af37] text-[#2b0a0a] shadow-lg scale-105'
                      : 'bg-[#4a2020] text-[#f5e6c8] hover:bg-[#5a2a2a] hover:scale-105'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-[#3d1a1a] rounded-2xl p-4 sm:p-6 md:p-8 min-h-[250px] sm:min-h-[300px] flex items-center justify-center border border-[#5a2a2a] shadow-xl">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Description;