import React, { useEffect, useState, useRef, Fragment } from "react";
import { ActivityIndicator, View } from "react-native";
import styled from "styled-components";

function Mural() {
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      loading === true ? setLoading(false) : true;
    }, 2000); // AFTER 1000ms
  }, [loading]);
  return (
    <Fragment>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#71c837" />
        </View>
      ) : (
        <ViewContainer>
          <TextT>Em breve...</TextT>
        </ViewContainer>
      )}
    </Fragment>
  );
}

const ViewContainer = styled.View`
  flex: 1;
  background-color: #fff;
  color: darkblue;
  justify-content: center;
  align-items: center;
`;

const TextT = styled.Text`
  font-size: 20;
`;

export default Mural;
