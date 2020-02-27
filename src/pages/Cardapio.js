import React, { useEffect, useState, useRef, Fragment } from "react";
import { ActivityIndicator, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Cardapio() {
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
        <WebView
          source={{
            uri: "http://sari.angical.ifpi.edu.br:8080/sariApp/login.jsf"
          }}
          style={{ marginTop: 20, paddingHorizontal: 50 }}
        />
      )}
    </Fragment>
  );
}
