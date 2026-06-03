import React from 'react';
import { aboutData } from '../constants';
import AboutCard from '../components/cards/about-card';

const AboutPage = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto max-md:p-2">
        <div className="relative min-h-[30vh] flex items-center justify-end flex-col">
          <h2 className="text-center text-4xl section-title font-creteround">
            <span>About</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24  mt-24 max-md:px-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] ">
              <span className="text-2xl neon-shadow font-worksans">
                Backend
              </span>{' '}
              - Experienced in building scalable and secure backend systems
              using Node.js, NestJS, and Express.js. Skilled in designing
              RESTful APIs and GraphQL services following clean architecture,
              SOLID principles, and modular structure. Strong understanding of
              authentication systems, JWT, role-based access control (RBAC), and
              API security. Focused on building high-performance,
              production-ready applications with maintainable code structure.
            </h2>

            <h2 className="text-[17px] ">
              <span className="text-2xl neon-shadow font-worksans">
                Frontend -{' '}
              </span>
              Capable of developing modern and responsive user interfaces using
              React.js and Next.js. Experienced in building reusable components,
              state management, and API integration with backend services.
              Focused on creating clean UI/UX experiences with performance
              optimization and responsive design principles.
            </h2>

            <h2 className="text-[17px] ">
              <span className="text-2xl neon-shadow font-worksans">
                Database-
              </span>{' '}
              Experienced in working with MongoDB and PostgreSQL, including
              schema design, indexing, and query optimization. Skilled in
              handling large datasets using aggregation pipelines and efficient
              data modeling techniques. Focused on building scalable and
              optimized database structures for high-performance backend
              systems.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            {aboutData.map((item, index) => (
              <AboutCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
