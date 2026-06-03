import {
  Contact2,
  Database,
  FileCode2,
  Home,
  Laptop2,
  MonitorCog,
} from 'lucide-react';
import { IoOptionsOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiRedux,
  SiPostgresql,
} from 'react-icons/si';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#about' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Contact', path: '/#contact' },
];

export const int = [
  {
    name: 'William Ismoilov',
    desc: 'I’m a Full-Stack Developer passionate about building scalable, high-performance web applications. Specializing in NestJS, Next.js, React, Express.js, MongoDB, and PostgreSQL, I create secure, maintainable, and user-focused solutions from backend architecture to modern frontend experiences.',
  },
];

export const brandIcon = [
  { icon: SiNestjs },
  { icon: SiNodedotjs },
  { icon: SiExpress },
  { icon: SiReact },
  { icon: SiNextdotjs },
  { icon: SiMongodb },
];

export const navlinks = [
  { name: 'Home', route: '/', icon: Home },
  { name: 'About', route: '/#about', icon: FcAbout },
  { name: 'Projects', route: '/#projects', icon: FileCode2 },
  { name: 'Contact', route: '/#contact', icon: Contact2 },
];

export const aboutData = [
  {
    title: 'Backend Development',
    desc: 'Building backend web applications using Nest.js, Node, Express.js, and modern technologies.',
    icon: MonitorCog,
    icons: [SiNestjs, SiNodedotjs, SiExpress],
  },
  {
    title: 'Frontend Development',
    desc: 'React, Next.js, REST API Integration, and UI/UX Design.',
    icon: Laptop2,
    icons: [SiNextdotjs, SiReact, SiRedux],
  },
  {
    title: 'Database',
    desc: 'MongoDB, PostgreSQL, and database architecture, including optimization and security.',
    icon: Database,
    icons: [SiMongodb, SiPostgresql, IoOptionsOutline],
  },
];

export const projects = [
  {
    name: 'Italiano',
    desc: 'Italiano is a full-stack web application with a React/Next.js frontend and an Express.js + TypeScript backend, focused on clean UI and scalable API structure. ',
    github: 'https://github.com/WilliamIsmoilov/italiano-backend',
    link: 'https://api.italiono.ismoilovsardor.com',
  },
  {
    name: 'Nestar',
    desc: 'NESTAR is a full-stack e-commerce system built with NestJS, GraphQL, and Express, with a modern frontend and scalable backend architecture. ',

    github: '',
    link: 'https://houses.ismoilovsardor.com',
  },
  {
    name: 'Italiano Frontend',
    desc: 'Italiano is a modern frontend web application built with React and Next.js, focused on clean UI and smooth user experience.',
    github: 'https://github.com/WilliamIsmoilov/italiano-react',
    link: 'https://italiano.ismoilovsardor.com',
  },
  {
    name: 'Portfolio',
    desc: 'Modern personal portfolio built with React and Tailwind CSS, featuring a responsive UI, smooth navigation, and dynamic project showcase. ',

    github: 'https://github.com/WilliamIsmoilov/portfolio',
    link: 'https://ismoilovsardor.com',
  },
];
