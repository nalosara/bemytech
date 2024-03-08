import { useEffect, useState } from "react";
import { Alert, View, StyleSheet, Image, Text, FlatList } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

import PrimaryButton from "../components/PrimaryButton";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function MainScreen({ places }) {
  const navigation = useNavigation();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

    async function verifyPermissions() {
      if (locationPermissionInformation && locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
      }
    
      if (locationPermissionInformation && locationPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
          'Insufficient Permissions!',
          'You need to grant location permissions to use this app.'
        );
        return false;
      }
    
      return true;
    }
    
    verifyPermissions();
    

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>No places added yet</Text>
        <View style={styles.rowContainer}>
          <View style={styles.navButton}>
            <PrimaryButton onPress={() => navigation.navigate("Map")}>
              <Entypo name="map" size={30} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.callButtonContainer}>
            <PrimaryButton
              onPress={() => navigation.navigate("AllContacts")}
            >
              <MaterialIcons name="phone" size={30} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
      style={styles.list}
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem places={item} />}
      />
      <View style={styles.rowContainer}>
        <View style={styles.navButton}>
          <PrimaryButton onPress={() => navigation.navigate("Map")}>
            <Entypo name="map" size={30} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.callButtonContainer}>
          <PrimaryButton
            onPress={() => navigation.navigate("AllContacts")}
          >
            <MaterialIcons name="phone" size={30} color="white" />
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    padding: 24,
  },
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  rowContainer: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
  },
  fallBackText: {
    fontSize: 16,
  },
  callButtonContainer: {
    left: 30,
  },
  navButton: {
    right: 30,
  },
});

