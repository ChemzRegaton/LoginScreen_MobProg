import { TextInput, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const LoginScreen = ({navigation}) => {
    const handleLoginPress = () => {
        navigation.navigate('Landing');
        console.log('Login button pressed');
    };
    const handleForgotPress = () => {
        console.log('Forgot Password link pressed');
    }
    const handleRgstPortalPress = () => {
        navigation.navigate('Registration');
        console.log('Sign Up here. link pressed');
    }

  return (
    <View style={styles.container}>
        <View style={styles.mobile_bg}>
            <Image source={require("../assets/mobile_bg.png")} style={styles.mobile_bgImage} />   
        </View>
        <View style={styles.women_bg}>
            <Image source={require("../assets/2.png")} style={styles.women_bgImage} />   
        </View>
        <View>
        
        </View>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeLabel}>Welcome!</Text>
        </View>
        <View  style={styles.signinContainer}>
            <Text  style={styles.signinLabel}> Sign in your account here</Text>
        </View>
        <View style={styles.emailAddressContainer}> 
            <Icon name="envelope" size={16} marginHorizontal={10} marginVertical={8} color={"darkgreen"}/>
            <TextInput style={styles.emailAddressTextInput} 
            placeholder='Email Address' /> 
        </View>
        <View style={styles.passwordContainer}>
            <Icon name="lock" size={20} marginHorizontal={10} marginVertical={6} color={"darkgreen"}/>
            <TextInput style={styles.passwordTextInput}
            placeholder='Password' />
        </View>
        <View>
            <TouchableOpacity style={styles.forgotPasswordLabel} onPress={handleForgotPress}>
                <Text style={styles.forgotPasswordLabel}>Forgot Password?</Text>
            </TouchableOpacity>  
        </View>
        <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.loginButtonLabel} onPress={handleLoginPress}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View  style={styles.registrationPortalContainer}>
            <Text  style={styles.registrationPortalLabel}> Don't have an account?
            <View>
            <TouchableOpacity style={styles.rgstPortalContainer} onPress={handleRgstPortalPress}>
                <Text style={styles.rgstPortalLabel}> Sign Up here.</Text>
            </TouchableOpacity> 
            </View></Text> 
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
        marginLeft: 1.5,
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
        marginLeft: 3,
    },

    forgotPasswordLabel:{
        color: "#2865fa",
        textAlign: "right",
        marginRight: 20,

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
        
    },
    registrationPortalLabel:{
        textAlign: "center",
        color: "black",
        fontSize: 15,
        marginBottom: 10
    },
    rgstPortalLabel:{
        color: "#2865fa",
        fontSize: 15,
        textAlign: "auto"

    }
});