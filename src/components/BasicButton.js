import { View, Text, Pressable, StyleSheet } from "react-native";

function LogInButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default LogInButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 5,
    marginTop: 20,
  },
  buttonInnerContainer: {
    backgroundColor: "#F4F4F4",
    paddingVertical: 7,
    paddingHorizontal: 17,
    marginBottom: 10,
    borderRadius: 30,
    
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});