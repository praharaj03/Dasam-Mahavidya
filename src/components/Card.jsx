import { useNavigate } from 'react-router-dom';

const Card = ({ goddess }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/goddess/${goddess.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-[#3d1a1a] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#4a2020] border border-[#5a2a2a]"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={goddess.img} 
          alt={goddess.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-2 sm:p-3 md:p-4">
        <h3 className="text-sm sm:text-base md:text-xl font-semibold text-[#f5e6c8] text-center">
          {goddess.name}
        </h3>
      </div>
    </div>
  );
};

export default Card;