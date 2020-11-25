import React from "react";

import { Provider } from "react-redux";
import store from "./src/store.js";
import Routes from "./src/components/Routes";

import HomeScreen from "./src/screens/Home.screen";
import AddPostScreen from "./src/screens/AddPost.screen";
import ProfileScreen from "./src/screens/Profile.screen";
import EditScreen from "./src/screens/Edit.screen";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Add Post" component={AddPostScreen} />
          <Drawer.Screen name="Edit" component={EditScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
