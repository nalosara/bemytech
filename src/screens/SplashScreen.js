import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import SecondaryButton from "../components/SecondaryButton";
import PrimaryButton from "../components/PrimaryButton";


function SplashScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
        ></Image>
      </View>
      <PrimaryButton onPress={() => navigation.navigate('SignUpScreen')}>SIGN UP</PrimaryButton>
      <Text>Already have an account?</Text>
      <SecondaryButton onPress={() => navigation.navigate('LogInScreen')}>LOG IN</SecondaryButton>

      <StatusBar style="auto" />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    aspectRatio: 1.5,
    height: undefined,
    width: undefined,
  },
  imageContainer: {
    padding: 10,
    width: 180,
    height: 180,
    marginBottom: 20,
    alignSelf: "center",
  },
});
