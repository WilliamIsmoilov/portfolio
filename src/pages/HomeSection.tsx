import HomeCard from '../components/cards/home-card';
import BgArrow from '../components/shared/bg-arrow';
import { int } from '../constants';

const HomePage = () => {
  return (
    <section id="home">
      <div className="max-w-6xl mx-auto ">
        <div className="relative min-h-[60vh] flex items-center justify-center max-md:px-2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl  font-creteround text-center max-w-2xl ">
            Coding is easy when you know how!
          </h1>
          <BgArrow />
        </div>

        <div className="flex flex-col space-y-24 max-md:px-6">
          {int.map((item, index) => (
            <HomeCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
