import React from 'react';
import { Pressable, Text, View, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router';


export default function Button(clickButton){
    const { onPressLoginBtn, LoginBtn = 'Login'} = clickButton;
    const { onPressSignUpBtn, SignUpBtn = 'Sign Up' } = clickButton;

return (
    <View style={styles.container}>


        {/*login button*/}
        <Link href="/login" asChild>
            <Pressable style={styles.button} onPressLoginBtn={onPressLoginBtn}>
                <Text style={styles.text}>{LoginBtn}</Text>
            </Pressable>
        </Link>

        <Link href="/signup" asChild>
            <Pressable style={styles.button} onPressSignUpBtn={onPressSignUpBtn}>
                <Text style={styles.text}>{SignUpBtn}</Text>
            </Pressable>
        </Link>

    </View>






    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16, // Padding around the container
    },
    corgiEscapeContainer: {
        marginBottom: 30,
        alignItems: 'center'
    },
    treatFallsContainer:{
        marginBottom: 30,
        alignItems: 'center'
    },
    button: {
        width: 200, // Set a fixed width or use maxWidth
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        marginVertical: 10, // Vertical spacing between buttons
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    GameHubText: {
        fontSize: 40,
        
    },
    CorgiEscapeText:{
        fontSize: 25
    },
    TreatFallsText:{
        fontSize: 25,
        textAlign: 'center' 
    },
    coinImage: {
        width: 75, 
        height: 75, 
        
    },
    doggoImage: {
        width: 125, 
        height: 125,
    },
    treatFallsImage:{
        width: 100, 
        height: 100,
    },

    coinTitle: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center', // Center the title under the image
        marginTop: 0, // Space between the coin image and the title
    },
    coinAndGameHubTextContainer: {
       flexDirection: 'row', 
       alignItems: 'center', 
       marginBottom: 20, 
    },
    coinContainer: {
        alignItems: 'center', // Center align the image and title within the container
    },

  });
