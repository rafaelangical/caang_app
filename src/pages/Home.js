import React, { useEffect, useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { ActivityIndicator, View, Image } from "react-native";
import OneSignal from "react-native-onesignal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    OneSignal.init("cc214065-1bfb-4316-8e4c-7651b4c6918c");
    OneSignal.addEventListener("received", received);
    OneSignal.addEventListener("opened", openedPush);
    OneSignal.enableSound(true);
    OneSignal.addEventListener("ids", idsPush);
    OneSignal.inFocusDisplaying(2);

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      loading === true ? setLoading(false) : true;
    }, 2000); // AFTER 1000ms
  }, [loading]);

  const received = push => {
    console.log(`Received Push: ${push}`);
  };
  const openedPush = push => {
    console.log(`Òpened Push: ${push}`);
  };
  const idsPush = push => {
    console.log(`IDS push: ${push}`);
  };

  return (
    <Fragment>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#71c837" />
        </View>
      ) : (
        <ViewContainer>
          <Image source={require("../../assets/logo.png")} />
          <TextT>Bem vindo(a)</TextT>
        </ViewContainer>
      )}
    </Fragment>
  );
}
const ViewContainer = styled.View`
  flex: 1;
  background-color: #fff;
  color: red;
  justify-content: center;
  align-items: center;
`;

const TextT = styled.Text`
  font-size: 36;
  margin: 0 auto;
`;
