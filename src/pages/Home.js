import React from 'react';
import styled from 'styled-components';
import { Image  } from 'react-native';

const Home = () => (
  <ViewContainer>
    <Image
      source={require('../assets/images/logo.png')}
    />
    <TextT>Bem vindo(a)</TextT>
  </ViewContainer>
)

const ViewContainer = styled.View`
  flex: 1;
  background-color: #FFF;
  color: red;
  justify-content: center;
  align-items: center;
`;

const TextT = styled.Text`
  font-size: 36;
  margin: 0 auto;
`;

export default Home;