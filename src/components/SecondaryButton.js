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
    margin: 10,
  },
  buttonInnerContainer: {
    backgroundColor: "#F4F4F4",
    paddingVertical: 5,
    paddingHorizontal: 15,
    elevation: 2,
    borderRadius: 30,
    
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
  },
});
