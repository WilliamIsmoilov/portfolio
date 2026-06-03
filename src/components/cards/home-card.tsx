import { brandIcon } from '../../constants';
import type { IHomeCard } from '../../types';
import { Button } from '../ui/button';

const HomeCard = (intro: IHomeCard) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col ">
        <h2 className=" text-3xl max-md:text-2xl font-creteround group-hover:text-blue-500 transition-colors">
          {intro.name}
        </h2>
        <p className="mt-2 text-xl">{intro.desc}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center  gap-3">
              {brandIcon.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Button variant={'outline'} size={'icon'}>
                    <Icon />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-secondary rounded-md group space-y-4">
        <img
          src="/code2.jpg"
          alt=""
          loading="eager"
          className="w-162.5 h-83.75  px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover  group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
        />
      </div>
    </div>
  );
};

export default HomeCard;
