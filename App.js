const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Basepage from "./screens/Basepage";
import Button1 from "./components/Button1";
import StateTypingErrorFalseIco from "./components/StateTypingErrorFalseIco";
import StateDefaultErrorFalseIc from "./components/StateDefaultErrorFalseIc";
import Property1DefaultState from "./components/Property1DefaultState";
import PickCommunity from "./screens/PickCommunity";
import Homepage from "./screens/Homepage";
import UserProfile from "./screens/UserProfile";
import Older from "./screens/Older";
import PatientTab from "./screens/PatientTab";
import Hospital1 from "./screens/Hospital1";
import Hospital from "./screens/Hospital";
import SelectTime from "./screens/SelectTime";
import PersonalInfo2 from "./screens/PersonalInfo2";
import PersonalInfo1 from "./screens/PersonalInfo1";
import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import WaitScreen from "./screens/WaitScreen";
import Chosen from "./components/Chosen";
import Search from "./components/Search";
import PersonalInfo from "./screens/PersonalInfo";
import HamburgerMenu from "./components/HamburgerMenu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "AbhayaLibre-Regular": require("./assets/fonts/AbhayaLibre-Regular.ttf"),
    "AbhayaLibre-Bold": require("./assets/fonts/AbhayaLibre-Bold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "PTMono-Regular": require("./assets/fonts/PTMono-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
    "RobotoSlab-Bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-SemiBold": require("./assets/fonts/Mulish-SemiBold.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Mulish-Black": require("./assets/fonts/Mulish-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Basepage"
              component={Basepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PickCommunity"
              component={PickCommunity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Older"
              component={Older}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientTab"
              component={PatientTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hospital1"
              component={Hospital1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hospital"
              component={Hospital}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectTime"
              component={SelectTime}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo2"
              component={PersonalInfo2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo1"
              component={PersonalInfo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WaitScreen"
              component={WaitScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chosen"
              component={Chosen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo"
              component={PersonalInfo}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
