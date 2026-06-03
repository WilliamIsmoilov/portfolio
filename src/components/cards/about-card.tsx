import type { IAboutCard } from '../../types';

const AboutCard = (about: IAboutCard) => {
  const Icon = about.icon;
  return (
    <div className="flex flex-col border rounded-md glass w-full">
      <div className="p-4 flex  gap-2">
        <Icon />
        <h2 className="neon-shadow font-medium">{about.title}</h2>
      </div>
      <p className="p-2">{about.desc}</p>

      <div className="flex gap-8 p-4">
        {about.icons.map((Icon, i) => (
          <Icon key={i} className="w-5 h-5" />
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
