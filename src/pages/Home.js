import React, { Component } from 'react';
import styled from 'styled-components';
import { Image  } from 'react-native';
import OneSignal from 'react-native-onesignal';
class Home extends Component {

  componentDidMount() {
    OneSignal.init("386785c0-3234-44e5-bb75-10ab890acbf8");
    OneSignal.addEventListener('received', this.receivedPush);
    OneSignal.addEventListener('opened', this.openedPush);
    OneSignal.addEventListener('ids', this.idsPush);
  }

  received(push) {
    console.log(`Received Push: ${push}`);
  }
  openedPush(push) {
    console.log(`Òpened Push: ${push}`);
  }
  idsPush(push) {
    console.log(`IDS push: ${push}`);
  }

  render() {

    return(
      <ViewContainer>
        <Image
          source={require('../assets/images/logo.png')}
        />
        <TextT>Bem vindo(a)</TextT>
      </ViewContainer>
    )
  }
}
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