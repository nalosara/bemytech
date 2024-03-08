import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {
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

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 5,
    margin: 6,
  },
  buttonInnerContainer: {
    backgroundColor: "#64CBFF",
    paddingVertical: 8,
    paddingHorizontal: 18,
    elevation: 2,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1},
    shadowOpacity: 0.20,
    shadowRadius: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
