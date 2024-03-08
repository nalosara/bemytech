import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import PrimaryButton from "../components/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

function MyAccountScreen() {
  const navigation = useNavigation();
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.screen}>

          <View style={styles.topContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.rowContainer}>
                <Feather name="log-out" size={24} color="#64CBFF" />
                <Text style={styles.textContainer}>Log Out</Text>
              </View>
            </View>
          </View>
          <View style={styles.outerContainer}>
            <Text style={styles.logoutText}>
              Are you sure you want to log out?
            </Text>
          </View>

          <View style={styles.buttons}>
            <PrimaryButton onPress={async () => {
                   await logout();
                   console.log("aaaaaaaa", AsyncStorage.getItem(userInfo));
                  navigation.navigate("SplashScreen");
                }}>Yes</PrimaryButton>
            <PrimaryButton onPress={() => navigation.goBack()}>No</PrimaryButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default MyAccountScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  backContainer: {
    flex: 1,
    position: "absolute",
    left: 10,
    top: 10,
  },
  image: {
    flex: 1,
    margin: 10,
    alignSelf: "center",
    aspectRatio: 1.5,
    height: undefined,
    width: undefined,
  },
  imageView: {
    width: 80,
    height: 80,
    marginTop: 20,
    alignSelf: "center",
  },
  iconContainer: {
    marginTop: 2,
  },
  topContainer: {
    marginTop: 50,
    backgroundColor: "white",
    borderColor: "#a9a9a9",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
  },
  textContainer: {
    alignSelf: "center",
    marginLeft: 15,
    marginRight: 10,
    fontSize: 16,
  },
  innerContainer: {
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    padding: 12,
  },
  bottomInnerContainer: {
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  outerContainer: {
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 50,

    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingVertical: 20,
    alignItems: "center",
  },

  logoutText: {
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
