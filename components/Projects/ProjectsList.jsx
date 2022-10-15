import React, { useState } from 'react';
import Project from './Project';
import { getProjects } from './projects';
import { Grid } from '@nextui-org/react';

const ProjectsList = (props) => {
  const [projects, setProjects] = useState(getProjects());
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>PROJETS</h2>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          margin: '15px',
          alignItems: 'center',
        }}
      >
        {projects.map((project) => (
          <Project
            key={Math.floor(Math.random() * 99999)}
            name={project.name}
            languages={project.languages}
            image={project.image}
            sourceUrl={project.sourceUrl}
            demoUrl={project.demoUrl}
            onlineUrl={project.onlineUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
