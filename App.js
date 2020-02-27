import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Cardapio from "./src/pages/Cardapio";
import Mural from "./src/pages/Mural";
import Home from "./src/pages/Home";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require("./assets/drawer.png")}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Home_StackNavigator = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home page",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#71c837"
      },
      headerTintColor: "#fff"
    })
  }
});

const Cardapio_StackNavigator = createStackNavigator({
  Second: {
    screen: Cardapio,
    navigationOptions: ({ navigation }) => ({
      title: "Refeitório",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#71c837"
      },
      headerTintColor: "#fff"
    })
  }
});

const Mural_StackNavigator = createStackNavigator({
  There: {
    screen: Mural,
    navigationOptions: ({ navigation }) => ({
      title: "Mural Online",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#71c837"
      },
      headerTintColor: "#fff"
    })
  }
});

const DrawerNavigatorExample = createDrawerNavigator({
  Home: {
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: "Home screen"
    }
  },

  Cardapio: {
    screen: Cardapio_StackNavigator,
    navigationOptions: {
      drawerLabel: "Refeitório"
    }
  },

  Mural: {
    screen: Mural_StackNavigator,
    navigationOptions: {
      drawerLabel: "Mural Online"
    }
  }
});

export default createAppContainer(DrawerNavigatorExample);
