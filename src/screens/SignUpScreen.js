import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../context/AuthContext.js";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import LogInScreen from "./LogInScreen.js";

const SignUp = ({ isLogin, navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfPassword] = useState(null);
  const { isLoading, register, error } = useContext(AuthContext);

  return (
    <ScrollView style={styles.BigView}>
      <KeyboardAvoidingView style={styles.BigView} behavior="position">
        <Spinner visible={isLoading} />
        <View style={styles.BigView}>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/images/logomini.png")}
            />
          </View>

          <View style={styles.otherFields}>
            <View style={styles.inputViews}>
              <TextInput
                label="E-mail:"
                placeholder="E-mail:"
                style={styles.otherInputs}
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputViews}>
              <TextInput
                label="Password:"
                placeholder="Password:"
                style={styles.otherInputs}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                value={password}
              />
            </View>
            {!isLogin && (
              <View style={styles.inputViews}>
                <TextInput
                  style={styles.otherInputs}
                  label="Confirm Password"
                  placeholder="Confirm Password:"
                  onChangeText={(text) => setConfPassword(text)}
                  secureTextEntry
                  value={confirmPassword}
                />
              </View>
            )}

            <View style={styles.buttons}>
              <PrimaryButton
                onPress={() => {
                  register(email, password, confirmPassword, navigation);
                  navigation.navigate("MainScreen");
                }}
              >
                {isLogin ? "LOG IN" : "SIGN UP"}
              </PrimaryButton>
              <Text style={styles.text}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Text>
              <SecondaryButton onPress={() => navigation.navigate("LogInScreen")}>
                {isLogin ? "SIGN UP" : "LOG IN"}
              </SecondaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 20,
  },
  text: {
    alignSelf: "center",
  },
  otherFields: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  inputViews: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  otherInputs: {
    flex: 1,
    color: "gray",
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 28,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    height: 40,
  },
  imageView: {
    width: 150,
    height: 150,
    marginTop: 20,
    alignSelf: "center",
  },
  BigView: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    // margin: 10,
    alignSelf: "center",
    aspectRatio: 1.5,
    height: undefined,
    width: undefined,
  },
});
