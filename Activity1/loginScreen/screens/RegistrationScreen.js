import { TextInput, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const RegistrationScreen = ({navigation}) => {
    const handleLoginPress = () => {
        navigation.navigate('Landing')
        console.log('Login button pressed');
    };
    const handleLgnPortalPress = () => {
      navigation.navigate('Login')
      console.log('Login Portal pressed');
  };

  return (
    <View style={styles.container}>
        <View style={styles.mobile_bg}>
            <Image source={require("../assets/mobile_bg.png")} style={styles.mobile_bgImage} />   
        </View>
        <View style={styles.women_bg}>
            <Image source={require("../assets/1.png")} style={styles.women_bgImage} />   
        </View>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeLabel}>Hello User!</Text>
        </View>
        <View  style={styles.signupContainer}>
            <Text  style={styles.signupLabel}> Create your account here</Text>
        </View>
        <View style={styles.nameContainer}>
            <Icon name="user" size={16} marginHorizontal={10} marginVertical={8} color={"darkgreen"}/>
            <TextInput style={styles.nameTextInput}
            placeholder='Name' />
        </View>
        <View style={styles.emailAddressContainer}>
            <Icon name="envelope" size={16} marginHorizontal={10} marginVertical={8} color={"darkgreen"}/>
            <TextInput style={styles.emailAddressTextInput}
            placeholder='Email Address' />
        </View>
        <View style={styles.passwordContainer}>
            <Icon name="lock" size={16} marginHorizontal={10} marginVertical={8} color={"darkgreen"}/>  
            <TextInput style={styles.passwordTextInput}
            placeholder='Password' />
        </View>
        <View style={styles.confirmPassContainer}>
            <Icon name="key" size={16} marginHorizontal={10} marginVertical={8} color={"darkgreen"}/> 
            <TextInput style={styles.confirmPassTextInput}
            placeholder='Confirm Password' />
        </View>
        <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.loginButtonLabel} onPress={handleLoginPress}>
                <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
        <View  style={styles.loginPortalContainer}>
            <Text  style={styles.loginPortalLabel}> Have an already account?
            <View>
            <TouchableOpacity style={styles.lgnPortalContainer} onPress={handleLgnPortalPress}>
                <Text style={styles.lgnPortalLabel}> Log in here.</Text>
            </TouchableOpacity> 
            </View></Text> 
        </View>
    </View>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
    },
    mobile_bgImage:{
        width: "100%",
       height: 250,
    },
    women_bgImage:{
      width: "100%",
     height: 250,
     marginBottom: 120,
     marginTop: -200
  },
    welcomeLabel: {
        fontSize: 70,
        marginTop: -150,
        fontWeight: "600",
        textAlign: "center",
        color: "darkgreen",
        elevation: 50
    },
    signupLabel: {
        fontSize: 18,
        marginTop: -60,
        textAlign: "center",
        color: "black",
        fontWeight: "550",
    },
    nameContainer:{
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 20,
        height: 35,
        marginHorizontal: 40,
        marginVertical: 10,
        elevation: 20,
    },
    nameTextInput:{
        flex: 1,
        marginLeft: 15,
    },
    emailAddressContainer:{
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 20,
        height: 35,
        marginHorizontal: 40,
        marginVertical: 10,
        elevation: 20,
    },
    emailAddressTextInput:{
        flex: 1,
        marginLeft: 15,
    },
    passwordContainer:{
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 20,
        height: 35,
        marginHorizontal: 40,
        marginVertical: 10,
        elevation: 20,
    },
    passwordTextInput:{
        flex: 1,
        marginLeft: 15,
    },
    confirmPassContainer:{
      backgroundColor: "white",
      flexDirection: "row",
      borderRadius: 20,
      height: 35,
      marginHorizontal: 40,
      marginVertical: 10,
      elevation: 20,
  },
  confirmPassTextInput:{
      flex: 1,
      marginLeft: 15,
  },

    forgotPasswordLabel:{
        color: "#2865fa",
        textAlign: "right",
        marginRight: 60,
    },

    loginButtonContainer:{
        backgroundColor: "yellowgreen",
        flexDirection: "row",
        borderRadius: 20,
        height: 40,
        marginHorizontal: 40,
        marginVertical: 20,
        elevation: 20,
       
    },
    loginButtonText:{
        flex: 1,
        marginLeft: 110,
        marginTop: 5,
        fontSize: 20,
        textAlign: "center",
    },
    loginPortalLabel:{
      textAlign: "center",
      color: "black",
      fontSize: 15,
      marginBottom: 10
    },
    lgnPortalLabel:{
      color: "#2865fa",
      fontSize: 15,
      textAlign: "auto"

  }
});