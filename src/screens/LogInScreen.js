import React, { useState, useContext } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Spinner from 'react-native-loading-spinner-overlay';
// const login= async(email, password)=>{
// try {
//   const {data} =  await client.post(
//     '/sign-in',
//     {
//       email,
//       password,
//     },
//     {
//         headers: {
//         'Content-Type': "application/json",
//         'Accept': "application/json",
//         }  
//     }   
//  );
// console.log(data);  
//   if (data.success) {
//     alert("7chineh")
//   }else{
//     alert(data.message)
//   }

//   console.log(res.data);
// } catch (e) {
//   console.log(e);
 
// }
// }

const LoginScreen = ({isLogin, navigation}) => {
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const { isLoading, login, error } = useContext(AuthContext);
//   const { setIsLoggedIn, setProfile } = useLogin();
// const [userInfo, setUserInfo] = useState({
//   email: '',
//   password: '',
// });

// const [error, setError] = useState('');

// const { email, password } = userInfo;
const image = { uri: "https://img.freepik.com/free-vector/abstract-shiny-grey-technology-background_1035-12620.jpg?w=740&t=st=1667419101~exp=1667419701~hmac=3bbdef34e890179fbe282cbbf64169f4f1d670dcc98086340713541f09d6ac23" };
// const handleOnChangeText = (value, fieldName) => {
//   setUserInfo({ ...userInfo, [fieldName]: value });
// };

// const isValidForm = () => {
//   if (!isValidObjField(userInfo))
//     return updateError('Required all fields!', setError);

//   if (!isValidEmail(email)) return updateError('Invalid email!', setError);

//   if (!password.trim() || password.length < 8)
//     return updateError('Password is too short!', setError);

//   return true;
// };

// const submitForm = async () => {
//   if (isValidForm()) {
//     try {
//       const res = await client.post('/sign-in', { ...userInfo });

//       if (res.data.success) {
//         setUserInfo({ email: '', password: '' });
//         setProfile(res.data.user);
//         setIsLoggedIn(true);
//       }

//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
  



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
            
            <View style={styles.buttons}>
              <PrimaryButton
                onPress={() => {
                  login(email, password);
                  navigation.navigate("MainScreen");
                }}
              >
                {isLogin ? "SIGN UP" : "LOG IN"}
              </PrimaryButton>
              <Text style={styles.text}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Text>
              <SecondaryButton onPress={() => navigation.navigate("SignUpScreen")}>
                {isLogin ? "LOG IN" : "SIGN UP"}
              </SecondaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );

};

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



export default LoginScreen;