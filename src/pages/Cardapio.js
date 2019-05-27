import React from 'react';
import styled from 'styled-components';

const Cardapio = () => (
  <ViewContainer>
    <TextT>Cardapio screen</TextT>
  </ViewContainer>
)

const ViewContainer = styled.View`
  flex: 1;
  background-color: #FFF;
  justify-content: center;
  color: #344;
  align-items: center;
`;

const TextT = styled.Text`
  font-size: 36;
`;

export default Cardapio;