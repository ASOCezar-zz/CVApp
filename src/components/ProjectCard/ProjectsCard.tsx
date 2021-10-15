import React from 'react';
import {Linking, Text, View} from 'react-native';
import {IProject} from '../../types/IProject';

import style from './style';

type ProjectCardProps = {
  project: IProject;
};

export const ProjectCardComponent = ({project}: ProjectCardProps) => (
  <View key={project.id} style={style.card}>
    <View>
      <Text
        style={style.cardTitle}
        onPress={() =>
          Linking.openURL(`https://github.com/${project.full_name}`)
        }>
        {project.name}
      </Text>
    </View>
  </View>
);
