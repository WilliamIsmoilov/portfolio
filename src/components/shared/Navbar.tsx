import { Link } from 'react-router-dom';
import { navLinks } from '../../constants';
import { ModeToggle } from './Mode-toggle';
import Mobile from './Mobile';

const Navbar = () => {
  return (
    <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background max-md:px-6 max-md:w-full ">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between ">
        <Link to={'/'}>
          <h1 className="text-xl  md:text-2xl  font-bold ">
            {' '}
            FullStack Developer
          </h1>
        </Link>

        <div className=" items-center gap-3 hidden md:flex">
          {navLinks.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                className="font-medium hover:underline"
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div className=" flex items-center gap-1">
          <ModeToggle />
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
