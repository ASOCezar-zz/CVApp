import React from 'react';
import {Text, View} from 'react-native';
import {IProject} from '../../types/IProject';

import style from './style';

type ProjectsWrapperProps = {
  projects: IProject[];
  renderProjects: (project: IProject) => JSX.Element;
};

export const ProjectsWrapperComponent = ({
  projects,
  renderProjects,
}: ProjectsWrapperProps) => (
  <View style={style.cardsWrapper}>
    <Text style={style.sectionTitle}>Projetos</Text>
    {projects && projects.map(renderProjects)}
  </View>
);
