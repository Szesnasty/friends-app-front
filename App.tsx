import React from "react";
import { Landing } from "./components/auth/landing";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { firebaseConfig } from "./firebase-config";
type RootStackParamList = {
  Landing: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  if (firebase.app.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        options={{ headerShown: false }}
      >
        <Landing navigation={Stack.navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
