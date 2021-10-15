import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IUser} from '../../types/IUser';
import {mapProject} from '../../services/map-project';
import {IProject} from '../../types/IProject';
import Header from '../../components/Header';
import ProjectsWrapper from '../../components/ProjectsWrapper';
import ProjectCard from '../../components/ProjectCard';
import style from './style';

const App = () => {
  const [user, setUser] = useState<IUser>();
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    fetch('https://api.github.com/users/asocezar')
      .then(res => res.json())
      .then(res => setUser(res));
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/ASOCezar/repos')
      .then(res => res.json())
      .then(res => mapProject(res))
      .then(res => setProjects(res.slice(0, 4)));
  }, []);

  const renderProjects = (project: IProject) => (
    <ProjectCard project={project} />
  );

  const renderPage = (
    <ScrollView style={style.container}>
      {user && (
        <Header user={user} githubUrl="ASOCezar" linkedinUrl="ASOCezar" />
      )}
      {projects && (
        <ProjectsWrapper projects={projects} renderProjects={renderProjects} />
      )}
    </ScrollView>
  );

  const renderLoading = <Text> Loading... </Text>;

  return (
    <>
      <View style={style.page}>{user ? renderPage : renderLoading}</View>
    </>
  );
};

export default App;
