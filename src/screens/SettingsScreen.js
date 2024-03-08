import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import BasicButton from "../components/BasicButton";
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.screen}>
          <View style={styles.topContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.rowContainer}>
                <Ionicons name="settings-sharp" size={24} color="#64CBFF" />
                <Text style={styles.textContainer}>Settings</Text>
              </View>
            </View>
          </View>
          <View style={styles.outerContainer}>
            <View style={styles.arrow}>
              <Text style={styles.arrowText}>Privacy</Text>
              <BasicButton onPress={() => navigation.navigate('PrivacyScreen')}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="grey"
                />
              </BasicButton>
            </View>

            <View style={styles.arrow}>
              <Text style={styles.arrowText}>Country</Text>
              <BasicButton onPress={() => navigation.navigate('CountryRegionScreen')}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="grey"
                />
              </BasicButton>
            </View>

            <View style={styles.arrow}>
              <Text style={styles.arrowText}>Set Up Helena</Text>
              <BasicButton onPress={() => navigation.navigate('SetUpHelenaScreenOne')}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="grey"
                />
              </BasicButton>
            </View>
            <View style={styles.arrow}>
              <Text style={styles.arrowText}>Payment Information</Text>
              <BasicButton onPress={() => navigation.navigate('PaymentScreen')}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="grey"
                />
              </BasicButton>
            </View>
            <View style={styles.arrow}>
              <Text style={styles.arrowText}>Device Preferences</Text>
              <BasicButton onPress={() => navigation.navigate('DevicePreferencesScreen')}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="grey"
                />
              </BasicButton>
            </View>
            <View style={styles.lastArrow}>
              <Text style={styles.arrowText}>Log Out</Text>
              <BasicButton onPress={() => navigation.navigate('LogOutScreen')}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="grey"
                />
              </BasicButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SettingsScreen;

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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: "#a9a9a9",
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    justifyContent: 'space-evenly',
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
    marginVertical: 50,
    marginHorizontal: 30,
    borderColor: "#a9a9a9",
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: 14,
  },
  arrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  arrowText: {
    marginTop: 25,
    marginLeft: 10,
  },
  lastArrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
