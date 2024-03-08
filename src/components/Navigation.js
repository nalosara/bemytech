import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconButton from "../components/IconButton";
import LoginScreen from "../screens/LogInScreen";
import SplashScreen from "../screens/SplashScreen";
import RegisterScreen from "../screens/SignUpScreen";
import MainScreen from "../screens/MainScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LogOutScreen from "../screens/LogOutScreen";
import { AuthContext } from "../context/AuthContext.js";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo, splashLoading } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          //staviti kasnije u false i premijestiti dugme dole
          headerStyle: { borderBottomWIdth: 0, backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: { color: "#000" },
        }}
      >
        {splashLoading ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : userInfo.token ? (
          <>
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={({ navigation }) => ({
                title: "",
                headerRight: ({ tintColor }) => (
                  <IconButton
                    icon="add"
                    size={24}
                    color={tintColor}
                    onPress={() => navigation.navigate("AddPlace")}
                  />
                ),
                headerLeft: ({ tintColor }) => (
                  <IconButton
                    icon="settings"
                    size={24}
                    color={tintColor}
                    onPress={() => navigation.navigate("SettingsScreen")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={{
                title: "",
              }}
            />
            <Stack.Screen
              name="LogOutScreen"
              component={LogOutScreen}
              options={{
                title: "",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogInScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
