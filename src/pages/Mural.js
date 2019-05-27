import React from 'react';
import styled from 'styled-components';

const Mural = () => (
  <ViewContainer>
    <TextT>Mural screen</TextT>
  </ViewContainer>
)

const ViewContainer = styled.View`
  flex: 1;
  background-color: #FFF;
  color: darkblue;
  justify-content: center;
  align-items: center;
`;

const TextT = styled.Text`
  font-size: 36;
`;

export default Mural;