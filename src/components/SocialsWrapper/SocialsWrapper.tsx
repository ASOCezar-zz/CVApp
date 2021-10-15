import React from 'react';
import {Linking, View} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';

import style from './style';

type SocialsWrapperProps = {
  githubUrl: string;
  linkedinUrl: string;
};

export const SocialsWrapperComponent = ({
  githubUrl,
  linkedinUrl,
}: SocialsWrapperProps) => (
  <View style={style.socialsWrapper}>
    <Icon
      style={style.icon}
      name="github"
      size={30}
      onPress={() => Linking.openURL(`https://github.com/${githubUrl}/`)}
    />
    <Icon
      style={style.icon}
      name="linkedin"
      size={30}
      onPress={() => Linking.openURL(`https://linkedin.com/in/${linkedinUrl}/`)}
    />
  </View>
);
