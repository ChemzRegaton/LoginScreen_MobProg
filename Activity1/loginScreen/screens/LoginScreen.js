import { TextInput, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    const handleLoginPress = () => {

        console.log('Login button pressed');
    };

  return (
    <View style={styles.container}>
        <View style={styles.mobile_bg}>
            <Image source={require("../assets/mobile_bg.png")} style={styles.mobile_bgImage} />   
        </View>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeLabel}>Welcome!</Text>
        </View>
        <View  style={styles.signinContainer}>
            <Text  style={styles.signinLabel}> Sign in your account here</Text>
        </View>
        <View style={styles.emailAddressContainer}>
            <TextInput style={styles.emailAddressTextInput}
            placeholder='Email Address' />
        </View>
        <View style={styles.passwordContainer}>
            <TextInput style={styles.passwordTextInput}
            placeholder='Password' />
        </View>
        <View>
            <Text style={styles.forgotPasswordLabel}> Forgot Password?</Text>
        </View>
        <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.loginButtonLabel} onPress={handleLoginPress}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
    },
    mobile_bgImage:{
        width: "100%",
       height: 250,
    },
    welcomeLabel: {
        fontSize: 70,
        marginTop: -150,
        fontWeight: "600",
        textAlign: "center",
        color: "black",
    },
    signinLabel: {
        fontSize: 18,
        marginTop: -60,
        textAlign: "center",
        color: "black",
        fontWeight: "550",
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
        marginLeft: 120,
        marginTop: 5,
        fontSize: 20,
        textAlign: "center",
        
    }
});