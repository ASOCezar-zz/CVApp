import React from 'react';
import {Image, Text, View} from 'react-native';
import {IUser} from '../../types/IUser';
import SocialsWrapper from '../SocialsWrapper';
import style from './style';

type HeaderProps = {
  user: IUser;
  githubUrl: string;
  linkedinUrl: string;
};

export const HeaderComponent = ({
  user,
  githubUrl,
  linkedinUrl,
}: HeaderProps) => (
  <View style={style.header}>
    <Image source={{uri: `${user.avatar_url}`}} style={style.image} />
    <Text style={style.name}>{user.name}</Text>
    <Text style={style.description}>{user.bio}</Text>
    <SocialsWrapper githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
  </View>
);
