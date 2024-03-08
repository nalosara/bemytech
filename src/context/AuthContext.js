import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [error, setError] = useState("");

  const register = async (email, password, Confpassword, navigation) => {
    try {
      const { data } = await client.post(
        "/api/sign-up",
        {
          email,
          password,
          confirmPassword: Confpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(data);

      if (data.success) {
        let userInfo = data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        navigation.replace("MainScreen");
      } else {
        alert(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(email, password);
      console.log(error.message);
      console.log(`register error ${error}`);
      setIsLoading(false);
      if (error.response) {
        // The request was made, but the server responded with a status code
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received");
      } else {
        // Something went wrong during the request setup
        console.error("Request error:", error.message);
      }
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const { data } = await client.post(
        "/api/log-in",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (data.success) {
        let userInfo = data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      } else {
        setError(data.message);
        setIsLoading(false);
      }

      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log("im here");
      console.log(error);
    }
  };

  const logout = async() => {
    console.log("tu sam");
    setIsLoading(true);
    await AsyncStorage.removeItem(userInfo.token);
    setUserInfo({});
    setIsLoading(false);
    setError(null);
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        error,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
