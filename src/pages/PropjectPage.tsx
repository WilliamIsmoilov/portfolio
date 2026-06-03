import { projects } from '../constants';
import { Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';

const PropjectPage = () => {
  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto max-md:px-2">
        <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
          <h2 className="text-center text-4xl section-title font-creteround">
            <span>Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-12  mt-12 max-md:px-6">
          {projects.map((item, index) => {
            return (
              <div className="flex flex-col gap-4  py-2 project ">
                <div className="flex justify-between px-4 py-2">
                  <h2 className="font-worksans">{item.name}</h2>
                  <Link to={item.link}>
                    <Button variant={'outline'} size={'icon'}>
                      <Link2 />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4">
                    <h2 className="text-2xl font-medium font-creteround">
                      {item.name}
                    </h2>
                    <p className="mt-2 font-worksans">{item.desc}</p>
                  </div>
                </div>

                <div className="flex flex-col p-4 gap-4">
                  <h2 className="font-worksans neon-shadow  px-4 py-2">
                    Links
                  </h2>
                  <div className="border flex items-center py-2 gap-2 p-2 rounded-md justify-between">
                    <h2>{item.link}</h2>

                    <Link to={item.link}>
                      <FaExternalLinkAlt />
                    </Link>
                  </div>
                  <div className="border flex items-center py-2 gap-2 p-2 rounded-md justify-between">
                    <p className="line-clamp-2">{item.github}</p>
                    <Link to={item.github}>
                      <FaSquareGithub />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropjectPage;
