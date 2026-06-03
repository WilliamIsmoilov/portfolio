import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Separator } from '../ui/separator';
import { navlinks } from '../../constants';
import { cn } from '../../lib/utils';

const Mobile = () => {
  const { pathname } = useLocation();
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button size={'icon'} variant={'ghost'}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-3">
        <Link to={'/'} className="mt-3 px-3">
          <h1 className="text-4xl font-creteround text-start"> </h1>
        </Link>
        <Separator />

        {/** nav links */}
        <div className="flex flex-col space-y-3 ">
          {navlinks.map((nav) => (
            <a
              key={nav.route}
              href={nav.route}
              className={cn(
                'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
                pathname === nav.route && 'text-blue-500 bg-blue-400/20',
              )}
            >
              <nav.icon className="w-5 h-5" />
              {nav.name}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
