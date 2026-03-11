import Card from './Card';
import Footer from './Footer';
import goddessData from '../data/goddessData';

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-[#2b0a0a] text-[#f5e6c8] py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Welcome to Durga Mahavidya</h1>
            <p className="text-sm sm:text-base md:text-lg px-2">
              Explore the divine forms of Goddess Durga and their significance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {goddessData.map((goddess) => (
              <Card key={goddess.id} goddess={goddess} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;