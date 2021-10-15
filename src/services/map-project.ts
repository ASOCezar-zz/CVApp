import {IProject} from '../types/IProject';

export const mapProject = (projects: any[]): IProject[] => {
  let projectsMapped: IProject[] = [];
  projects.map(project => {
    projectsMapped.push({
      id: project.id,
      name: project.name,
      full_name: project.full_name,
    });
  });

  return projectsMapped;
};
